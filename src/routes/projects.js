const { Router } = require('express');
const { createProject, getProjects, getProjectId, deleteProject, updateProject } = require('../controllers/project.controller');
const router = Router();

// /api/projects/
router.post('/', createProject)
router.get('/', getProjects)
router.get('/:id', getProjectId)
router.delete('/:id', deleteProject)
router.put('/:id', updateProject)


module.exports = router;