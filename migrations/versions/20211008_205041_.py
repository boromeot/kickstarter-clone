"""empty message

Revision ID: fee9ddade32e
Revises: 2fda19d3b24c
Create Date: 2021-10-08 20:50:41.706445

"""
from alembic import op
import sqlalchemy as sa
import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")

# revision identifiers, used by Alembic.
revision = 'fee9ddade32e'
down_revision = '2fda19d3b24c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('faqs',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('question', sa.String(length=200), nullable=False),
    sa.Column('answer', sa.String(length=500), nullable=False),
    sa.Column('project_id', sa.Integer(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['project_id'], ['projects.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE faqs SET SCHEMA {SCHEMA};")
    op.drop_table('faq')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('faq',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('question', sa.VARCHAR(length=200), autoincrement=False, nullable=False),
    sa.Column('answer', sa.VARCHAR(length=500), autoincrement=False, nullable=False),
    sa.Column('project_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('user_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['project_id'], ['projects.id'], name='faq_project_id_fkey'),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name='faq_user_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='faq_pkey')
    )
    op.drop_table('faqs')
    # ### end Alembic commands ###
