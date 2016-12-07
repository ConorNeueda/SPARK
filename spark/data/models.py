from spark import db
from werkzeug.security import generate_password_hash, \
    check_password_hash


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80))
    password = db.Column(db.String(20))
    admin = db.Column(db.Boolean)

    def __init__(self, name="", password="", admin=False):
        self.username = name
        self.set_password(password)
        self.admin = admin

    def set_password(self, pwd):
        self.password = generate_password_hash(pwd)

    def check_password(self, pwd):
        return check_password_hash(self.password, pwd)

    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def is_admin(self):
        if self.admin:
            return True
        return False

    def get_id(self):
        return unicode(self.id)

    def __repr__(self):
        return '<User %r>' % (self.username)

    def get_pword(self):
        return self.password


def user_exists(uname):
    test = User.query.filter_by(username=uname).first()
    if test is not None:
        return True
    return False


def admin_exists():
    test = User.query.filter_by(admin=True).first()
    if test is not None:
        return True
    return False

