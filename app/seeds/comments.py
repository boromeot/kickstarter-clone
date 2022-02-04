from app.models import db, Comment

def seed_comments():
  comments = [
    Comment(description="Simply amazing", project_id=1, user_id=1),
    Comment(description="nice work", project_id=1, user_id=1),
    Comment(description="Woo hoo! Off we go!", project_id=5, user_id=3),
    Comment(description="What a wonderful idea", project_id=2, user_id=2),
    Comment(description="Would love to have my kids do this", project_id=2, user_id=1),
    Comment(description="Will there be a form to fill out if we want it in English or French?", project_id=3, user_id=2),
    Comment(description="Wow! This book is going to be incredible.", project_id=4, user_id=2),
    Comment(description="Have you looked into increasing your social media presence? Although there are good suggestions for improving details with your kickstarter I think the Kickstarter overall was well put together, but I do not see any way to follow you on the Kickstarter or your webpage, no link to your instagram on either. I think you could likely build an impressive number of fans who would support your future works if you made a facebook, twitter, Pinterest, Deviantart, and ArtStation page and made links available to them on your webpage. Facebook being the most prominent. ", project_id=4, user_id=2),
    Comment(description="What a real shame this was not successful. Please please try again but keep it simple and look at how you can deliver this internationally then your not eliminating 2/3rd of backers.", project_id=5, user_id=3),
    Comment(description="Fam we got this", project_id=5, user_id=4),
    Comment(description="I can't wait to receive the prints, so looking forward to seeing your skill as an artist", project_id=6, user_id=2),
    Comment(description="So looking forward to seeing the final project. Love your work Anthony. Keep it up!!! 😻", project_id=6, user_id=3),
    Comment(description="Is there a way to ship this to the US? I am extremely interested in your product!", project_id=8, user_id=1),
    Comment(description="What are the measurements of the grill? is the temperature adjustable? Will it be hot below the grill if it will be used on grass for example?", project_id=8, user_id=3),
    Comment(description="Will you add other shipping destinations like the UK please?", project_id=2, user_id=4),
  ]



  for comment in comments:
    db.session.add(comment)

  db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
