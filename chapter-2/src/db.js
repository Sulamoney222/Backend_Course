import {DatabaseSync} from 'node:sqlite'

const db = new DatabaseSync(':memory:')

db.exec(
    `
    CREAT TABLE user (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    username TEXT UNIQUE,
    password TEXT
    )
    `
)

db.exec(
    `
    cREATE TABLE todos(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    User_id INTEGER
    task TEXT,
    completed BOOLEAN DEFAULT 0,
    FOREGIN KEY(user_id) REFERENCES users(id)
    )
    `
)

export default db