from flask import Blueprint, jsonify
from app.seeds import projects
from flask_login import login_required
from app.models import Project, Comment
from sqlalchemy.orm import joinedload

project_routes = Blueprint('projects', __name__)

@project_routes.route('/', methods=['GET'])
def get_AllProjects():
  projects = Project.query.all()
  allProjects = [project.to_dict() for project in projects]
  print('------------------PROJECTS',projects,'------------------------')
  print('------------------ALL_PROJECTS',allProjects,'------------------------')
  return jsonify(allProjects)

@project_routes.route('/<int:id>')
def get_project(id):
  project = Project.query.get(id)
  return project.to_dict()
