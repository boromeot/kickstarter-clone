from flask.cli import AppGroup
from .users import seed_users, undo_users
from .projects import seed_projects, undo_projects
from .comments import seed_comments, undo_comments
from .updates import seed_updates, undo_updates
from .faqs import seed_faqs, undo_faqs
from .tags import seed_tags, undo_tags
from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding, truncate all tables prefixed with schema name
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
        # Add a truncate command here for every table that will be seeded.
        db.session.commit()
    seed_users()
    seed_tags()
    seed_projects()
    seed_comments()
    seed_updates()
    seed_faqs()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_projects()
    undo_comments()
    undo_updates()
    undo_faqs()
    undo_tags()
    # Add other undo functions here
