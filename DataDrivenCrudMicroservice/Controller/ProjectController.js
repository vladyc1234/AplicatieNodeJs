const express = require('express');
const router = express.Router();
const ProjectService = require('../Service/ProjectService');
const CreateProjectDTO = require('../DTO/CreateProjectDTO');
const UpdateProjectDTO = require('../DTO/UpdateProjectDTO');

// Create a new project
router.post('/addProject', async (req, res) => {
  try {
    const createProjectDto = new CreateProjectDTO(req.body);
    const project = await ProjectService.createProject(createProjectDto);
    res.status(201).json(project);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Update an existing project
router.put('/updateProject/:id', async (req, res) => {
  try {
    const projectId = req.params.id;
    const updateProjectDto = new UpdateProjectDTO(req.body);
    const result = await ProjectService.updateProject(projectId, updateProjectDto);
    if (result.updated) {
      res.json({ message: 'Project updated successfully' });
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get all projects
router.get('/getProjects', async (req, res) => {
    try {
        const projects = await ProjectService.getProjects();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete an existing project
router.delete('/deleteProject/:id', async (req, res) => {
    const projectId = req.params.id;
    try {
        const result = await ProjectService.deleteProject(projectId);
        if (result.deleted) {
            res.json({ message: 'Project deleted successfully' });
        } else {
            res.status(404).json({ message: 'Project not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Add other routes for get and delete operations similarly

module.exports = router;