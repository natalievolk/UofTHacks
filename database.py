import mysql.connector
from datetime import datetime

def get_db_connection():

    config = {
    'user': 'root',
    'password': 'root',
    'host': 'localhost',
    'port': 8888,
    'unix_socket': '/Applications/MAMP/tmp/mysql/mysql.sock',
    'database': 'uofthacks',
    'raise_on_warnings': True
    }

    db = mysql.connector.connect(**config)

    return db

def create_entries_table(db):
    cursor = db.cursor()

    sql_query = """
                CREATE TABLE IF NOT EXISTS uofthacks.journal_entries (
                date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP , 
                phone_number VARCHAR(12) NOT NULL , 
                journal_entry TEXT NULL DEFAULT NULL , 
                PRIMARY KEY (date, phone_number)
                ) ENGINE = InnoDB;
                """

    cursor.execute(sql_query)

    print("entries table now exists")


def add_journal_entry(db, timestamp, phone_number, entry):
    cursor = db.cursor()

    sql_query = """
                INSERT INTO uofthacks.journal_entries (date, phone_number, journal_entry)
                VALUES (%s, %s, %s)
                """
    val = (timestamp, phone_number, entry)

    cursor.execute(sql_query, val)

    db.commit()

    print(cursor.rowcount, "record inserted")

if __name__ == "__main__":
    db = get_db_connection()

    timestamp = datetime.now()
    print(timestamp)
    
    phone_number = "+16475354467"
    entry = "hello this is my first journal entry!"

    add_journal_entry(db, timestamp, phone_number, entry)
