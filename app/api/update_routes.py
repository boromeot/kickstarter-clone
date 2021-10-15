from flask import Blueprint, jsonify, request, redirect
from flask_login import login_required
from app.models import Update, db
from app.forms import UpdateForm
from flask import jsonify



update_routes = Blueprint('updates', __name__)


@update_routes.route('/', methods=['POST'])
def create_update():
    if request.method == 'POST':
        print('HERE!!!---------------------------------------')
        print(request.get_json())
        
        new_update = Update(
            title=request.json['title'],
            description=request.json['description'], 
            project_id=request.json['project_id'],
            user_id=request.json['user_id'],
        )
        db.session.add(new_update)
        db.session.commit()

        allUpdates = Update.query.all() 
        updates = [update.to_dict() for update in allUpdates]
        print(updates)

        return jsonify(updates)
    else:
        return 'Bad Data'
        

@update_routes.route('/<int:id>', methods=['PATCH'])
def patch_update(id):
    form = UpdateForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print(form['csrf_token'].data)
    if request.method == 'PATCH':
        print('------------------Making Patch Request--------------------')
        print('------------------', request.json['idx'])
        print('------------------', form.data['title'])
        print('------------------', form.data['description'])

        updateToChange = Update.query.get(request.json['idx'])
        print(updateToChange.to_dict(), '---------------------------------')
        
        if form.validate_on_submit():
            updateToChange.title = form.data['title']
            updateToChange.description = form.data['description']
            db.session.commit()
            allUpdates = Update.query.all()
            fillStoreWithUpdates = [update.to_dict() for update in allUpdates]
            print('----------------ALL UPDATES ----------------')
            print(fillStoreWithUpdates)
            return jsonify(fillStoreWithUpdates)
        else:
            return jsonify('Form did not validate!')

@update_routes.route('/', methods=['DELETE'])
def delete_update():
    print( request.json['idx'],'------------------------')
    currentUpdate = Update.query.filter(Update.id == request.json['idx']).delete()
    db.session.commit()
    allUpdates = Update.query.all()
    updates = [update.to_dict() for update in allUpdates]
    return jsonify(updates)
