from .db import db

class Backer(db.Model):
  __tablename__ = 'backers'

  id = db.Column(db.Integer, primary_key=True)
  amount = db.Column(db.Integer)

  #Foreign Keys
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
  project_id = db.Column(db.Integer, db.ForeignKey('projects.id'))

  #Relationships
  user = db.relationship('User', back_populates='backers')
  project = db.relationship('Project', back_populates='backers')
