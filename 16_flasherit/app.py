# Team Dirty Dashers - Nahi Khan and Ahmed Sultan
# SoftDev1 pd9
# K16 -- Oh yes, perhaps I do…
# 2019-10-06

from flask import Flask
from flask import render_template
from flask import request
from flask import redirect
from flask import url_for
from flask import session
from flask import flash
import os

app = Flask(__name__)

# hard-coded login credentials
user = "dirtydashers"
pswd = "password99"

# creating secret key for session (staying logged in)
app.secret_key = os.urandom(32)

# preparing a string variable for outputting error messages
errorMsg = ""

@app.route('/')
def root():
    # checking to see if the user has already logged in
    if 'user' in session:
        return redirect(url_for('welcome'))
    return redirect(url_for('login'))

@app.route('/welcome')
def welcome():
    return render_template("welcome.html")

@app.route('/login')
def login():
    return render_template("login.html")

# handles the login process
@app.route("/auth")
def auth():
    inputUser = request.args['username']
    inputPswd = request.args['password']
    # checking to see if input credentials match hard coded credentials
    if inputUser == user:
        if inputPswd == pswd:
            session['user'] = inputUser
            return redirect(url_for('welcome'))
        else:
            errorMsg = "[INVALID PASSWORD]"
            flash(errorMsg)
            return redirect(url_for('root'))
    else:
        if inputPswd != pswd:
            errorMsg = "[INVALID USERNAME and PASSWORD]"
            flash(errorMsg)
            return redirect(url_for('root'))
        else:
            errorMsg = "[INVALID USERNAME]"
            flash(errorMsg)
            return redirect(url_for('root'))

# logout process only accessible from the logged-in page
@app.route("/logout")
def logout():
    session.pop('user')
    return redirect(url_for('root'))

if __name__ == "__main__":
    app.debug = True
    app.run()
