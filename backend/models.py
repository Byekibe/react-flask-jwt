import mysql.connector
from mysql.connector import errorcode
from dotenv import load_dotenv
load_dotenv()
import os

user=os.getenv("USER")
password=os.getenv("PASSWORD")
host=os.getenv("HOST")
database=os.getenv("DATABASE")

def create_connection():
    try:
        conn = mysql.connector.connect(user=user, database=database, host=host, password=password)
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Something is wrong with your user name or password")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database does not exist")
        else:
            print(err)
    return conn