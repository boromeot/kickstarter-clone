from app.models import db, Project

def seed_projects():
  CleanUpNewYork = Project(
    title="Clean Up New York",
    description="Help fund a New York environmental restoration project",
    pledge_goal=30000, current_funding=0,
    end_date='2022-10-01', start_date='2021-10-08',
    risks="Here are some risks",
    tag_id=1, user_id=2)
  EpicChocolateBar = Project(
    title="Epic Chocolate Bar",
    description="A chocolate bar that not only subverts but transcends the expectations of your tastebuds.",
    pledge_goal=5000, current_funding=450,
    end_date='2023-03-03', start_date='2021-10-05',
    risks="This chocolate is uncharacteristicly risky",
    tag_id=2, user_id=3)
  SickAlbum = Project(
    title="Sick Album",
    description="I'm endeavoring to create the greatest punk-pop-rock-jazz-R&B fusion album in the world.",
    pledge_goal=12000, current_funding=217,
    end_date='2022-03-08', start_date='2020-02-02',
    risks="There are no promises this project will come to fruition, or even be what you expect it to be.  Nonetheless, I appreciate your contributions toward the project.",
    tag_id=3, user_id=1)

  db.session.add(CleanUpNewYork)
  db.session.add(EpicChocolateBar)
  db.session.add(SickAlbum)

  db.session.commit()


def undo_projects():
  db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')
  db.session.commit()
