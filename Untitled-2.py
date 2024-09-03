import mysql.connector

# Replace with your actual database credentials
db_config = {
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "mydb"
}

try:
    connection = mysql.connector.connect(**db_config)
    print("Connected to the database!")
except mysql.connector.Error as err:
    print(f"Error: {err}")

query = "SELECT * FROM mydb"
cursor = connection.cursor()
cursor.execute(query)

# Fetch all rows
rows = cursor.fetchall()

for row in rows:
    print(row)

cursor.close()
connection.close()

