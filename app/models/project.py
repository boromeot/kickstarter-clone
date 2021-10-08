from .db import db

class Project(db.Model):
  __tablename__ = 'projects'

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(100), nullable=False)
  description = db.Column(db.String(200), nullable=False)
  pledge_goal = db.Column(db.Float, nullable=False)
  current_funding = db.Column(db.Float, nullable=False, default=0)
  start_date = db.Column(db.DateTime, nullable=False)
  end_date = db.Column(db.DateTime, nullable=False)
  risks = db.Column(db.Text, nullable=False)
  # Omitting tag_id until we create the tag table
  # tag_id = db.Column(db.Integer, nullable=False)

  # Relationships
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  user = db.relationship('User', back_populates='projects')

  def to_dict(self):
    return {
      'id' : self.id,
      'user_id' : self.user_id,
      'title': self.title,
      'pledge_goal' : self.pledge_goal,
      'current_funding': self.current_funding,
      'start_date' : self.start_date,
      'end_date' : self.end_date,
      'risks' : self.risks,
    }
