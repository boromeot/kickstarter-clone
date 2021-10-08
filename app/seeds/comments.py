from app.models import db, Comment

def seed_comments():
  comments = []
  comments[0] = Comment(description="Simply amazing", project_id=1, user_id=1)
  comments[1] = Comment(description="What a wonderful idea", project_id=2, user_id=2)
  comments[2] = Comment(description="wack", project_id=3, user_id=3)


  for comment in comments:
    db.session.add(comment)

  db.session.commit


def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
