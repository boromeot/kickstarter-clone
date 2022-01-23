from turtle import title
from app.models import db, Update, project

def seed_updates():
  updates = [
    Update(
      title='More than 50% clean!',
      description='We are making great progress cleaning up NY!',
      project_id=1,
      user_id=1
      ),
    Update(
      title='Sorry we lost some progress :(',
      description='Garabage spill',
      project_id=1,
      user_id=1
      ),
    Update(
      title='Thank you + keep spreading the word!',
      description='Thank you so much to all who have contributed! We are truly grateful and touched by your support. Your pledge will go directly to working artists. We still have a long way to go. However, we believe that we can do it together. If everyone who attended a 2020 or 2021 freeskewl event donated $1, we would exceed our goal! If this is a project that you believe in, please spread the word! You can ask for a pledge in your name from family and friends for the holidays. This gift will MAKE DANCE HAPPEN and you will receive perks like t-shirts, hybrid classes, VIP performance tickets,  pre-recorded audio classes, and more.',
      project_id=2,
      user_id=3
      ),
    Update(
      title='NYE Gratitude',
      description='Happy almost-New Year, everyone! We are popping in to "say" a huge THANK YOU. With 28 hours to go, we are deeply moved by the 142 of you who have pledged so far. We have so much gratitude for you all and are touched by your support and trust in this project. Your generosity is both validating and humbling. We wish you all the very best during this time and hope you are as safe and healthy as can be.',
      project_id=2,
      user_id=3
    ),
    Update(
      title='18% in 2 days',
      description="It's crazy ! I'm very happy that we reached 18% of the first goal in just two days ! A huge thank you to all of you ! Do not hesitate to continue to talk about it around you and to share the campaign link ! We'll get there ! C'est fou ! Très heureuse que nous ayons atteint 18% du premier objectif en seulement deux jours ! Un immense merci à vous tous ! N'hésitez pas à continuer d'en parler autour de vous et à partager le lien de la campagne ! On va y arriver !",
      project_id='3',
      user_id='1'
    ),
    Update(
      title='46% achieved! We are almost at 50%!',
      description="46% achieved !  A big thank you for your support! More than 4% before half of the financing (50%) of my campaign, which helps me to cross this course? Continuez à partager autour de vous, on va y arriver ! 46% atteint !  Un grand merci pour votre soutient ! Plus que 4% avant la moitié du financement (50%) de ma campagne, qui m'aide à franchir ce cap? Continuez à partager autour de vous, on va y arriver !",
      project_id='3',
      user_id='1'
    ),
    Update(
      title='Incredible start! We are well on our way to meeting our goal.',
      description='Thanks to all who have donated. I want to point out something you may not have noticed. There is an add on offered.  For only $15 you can add on a print of Blind Angel, by Stephen Dominguez. Stephen was one of our original members and made many memorable photographs, This photo of fellow member Jessica Jones has never been published. Like all the prints we offer it will be printed on archival heavy weight paper.  Just press the add on button to add it to your rewards.',
      project_id=4,
      user_ud=1
    ),
    Update(
      title="We've reached our funding goal!!! Thank you so much for your support!",
      description="Dear Blind Visionaries backers, We're thrilled to inform you that today we reached our funding goal! We are profoundly thankful for all your support and overjoyed that Blind Visionaries will become a reality!  Thank you!!!",
      project_id=4,
      user_ud=1
    ),
    Update(
      title='Great first days and gained the “Project We Love” tag!',
      description='Hello everyone! After the initial days of the first campaign, I was blown away by all the generous people and their willingness to support this project. The first days of this new campaign has seen nearly quadruple the number of backers as last campaign and I am more amazed and thankful than ever. Needless to say, it was an exciting launch. Another awesome achievement was that Kickstarter recognized the project’s momentum and gave it the label of a “Project We Love”. Gaining that honor was in large part because of all those who stuck with the overall project and followed it through to the new campaign. I can’t thank you all enough for that. Hopefully all this bodes well for continued contributions via exposure on Kickstarter’s front page and eventual successful funding. There’s still a ways to go, but we’re only at the beginning and I am always working on ways to promote the project and get the word out. As always, I’m open to hearing any suggestions, comments, or concerns, and feel free to ask me any questions you have. Thanks!',
      project_id=5,
      user_id=1
    ),
    Update(
      title='Nearly 30% funded and on track to meet the goal',
      description='Once again, many thanks to all the backers and everyone’s continued interest in the project. Though things have slowed down a bit in terms of new backers coming on board, I’m still hopeful the campaign will reach its goal. We are 28% funded and only slightly over a quarter of the campaign over, so considering that, we are still on course to succeed.   In an update I plan to post in a few days, I will be presenting one of the emblems I’ve been recently spending some time thinking about and revising. It’s emblem number 12 titled Reality. Like most of the emblems, it’s not a definitive proclamation of what the subject is, but a prompt to start thinking about the topic and maybe challenging preconceived notions. Keep a watch out for that update.',
      project_id=5,
      user_id=1
    ),
    Update(
      title='Thank you! Over funded and we have unlocked 4 stretch goals, VOTING TIME!',
      description='Thank you so much! We are funded and doing so well. So sorry if I have taken too long to get back to you all but life has been busy and I have been totally busy fixing up all the stretch goal graphics.  Due to an amazing fan who bought a massive original she has helped the project to grow and unlock 4 free stretch goals. Due to this amazing person, she will allow me to set up voting on all the new stretch goals. I have three ideas I want to get votes on asap.',
      project_id=6,
      user_id=1,
    ),
    Update(
      title='We will ship the Adventure Boil-Grill to EU countries',
      description='Dear backers, Thank you very much for your pledges so far. We are grateful for all your support and feedback; they really mean a lot to us! As a response to many requests from the backers living outside Denmark, we now open new shipment destinations to all the countries within the European Union. The shipment prices used on the project page are the estimated ones. The exact shipping price will be confirmed by the time we prepare for shipping the product to you ;)',
      project_id=8,
      user_id=2
    ),
    Update(
      title='We achieved 44% of the funding goal in 24 hours!',
      description='Dear great backers, After 24 hours, we achieved 44% of the funding goal. It is the first time we launched a project on the Kickstarter platform, and the result went far beyond our expectations 💪. We are much happy and grateful for all the pledges from you. Now we would like to shout out a big thank to all of you <3Thank you, the supporters from Denmark, Germany, Spain - and other countries - thank you for kicking us that far!',
      project_id=8,
      user_id=2
    ),
    Update(
      title='Great First Day',
      description='Thanks to all of you for being the first group to support CHAOS. I’ve been going over the album in my head all day and the thought that I may be sitting in a studio for a MONTH making this this is surreal. It’s going to be a journey, but this is the best start I could have asked for!',
      project_id=9,
      user_id=1
    ),
    Update(
      title='40% FUNDED!',
      description='Hello Everyone! We have a little under 30 Days left and I wanted to give a little update. We have just reached 40% funding! I want to thank all of you for every single dollar you have pledged for this project. Not only have you removed about 155 hours of breaking pallets from my march agenda, but you have given me that time IN A STUDIO to make this album. Ive been writing up a storm and Im locked and ready to go!',
      project_id=9,
      user_id=1
    )
  ]

  for update in updates:
    db.session.add(update)

  db.session.commit()

def undo_updates():
    db.session.execute('TRUNCATE updates RESTART IDENTITY CASCADE;')
    db.session.commit()
