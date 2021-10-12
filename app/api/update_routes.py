from flask import Blueprint, jsonify, request, redirect
from flask_login import login_required
from app.models import Update, db



update_routes = Blueprint('updates', __name__)


@update_routes.route('/', methods=['POST'])
def create_update():
    print("Test------------------------")
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

        return "Success"
    else:
        return 'Bad Data'


@update_routes.route('/', methods=['DELETE'])
def delete_update():
    currentUpdate = Update.query.filter(Update.id == request.json['idx']).delete()
    # currentUpdate = Update.query.get())
    # print(currentUpdate)
    print( request.json['idx'],'------------------------')
    # db.session.delete(currentUpdate)
    db.session.commit()
    return 'currentUpdate.to_dict()'
