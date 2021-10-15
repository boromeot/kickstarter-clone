from flask import Blueprint, request
from flask_login import login_required
from app.models import Project, db
from app.forms import ProjectForm

project_routes = Blueprint('projects', __name__)

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
    project.title = form.data['title']
    project.description = form.data['description']
    db.session.commit()
    return project.to_dict()
  return 'error'

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
    return {'error': 'Form did not validate'}

@project_routes.route('/')
def get_projects_by_tag():
  projects = Project.query.all()
  projectDict = {"projects" : [project.to_dict() for project in projects]}
  return projectDict
