from flask import Blueprint, jsonify
from app.models import Faq

FAQ_routes = Blueprint('FAQs', __name__)
