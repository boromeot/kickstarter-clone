from flask import Blueprint
from app.models import Tag

tag_routes = Blueprint('tags', __name__)


@tag_routes.route('/')
def tags():
  tags = Tag.query.all()
  return tags.to_dict()
