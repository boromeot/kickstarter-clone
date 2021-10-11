from flask import Blueprint, jsonify, request, redirect
from flask_login import login_required
from app.models import Update, db



update_routes = Blueprint('updates', __name__)


@update_routes.route('/', methods=['POST'])
def create_update():
    print("Test------------------------")
    # interesting ways to grab data when not using action or method in form submission on frontend components
    # body = request.get_json()
   
    
    print(request.json['title'])
    # print(body['title'])
    # print(body['description'])
    # print(body['user_id'])
    # print(body['project_id'])
    # print(Update(
    #         title=body['title'],
    #         description=body['description'], 
    #         project_id=body['project_id'],
    #         user_id=body['user_id'],
    #     ))

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

# description = str(body['description'])
    # title = str(body['title'])
    # user_id = body['user_id']
    # project_id = body['project_id']
    # db.session.add(Update(
    #     title=title,
    #     description=description, 
    #     project_id=project_id,
    #     user_id=user_id
    # ))

    # title = request.form.get('title')
    # print(request.form.get('title'))
    # description = request.form.get('description')
    # print(request.form.get('description'))


    # print(title, description, body['user_id'], body['project_id'], "DATAAAAAAAAAAAAAAAAAAAAAAaa")
    # print(title, description, "DATAAAAAAAAAAAAAAAAAAAAAA Twooooooooooooooo")
