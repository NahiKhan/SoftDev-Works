#Henry Liu and Nahi Khan and TaeJoon Kim
#SoftDev1 pd9
#K8: Average
#2019-10-14

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O

DB_FILE = "discobandit.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops

print("To stop adding courses, press ENTER")

while (True):
    code = input("Course code: ")
    if (code == ""):
        break
    else:
        mark = input("Course mark: ")
        id = input("ID: ")
        c.execute("INSERT INTO courses VALUES ( '{}', {}, {} );".format(code, mark, id))

c.execute("CREATE TABLE stu_avg(id INTEGER, avg INTEGER)")

getStudent = "SELECT name, students.id, mark FROM students, courses WHERE students.id = courses.id;"
data = c.execute(getStudent)

total = 0
amount = 0
toDo = []
before = 0

for grade in data:
    currentID = grade[1]
    if (beforeID != currentID and beforeID != 0): # if not consecutive
        commands.append("INSERT INTO stu_avg VALUES({}, {})".format(beforeID, total/amount))
        print("Name: {}, ID: {}, Average: {}".format(name, beforeID, (total/amount)))
        amount = 1
        total = grade[2]
    else:
        amout += 1
        total += grade[2]
    name = grade[0]
    beforeID = currentID

for command in toDo:
    c.execute(command)

db.commit() #save changes
db.close()  #close database
