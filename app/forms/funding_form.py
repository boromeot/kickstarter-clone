from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired

class FundingForm(FlaskForm):
  additional_funding = IntegerField('additional_funding', validators=[DataRequired()])
