const Task = require('../models/Tasks');

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

exports.createTasks = async (req, res) => {
    const { title, description, dueDate, priority } = req.body;

    try {
        const newTask = new Task({ title, description, dueDate, priority });
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