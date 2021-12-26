from app.models import db, Project

def seed_projects():
  CleanUpNewYork = Project(
    title="Clean Up New York",
    description="Help fund a New York environmental restoration project",
    video_src='https://www.youtube.com/embed/FGQAuN1hM8g',
    image_src='https://static01.nyt.com/images/2018/08/19/nyregion/00TRASH3/00TRASH3-jumbo.jpg',
    pledge_goal=30000, current_funding=0,
    end_date='2023 10 01', start_date='2021 10 08',
    risks="While there are always risks & challenges with creating and delivering a brand new product, we've minimized both by having the entire process, from production to delivery, already set and arranged.  We have already signed agreements with key suppliers and manufacturers, and our prototype has been finalized.  All of this, along with our strategic partnerships with experienced crowdfunding and fulfillment experts, leaves little room for error and ensures a very quick delivery.",
    user_id=2,
    tag_id=1)
  freeskewl = Project(
    title="freeskewl: Dance Classes and Performances",
    description="2022 season in Lenapehoking // Brooklyn, NY + accessible on Zoom",
    pledge_goal=9000, current_funding=0,
    end_date='2023 03 03', start_date='2021 10 05',
    user_id=3,
    tag_id=5)
  Assyrians = Project(
    title='Assyrians by Romane Iskaria',
    description='A photobook about the Assyrian community by Romane Iskaria',
    pledge_goal=9624, current_funding=0,
    end_date='2023 8 02', start_date='2021 01 01',
    risks="While there are always risks & challenges with creating and delivering a brand new product, we've minimized both by having the entire process, from production to delivery, already set and arranged.  We have already signed agreements with key suppliers and manufacturers, and our prototype has been finalized.  All of this, along with our strategic partnerships with experienced crowdfunding and fulfillment experts, leaves little room for error and ensures a very quick delivery.",
    user_id=2,
    tag_id=5
  )
  blind = Project(
    title='Blind Visionaries',
    description='A photography book by the blind, visually impaired and sighted photographers of The Seeing With Photography Collective.',
    pledge_goal=12000, current_funding=0,
    end_date='2024 8 02', start_date='2021 01 01',
    risks="While there are always risks & challenges with creating and delivering a brand new product, we've minimized both by having the entire process, from production to delivery, already set and arranged.  We have already signed agreements with key suppliers and manufacturers, and our prototype has been finalized.  All of this, along with our strategic partnerships with experienced crowdfunding and fulfillment experts, leaves little room for error and ensures a very quick delivery.",
    user_id=2,
    tag_id=5
  )
  emblems = Project(
    title='A Book of Emblems:The True, The Good, and The Beautiful',
    description='An exploration of wisdom, ideas, symbolism, and spirituality in 100 beautiful and unique works of art with enigmatic texts.',
    pledge_goal=20000, current_funding=0,
    end_date='2023 1 02', start_date='2021 01 01',
    risks="While there are always risks & challenges with creating and delivering a brand new product, we've minimized both by having the entire process, from production to delivery, already set and arranged.  We have already signed agreements with key suppliers and manufacturers, and our prototype has been finalized.  All of this, along with our strategic partnerships with experienced crowdfunding and fulfillment experts, leaves little room for error and ensures a very quick delivery.",
    user_id=2,
    tag_id=5
  )
  g = Project(
    title='',
    description='',
    pledge_goal=0, current_funding=0,
    end_date='2023 8 02', start_date='2021 01 01',
    risks="While there are always risks & challenges with creating and delivering a brand new product, we've minimized both by having the entire process, from production to delivery, already set and arranged.  We have already signed agreements with key suppliers and manufacturers, and our prototype has been finalized.  All of this, along with our strategic partnerships with experienced crowdfunding and fulfillment experts, leaves little room for error and ensures a very quick delivery.",
    user_id=2,
    tag_id=5
  )

  db.session.add(CleanUpNewYork)
  db.session.add(freeskewl)
  db.session.add(Assyrians)
  db.session.add(blind)
  db.session.add(emblems)

  db.session.commit()


def undo_projects():
  db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')
  db.session.commit()
