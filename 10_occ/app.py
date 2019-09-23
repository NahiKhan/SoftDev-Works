#Nahi Khan, Connor Oh, Winston Peng [Team Beaker]

#SoftDev1 pd9

#K10 -- Jinja Tuning

#2019 - 09 - 23


from flask import Flask, render_template

import csv
import random

file = open("occupations.csv","r")
readfile = file.readlines()

##########################################################
app = Flask(__name__)
heading = '''Nahi Khan, Connor Oh, Winston Peng [Team Beaker]

SoftDev1 pd9

K10 -- Jinja Tuning

2019 - 09 - 23'''
@app.route("/occupyflaskst")
def template():
    return render_template(
        'pizza.html',
        foo = heading,
        title = "Pizzazz Occupations"
        blah = readfile
    )
app.debug = True
app.run()
