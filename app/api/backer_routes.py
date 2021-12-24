from flask import Blueprint
from flask.login import login_required, current_user
from app.models import Backer, db
from app.forms import FundingForm

backer_routes = Blueprint('backers', __name__)

# @backer_routes.route('/', methods=['POST'])
# @login_required
# def post_backer(project_id):
