from .db import db, environment, SCHEMA, add_prefix_for_prod

class Faq(db.Model):
  __tablename__ = 'faqs'
  if environment == "production":
      __table_args__ = {'schema': SCHEMA}
  id = db.Column(db.Integer, primary_key=True)
  question = db.Column(db.String(200), nullable=False)
  answer = db.Column(db.String(500), nullable=False)

  # Foreign Keys
  project_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('projects.id')))
  user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))

  # Relationships
  project = db.relationship('Project', back_populates='faqs')
  user = db.relationship('User', back_populates='faqs')

  def to_dict(self):
    return {
      'id': self.id,
      'question': self.question,
      'answer': self.answer,
      'project_id': self.project_id,
      'user_id': self.user_id,
    }
