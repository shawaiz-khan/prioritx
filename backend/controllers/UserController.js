const User = require('../models/Users');

exports.registerUser = async (req, res) => {
    const { name, email, username, password } = req.body;
    try {
        const newUser = new User({ name, email, username, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: 'Bad request', error: err.message });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || user.password != password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        res.send(user);
    } catch (err) {
        res.status(400).json({ message: 'Bad request', error: err.message });
    }
};