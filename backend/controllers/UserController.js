const bcrypt = require('bcryptjs');
const User = require('../models/Users');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error("Server Error:", err);
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

exports.registerUser = async (req, res) => {
    const { name, email, username, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: 'Email is already taken' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            username,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: newUser._id,
                email: newUser.email,
                username: newUser.username,
            },
        });
    } catch (err) {
        console.error("Registration Error:", err);
        res.status(400).json({ message: 'Bad request', error: err.message });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({
            message: 'Login successful',
            user: {
                id: user._id,
                email: user.email,
                username: user.username,
            },
        });
    } catch (err) {
        console.error("Login Error:", err);
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

exports.deleteAll = async (req, res) => {
    try {
        const result = await User.deleteMany({});
        res.status(200).json({ message: 'All Users Deleted', result });
    } catch (err) {
        console.error("Error deleting users:", err);
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
}