const express = require('express');
const router = express.Router();
const taskController = require('../controllers/TaskController');
const authMiddleware = require("../middleware/authMiddleware");

router.get('/', taskController.getTasks);
router.post('/', authMiddleware, taskController.createTasks);
router.put('/:id', taskController.updateTasks);
router.delete('/:id', taskController.deleteTasks);

module.exports = router;