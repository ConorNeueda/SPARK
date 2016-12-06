from flask import Flask
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
app.config.from_object('spark.config')
db = SQLAlchemy(app)

from spark.data.models import User

db.create_all()

import spark.views
