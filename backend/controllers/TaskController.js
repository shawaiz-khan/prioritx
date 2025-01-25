const Task = require('../models/Tasks');
const authMiddleware = require("../middleware/authMiddleware");

exports.getUserTasks = async (req, res) => {
    const { userId } = req.query;

    try {
        const tasks = await Task.find({ userId });
        if (tasks.length === 0) {
            return res.status(404).json({ message: 'No tasks found for this user' });
        }
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

exports.createTasks = async (req, res) => {
    const { title, description, dueDate, priority } = req.body;

    try {
        const newTask = new Task({
            title,
            description,
            dueDate,
            priority,
            userId: req.user._id,
            username: req.user.username,
        });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ message: 'Bad request', error: err.message });
    }
};

exports.updateTasks = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTask);
    } catch (err) {
        res.status(400).json({ message: 'Bad request', error: err.message });
    }
};

exports.deleteTasks = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: 'Task deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: 'Bad request', error: err.message });
    }
};