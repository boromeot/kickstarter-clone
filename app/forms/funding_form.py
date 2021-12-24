from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired, ValidationError

def not_less_than_zero(form, field):
  if field.data < 0:
    print(type(field.data))
    raise ValidationError('Can not donate less than 0')

class FundingForm(FlaskForm):
  additional_funding = IntegerField('additional_funding', validators=[DataRequired(), not_less_than_zero])
  