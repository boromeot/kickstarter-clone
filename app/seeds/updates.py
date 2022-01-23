from app.models import db, Update

def seed_updates():
  updates = []
  updates.append(Update(
    title='More than 50% clean!',
    description='We are making great progress cleaning up NY!',
    project_id = 1,
    user_id = 1))
  updates.append(Update(
    title='Sorry we lost some progress :(',
    description='My late uncle let a stink one rip... sorry guys',
    project_id = 1,
    user_id = 1))

  for update in updates:
    db.session.add(update)

  db.session.commit()

def undo_updates():
    db.session.execute('TRUNCATE updates RESTART IDENTITY CASCADE;')
    db.session.commit()
