from flask import Blueprint, request, jsonify
from flask_login import login_required
from app.models import Project, db
from sqlalchemy.orm import joinedload
import random
from app.forms import ProjectForm

project_routes = Blueprint('projects', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

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

@project_routes.route('/<int:id>', methods=['PUT'])
def put_project(id):
  project = Project.query.get(id)
  form = ProjectForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    for key, val in form.data.items():
      if key != 'csrf_token':
        setattr(project, key, val)
    db.session.commit()
    return project.to_dict()
  return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@project_routes.route('/', methods=['POST'])
@login_required
def post_project():
  form = ProjectForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    project = Project(
      user_id = (form.data['user_id']),
      tag_id = (form.data['tag_id']),
      title = (form.data['title'] if form.data['title'] else 'Default Title'),
      description = (form.data['description'] if form.data['description'] else 'Default description'),
    )
    db.session.add(project)
    db.session.commit()
    return project.to_dict()
  else:
    return {'error': 'Form did not validate'}, 401

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

  return jsonify(randomProjects)
