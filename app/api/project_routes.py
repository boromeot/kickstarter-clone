from flask import Blueprint, jsonify, request
from app.seeds import projects
from flask_login import login_required
from app.models import Project, db
from sqlalchemy.orm import joinedload

project_routes = Blueprint('projects', __name__)

@project_routes.route('/<int:id>')
def get_project(id):
  project = Project.query.get(id)
  return project.to_dict()


@project_routes.route('/')
def get_projects_by_tag():
  projects = Project.query.all()
  projectDict = {"projects" : [project.to_dict() for project in projects]}
  return projectDict


@project_routes.route('/<int:id>', methods=['PATCH'])
def patch_project(id):
  project = Project.query.get(id)
  project.campaign = request.json['campaign']
  db.session.commit()
  return project.to_dict()
