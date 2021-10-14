from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class ProjectForm(FlaskForm):
  title = StringField('title', validators=[])
  description = StringField('description', validators=[])
  tag_id = IntegerField('tag_id', validators=[DataRequired()])
  user_id = IntegerField('user_id', validators=[DataRequired()])
