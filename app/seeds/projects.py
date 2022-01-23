from app.models import db, Project

def seed_projects():
  projects = [
    Project(
      title="Clean Up New York",
      description="Help fund a New York environmental restoration project",
      video_src='https://www.youtube.com/embed/FGQAuN1hM8g',
      image_src='https://static01.nyt.com/images/2018/08/19/nyregion/00TRASH3/00TRASH3-jumbo.jpg',
      pledge_goal=30000, current_funding=0,
      end_date='2023 10 01', start_date='2021 10 08',
      risks="While there are always risks & challenges with creating and delivering a brand new product, we've minimized both by having the entire process, from production to delivery, already set and arranged.  We have already signed agreements with key suppliers and manufacturers, and our prototype has been finalized.  All of this, along with our strategic partnerships with experienced crowdfunding and fulfillment experts, leaves little room for error and ensures a very quick delivery.",
      user_id=1,
      tag_id=1),
    Project(
      title="freeskewl: Dance Classes and Performances",
      description="2022 season in Lenapehoking // Brooklyn, NY + accessible on Zoom",
      image_src='http://kickstarter-clone.s3.amazonaws.com/eee930e2064b4e10a474df3b24baa35e.jpeg',
      pledge_goal=9000, current_funding=0,
      end_date='2023 03 03', start_date='2021 10 05',
      user_id=3,
      tag_id=5),
    Project(
      title='Assyrians by Romane Iskaria',
      description='A photobook about the Assyrian community by Romane Iskaria',
      image_src='http://kickstarter-clone.s3.amazonaws.com/c3c2789f7706457fb8c7624c03d4325f.jpeg',
      pledge_goal=9624, current_funding=3900,
      end_date='2023 8 02', start_date='2021 01 01',
      risks="While there are always risks & challenges with creating and delivering a brand new product, we've minimized both by having the entire process, from production to delivery, already set and arranged.  We have already signed agreements with key suppliers and manufacturers, and our prototype has been finalized.  All of this, along with our strategic partnerships with experienced crowdfunding and fulfillment experts, leaves little room for error and ensures a very quick delivery.",
      user_id=1,
      tag_id=5
    ),
    Project(
      title='Blind Visionaries',
      description='A photography book by the blind, visually impaired and sighted photographers of The Seeing With Photography Collective.',
      image_src='http://kickstarter-clone.s3.amazonaws.com/7fd76c3101ef45b1a12ca320e169dbe7.jpeg',
      pledge_goal=12000, current_funding=12000,
      end_date='2024 8 02', start_date='2021 01 01',
      risks="While there are always risks & challenges with creating and delivering a brand new product, we've minimized both by having the entire process, from production to delivery, already set and arranged.  We have already signed agreements with key suppliers and manufacturers, and our prototype has been finalized.  All of this, along with our strategic partnerships with experienced crowdfunding and fulfillment experts, leaves little room for error and ensures a very quick delivery.",
      user_id=1,
      tag_id=5
    ),
    Project(
      title='A Book of Emblems:The True, The Good, and The Beautiful',
      description='An exploration of wisdom, ideas, symbolism, and spirituality in 100 beautiful and unique works of art with enigmatic texts.',
      image_src='http://kickstarter-clone.s3.amazonaws.com/de1686e1e7b24424aaa13cd6da6a008c.jpeg',
      pledge_goal=20000, current_funding=0,
      end_date='2023 1 02', start_date='2021 01 01',
      risks="While there are always risks & challenges with creating and delivering a brand new product, we've minimized both by having the entire process, from production to delivery, already set and arranged.  We have already signed agreements with key suppliers and manufacturers, and our prototype has been finalized.  All of this, along with our strategic partnerships with experienced crowdfunding and fulfillment experts, leaves little room for error and ensures a very quick delivery.",
      user_id=1,
      tag_id=5
    ),
    Project(
      title='MAKE 100: Detailed Dragon Paintings + Limited Edition Prints',
      description='100 custom dragons will be made with different commission tiers and dragon-type options. You select the type of dragon you want!',
      image_src='http://kickstarter-clone.s3.amazonaws.com/380d4fbb9cb74844968e2414ff6afb09.jpeg',
      pledge_goal=1794, current_funding=0,
      end_date='2023 8 02', start_date='2021 01 01',
      risks="While there are always risks & challenges with creating and delivering a brand new product, we've minimized both by having the entire process, from production to delivery, already set and arranged.  We have already signed agreements with key suppliers and manufacturers, and our prototype has been finalized.  All of this, along with our strategic partnerships with experienced crowdfunding and fulfillment experts, leaves little room for error and ensures a very quick delivery.",
      user_id=1,
      tag_id=5
    ),
    Project(
      title='The Remedy Cocktail Co.',
      description='An Apothecary Bar & Cocktail Catering Service, Inspired by Nature',
      image_src='http://kickstarter-clone.s3.amazonaws.com/d485e9e160cf422c9342f0905fa7b834.jpeg',
      pledge_goal=11111, current_funding=0,
      end_date='2023 8 02', start_date='2021 01 01',
      risks="While there are always risks & challenges with creating and delivering a brand new product, we've minimized both by having the entire process, from production to delivery, already set and arranged.  We have already signed agreements with key suppliers and manufacturers, and our prototype has been finalized.  All of this, along with our strategic partnerships with experienced crowdfunding and fulfillment experts, leaves little room for error and ensures a very quick delivery.",
      user_id=1,
      tag_id=2
    ),
    Project(
      title='Adventure Boil-Grill: A grill fueled by renewable energy',
      description='Grill your BBQ party in a sustainable way with a compact, convenient, non-toxic and environmentally friendly grill.',
      image_src='http://kickstarter-clone.s3.amazonaws.com/e4d5bedfafd449feb9ed63e1c33db3ae.jpeg',
      pledge_goal=3398, current_funding=0,
      end_date='2023 8 02', start_date='2021 01 01',
      risks="While there are always risks & challenges with creating and delivering a brand new product, we've minimized both by having the entire process, from production to delivery, already set and arranged.  We have already signed agreements with key suppliers and manufacturers, and our prototype has been finalized.  All of this, along with our strategic partnerships with experienced crowdfunding and fulfillment experts, leaves little room for error and ensures a very quick delivery.",
      user_id=2,
      tag_id=2
    ),
    Project(
      title='CHAOS: A Comedy Album by Artimus Wolz',
      description="CHAOS is an upcoming album by comedian and TikTok creator Artimus Wolz that builds on his hit comedy single 'Incompedance'",
      image_src='http://kickstarter-clone.s3.amazonaws.com/1ae26828ea75402197e5e507edecbfac.jpeg',
      pledge_goal=8000, current_funding=0,
      end_date='2023 8 02', start_date='2021 01 01',
      risks="While there are always risks & challenges with creating and delivering a brand new product, we've minimized both by having the entire process, from production to delivery, already set and arranged.  We have already signed agreements with key suppliers and manufacturers, and our prototype has been finalized.  All of this, along with our strategic partnerships with experienced crowdfunding and fulfillment experts, leaves little room for error and ensures a very quick delivery.",
      user_id=1,
      tag_id=3
    ),
  ]

  for project in projects:
    db.session.add(project)

  db.session.commit()


def undo_projects():
  db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')
  db.session.commit()
