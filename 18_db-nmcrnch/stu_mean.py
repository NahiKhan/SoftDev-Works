# Team Type Nice
# Nahi Khan, Taejoon Kim, Henry Liu
# SoftDev Period 9
# K18 Average
# 2019 - 10 - 10

import sqlite3   # Needed for the usage of sqlite database
import csv       # this is for csv input & output


DB_FILE = "school.db"

c = db.cursor()               # Allows for database operations
db = sqlite3.connect(DB_FILE) # if file doesn't already exist, create one

# ------------------------------------------------------

with open('students.csv') as students:
    reader = csv.DictReader(students)
    try:
        command = 'CREATE TABLE students ' \
              '( name TEXT, ' \
              'age INTEGER, ' \
              'id  INTEGER' \
              ');'
        c.execute(command)
        for row in reader:
            curr_name = row['name']
            curr_age = str(row['age'])
            curr_id = str(row['id'])
            command = 'INSERT INTO students (name,age,id)' + '\n' + \
                      'VALUES ((' + '\'' + curr_name + '\'' '), ' \
                              '(' + curr_age + '), ' \
                              '(' + curr_id + '));'
            c.execute(command)
    except sqlite3.OperationalError:
        pass

with open('courses.csv') as courses:
    reader = csv.DictReader(courses)
    try:
        command = 'CREATE TABLE courses ' \
              '(code TEXT, ' \
              'mark INTEGER, ' \
              'id  INTEGER' \
              ');'
        c.execute(command)
        for row in reader:
            curr_code = row['code']
            curr_mark = str(row['mark'])
            curr_id = str(row['id'])
            command = 'INSERT INTO courses (code,mark,id)' + '\n' + \
                      'VALUES ((' + '\'' + curr_code + '\'' '), ' \
                              '(' + curr_mark + '), ' \
                              '(' + curr_id + '));'
        c.execute(command)
    except sqlite3.OperationalError:
        pass

command = "SELECT name, students.id, mark FROM students, courses WHERE courses.id=students.id;"
foo = c.execute(command)
print(foo.)

#--------Just some stuff below from class notes--------------------------

db.commit()  # to save changes made
db.close()  # lastly to close the database
