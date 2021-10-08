from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Project

project_routes = Blueprint('projects', __name__)

@project_routes.route('/<int:id>')
def get_project(id):
  project = Project.query.get(id)
  return project.to_dict()
