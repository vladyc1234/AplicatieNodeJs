const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./project.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the project database.');
});

db.run(`CREATE TABLE IF NOT EXISTS IT_PROJECTS (
    PROJECT_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    PROJECT_NAME TEXT NOT NULL,
    START_DATE TEXT,
    TARGET_END_DATE TEXT,
    ACTUAL_END_DATE TEXT,
    CREATED_ON TEXT NOT NULL,
    CREATED_BY TEXT,
    MODIFIED_ON TEXT,
    MODIFIED_BY TEXT
  )`, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('IT_PROJECTS table created.');
    }
  });

  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Closed the database connection.');
  });