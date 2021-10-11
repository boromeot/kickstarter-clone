from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Update


update_routes = Blueprint('updates', __name__)


@update_routes.route('/')
def create_update(id):
    print("Test------------------------")
    const {} = request.body['update']
    return {message:"reached the create updates route", ids: id}

