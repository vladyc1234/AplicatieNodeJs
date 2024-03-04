const sqlite3 = require('sqlite3').verbose();
let db;

function connectToDatabase() {
    db = new sqlite3.Database('./project.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            console.error('Error opening database', err.message);
            throw err;
        } else {
            console.log('Connected to the IT projects database.');
        }
    });
}

class ProjectService {
  static getProjects() {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM IT_PROJECTS", [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  // When creating a new object CREATED_ON is given the curent date and MODIFIED_ON is left as it is
  static createProject({ projectName, startDate, targetEndDate, actualEndDate, createdBy }) {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO IT_PROJECTS (PROJECT_NAME, START_DATE, TARGET_END_DATE, ACTUAL_END_DATE, CREATED_ON, CREATED_BY) VALUES (?, ?, ?, ?, datetime('now'), ?)`;

      // Validate and format startDate
      startDate = new Date(startDate);
      if (isNaN(startDate)) return reject(new Error("Invalid startDate"));
      let month = startDate.getMonth() + 1; // Months are 0-indexed, add 1 for formatting
      let day = startDate.getDate();
      let year = startDate.getFullYear();
      const formattedStartDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

      // Validate and format targetEndDate
      targetEndDate = new Date(targetEndDate);
      if (isNaN(targetEndDate)) return reject(new Error("Invalid targetEndDate"));
      month = targetEndDate.getMonth() + 1; // Corrected to targetEndDate
      day = targetEndDate.getDate();
      year = targetEndDate.getFullYear();
      const formattedTargetEndDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

      // Initialize formattedActualEndDate as null
      let formattedActualEndDate = null;

      // Validate and format actualEndDate if not null
      if (actualEndDate != null) {
          actualEndDate = new Date(actualEndDate);
          if (isNaN(actualEndDate)) return reject(new Error("Invalid actualEndDate"));
          month = actualEndDate.getMonth() + 1; // Corrected to actualEndDate
          day = actualEndDate.getDate();
          year = actualEndDate.getFullYear();
          formattedActualEndDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      }

      db.run(sql, [projectName, formattedStartDate, formattedTargetEndDate, formattedActualEndDate, createdBy], function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID });
        }
      });
    });
  }

  static deleteProject(projectId) {
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM IT_PROJECTS WHERE PROJECT_ID = ?`;
      db.run(sql, projectId, function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({ deleted: this.changes });
        }
      });
    });
  }

  // When updating a new object MODIFIED_ON is given the curent date and CREATED_ON is left as it is
  static updateProject(projectId, { projectName, startDate, targetEndDate, actualEndDate, modifiedBy }) {
    return new Promise((resolve, reject) => {
      const sql = `UPDATE IT_PROJECTS SET PROJECT_NAME = ?, START_DATE = ?, TARGET_END_DATE = ?, ACTUAL_END_DATE = ?, MODIFIED_ON = datetime('now'), MODIFIED_BY = ? WHERE PROJECT_ID = ?`;

      // Validate and format startDate
      startDate = new Date(startDate);
      if (isNaN(startDate)) return reject(new Error("Invalid startDate"));
      let month = startDate.getMonth() + 1; // Months are 0-indexed, add 1 for formatting
      let day = startDate.getDate();
      let year = startDate.getFullYear();
      const formattedStartDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

      // Validate and format targetEndDate
      targetEndDate = new Date(targetEndDate);
      if (isNaN(targetEndDate)) return reject(new Error("Invalid targetEndDate"));
      month = targetEndDate.getMonth() + 1; // Corrected to targetEndDate
      day = targetEndDate.getDate();
      year = targetEndDate.getFullYear();
      const formattedTargetEndDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

      // Initialize formattedActualEndDate as null
      let formattedActualEndDate = null;

      // Validate and format actualEndDate if not null
      if (actualEndDate != null) {
          actualEndDate = new Date(actualEndDate);
          if (isNaN(actualEndDate)) return reject(new Error("Invalid actualEndDate"));
          month = actualEndDate.getMonth() + 1; // Corrected to actualEndDate
          day = actualEndDate.getDate();
          year = actualEndDate.getFullYear();
          formattedActualEndDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      }

      db.run(sql, [projectName, formattedStartDate, formattedTargetEndDate, formattedActualEndDate, modifiedBy, projectId], function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({ updated: this.changes });
        }
      });
    });
  }
}

// Ensure the database connection is opened before any service function is available
connectToDatabase();

module.exports = ProjectService;