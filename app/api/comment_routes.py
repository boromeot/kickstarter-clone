from flask import Blueprint, request
from app.forms import CommentForm
from app.models import Comment, db
from flask_login import login_required

comment_routes = Blueprint('comments', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@comment_routes.route('/', methods=['POST'])
@login_required
def post_comment():
  form = CommentForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    comment = Comment(
      description=form.data['description'],
    )
    db.session.add(comment)
    db.session.commit()
    return comment.to_dict()
  return {'errors': validation_errors_to_error_messages(form.errors)}, 401
