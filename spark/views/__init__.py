from spark import app
from flask import render_template, request
from spark import Ideas, db

@app.route("/")
def index():
    return render_template('/login.html')


@app.route("/newidea")
def hello():
    return render_template('/newidea.html')


@app.route("/echo", methods=['POST'])
def echo():
    idea = Ideas(idea_summary=request.form['idea_summary'], idea_text=request.form['idea'], user_id=1, vote=0)
    db.session.add(idea)
    db.session.commit()
    return "Your idea - " + request.form['idea'] + " - Has been submitted :)"
