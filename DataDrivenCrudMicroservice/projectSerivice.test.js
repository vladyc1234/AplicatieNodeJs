const ProjectService = require('../AplicatieJavascript/Service/ProjectService');
const sqlite3 = require('sqlite3');

// Mock the sqlite3 database methods
jest.mock('sqlite3', () => {
  return {
    verbose: jest.fn(() => ({
      Database: jest.fn().mockImplementation(() => ({
        all: jest.fn((query, params, callback) => callback(null, [{ PROJECT_ID: 1, PROJECT_NAME: "Test Project" }])),
        run: jest.fn(function(sql, params, callback) {
            const isUpdateOrDelete = sql.toLowerCase().startsWith('update') || sql.toLowerCase().startsWith('delete');
            const mockThis = isUpdateOrDelete ? { changes: 1 } : { lastID: 1 }; // Simulate 'changes' for update/delete
            callback.call(mockThis, null);
          }),
      }))
    }))
  };
});

describe('ProjectService', () => {
  it('should retrieve projects', async () => {
    const projects = await ProjectService.getProjects();
    expect(projects).toEqual([{ PROJECT_ID: 1, PROJECT_NAME: "Test Project" }]);
  });

  it('should create a project', async () => {
    const newProject = { projectName: "New Project", startDate: "2021-01-01", targetEndDate: "2021-12-31", createdBy: "Tester" };
    const result = await ProjectService.createProject(newProject);
    expect(result).toEqual({ id: 1 });
  });

  it('should update a project', async () => {
    const projectIdToUpdate = 1;
    const updateData = { projectName: "Updated Project Name", modifiedBy: "Tester", startDate: "2021-01-01", targetEndDate: "2021-12-31", modified: "Tester" };
  
    const result = await ProjectService.updateProject(projectIdToUpdate, updateData);
    expect(result).toEqual({ updated: 1 }); 
  });

  it('should delete a project', async () => {
    const projectIdToDelete = 1;
  
    const result = await ProjectService.deleteProject(projectIdToDelete);
    expect(result).toEqual({ deleted: 1 }); 
  });
});
