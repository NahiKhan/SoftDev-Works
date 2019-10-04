# Team Dirty Dashers - Nahi Khan and Ahmed Sultan
# SoftDev1 pd9
# K15 -- Do I Know You?
# 2019-10-02

from flask import Flask
from flask import render_template
from flask import request
from flask import redirect
from flask import url_for

app = Flask(__name__)

@app.route('/')
def root():
    return render_template("login.html")

@app.route('/welcome')
def welcome():
    return render_template("welcome.html")

@app.route('/error')
def error():
    return render_template("error.html")

@app.route("/auth")
def auth():
    if request.args["username"] == "qbert" and request.args["password"] == "ahmednahi":
        return redirect(url_for('welcome'))
    else:
        return redirect(url_for('error'))

if __name__ == "__main__":
    app.debug = True
    app.run()
