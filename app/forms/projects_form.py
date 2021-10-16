from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class ProjectForm(FlaskForm):
  title = StringField('title')
  description = StringField('description')
  tag_id = IntegerField('tag_id', validators=[DataRequired()])
  user_id = IntegerField('user_id', validators=[DataRequired()])
  campaign = StringField('campaign')
