from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class ProjectForm(FlaskForm):
  title = StringField('title')
  description = StringField('description')
  tag_id = IntegerField('tag_id', validators=[DataRequired()])
  user_id = IntegerField('user_id', validators=[DataRequired()])
  video_src = StringField('video_src')
  image_src = StringField('image_src')
  start_date = StringField('start_date')
  end_date = StringField('end_date')
