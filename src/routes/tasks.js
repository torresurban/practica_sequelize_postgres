const { Router } = require('express');
const { createTask, getTasks, getOneTask, updateTask, deleteTask, getTaskByProject } = require('../controllers/tasks.controller');
const router = Router();

//api/tasks
router.post('/', createTask)
router.get('/', getTasks)
router.get('/:id', getOneTask)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)
router.get('/project/:projectid', getTaskByProject)


module.exports = router;