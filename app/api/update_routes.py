from flask import Blueprint, jsonify, request, redirect
from flask_login import login_required
from app.models import Update, db
from app.forms import UpdateForm
from flask import jsonify



update_routes = Blueprint('updates', __name__)


@update_routes.route('/', methods=['POST'])
def create_update():
    # print("Test------------------------")
    # print(request.json['title'])
    
    if request.method == 'POST':
        
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
        # print('------------------', request.json['title'])
        # print('------------------', request.json['description'])
        print('------------------', form.data['title'])
        print('------------------', form.data['description'])

        updateToChange = Update.query.get(request.json['idx'])
        print(updateToChange.to_dict(), '---------------------------------')
        
        if form.validate_on_submit():
            updateToChange.title = form.data['title']
            updateToChange.description = form.data['description']
            db.session.commit()
            allUpdates = Update.query.all()
            # return updateToChange.to_dict()
            fillStoreWithUpdates = [update.to_dict() for update in allUpdates]
            print('----------------ALL UPDATES ----------------')
            print(fillStoreWithUpdates)
            return jsonify(fillStoreWithUpdates)
        else:
            return jsonify('Form did not validate!')

@update_routes.route('/', methods=['DELETE'])
def delete_update():
    # currentUpdate = Update.query.get())
    # print(currentUpdate)
    print( request.json['idx'],'------------------------')
    # db.session.delete(currentUpdate)
    currentUpdate = Update.query.filter(Update.id == request.json['idx']).delete()
    db.session.commit()
    allUpdates = Update.query.all()
    updates = [update.to_dict() for update in allUpdates]
    return jsonify(updates)
