from flask import Blueprint, jsonify
from app.seeds import projects
from flask_login import login_required
from app.models import Project, Comment
from sqlalchemy.orm import joinedload

project_routes = Blueprint('projects', __name__)

@project_routes.route('/<int:id>')
def get_project(id):
  print('TEST')
  project = Project.query.get(id)
  print(project.to_dict(), 'PRINT PROJECTttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt')
  return project.to_dict()
