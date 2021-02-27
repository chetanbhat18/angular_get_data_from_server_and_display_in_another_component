#! C:\Users\Administer\AppData\Local\Programs\Python\Python38-32\python.exe

print("Content-Type: text/html\n")


import cgi
import mysql.connector
import json

conn = mysql.connector.connect(host ="localhost", user = "root", password = "", database ="test")
cursor = conn.cursor()

selectq = "select * from categories"

cursor.execute(selectq)

records = cursor.fetchall()

desc = cursor.description

column_names = [col[0] for col in desc]

data = [dict(zip(column_names, row)) for row in records]

data1 = json.dumps(data)
print(data1)
