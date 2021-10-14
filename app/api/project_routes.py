from flask import Blueprint, jsonify
from app.seeds import projects
from flask_login import login_required
from app.models import Project, Comment
from sqlalchemy.orm import joinedload
import random

project_routes = Blueprint('projects', __name__)

@project_routes.route('/', methods=['GET'])
def get_AllProjects():
  projects = Project.query.all()
  allProjects = {"projects":[project.to_dict() for project in projects]}
  print('------------------PROJECTS',projects,'------------------------')
  print('------------------ALL_PROJECTS',allProjects,'------------------------')
  return allProjects

@project_routes.route('/<int:id>')
def get_project(id):
  project = Project.query.get(id)
  return project.to_dict()


@project_routes.route('/')
def get_projects_by_tag():
  projects = Project.query.all()
  projectDict = {"projects" : [project.to_dict() for project in projects]}
  return projectDict


@project_routes.route('/random')
def get_random_projects():
  projects_db = Project.query.all()
  # projectDict = {"projects" : [project.to_dict() for project in projects]}
  projects = [project.to_dict() for project in projects_db]
  randomNums = random.sample(range(1, len(projects_db)), 4)
  randomProjects = []
  for item in projects:
    if item['id'] in list(randomNums):
      randomProjects.append(item)

  # print("RANDOM NUMBERS-------------------------------------> ", randomNums)
  # print("DESTRUCTURED PROJECTS-------------------------------------> ", projects)
  # print("RANDOM PROJECTS-------------------------------------> ", randomProjects)

  return jsonify(randomProjects)
