# Team Tuorquoise Nahi Khan
# Period 9 SoftDev
# K17 incorporation into K18 Average
# 2019 - 10 - 12

#-----------------------------------------------------------------------------

import sqlite3 # control sqlite db
import csv # faciliate CSV off/on

DB_FILE = "school.db"

db = sqlite3.connect(DB_FILE) # creates file if it does not already exist
c = db.cursor() # facilitate db ops

gradesDict = {}
avgDict = {}

# initializes grades and average dictionaries with empty lists and 0.0 respectively
def initDict():
    q = "SELECT id FROM students;"
    a = c.execute(q)
    for line in a:
        gradesDict[line[0]] = [];
        avgDict[line[0]] = 0.0;

# looks up students' grades in dict
def studentsGrades():
    q = "SELECT name, students.id, mark FROM students, courses WHERE students.id = courses.id;"
    a = c.execute(q)
    # adds grades to grades dictionary with id as key and current grade is appended to the value
    for line in a:
        gradesDict[line[1]].append(line[2])

# computes each students averages and adds to dict
def studentsAverages():
    for key in gradesDict:
        count = 0;
        # adds grades to average dictionary with id as key and grade gets added to the value
        for grade in gradesDict[key]:
            avgDict[key] += grade
            count += 1
        # the value for the current id in the average dictionary is divided by the number of grades to get the average
        avgDict[key] /= count

# prints each students name, id, and average
def printAverages():
    q = "SELECT name, id FROM students;"
    a = c.execute(q)
    # quoted as before^
    for line in a:
        ans = "student: {}, id: {}, average: {}".format(line[0], line[1], avgDict[line[1]])
        print(ans)

# student average associated with "stu_avg" with the list of IDs
def createAvgTable():
    # table of stu_avg in db created
    createCommand = "CREATE TABLE stu_avg (id INTEGER PRIMARY KEY, avg REAL);"
    c.execute(createCommand)
    # stu_avg incorporates the averages and IDs
    for key in avgDict:
        insertCommand = "INSERT INTO stu_avg VALUES ({}, {});".format(key, avgDict[key])
        c.execute(insertCommand)

# In order to function properly, rows are added to the table
def addCourses():
    # csv addition code shall be inputted here
    
    
addCourses()
initDict()
createAvgTable()
studentsGrades()
printAverages()
studentsAverages()

#----------------------------------------------------------------------------------

db.commit() # save changes
db.close() # close database
