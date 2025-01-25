const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require('../models/Users');

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

        const token = jwt.sign({ id: user._id }, "your_jwt_secret", {
            expiresIn: "1h",
        });

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                username: user.username,
            },
        });
    } catch (err) {
        console.error("Login Error:", err);
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

exports.updateUser = async (req, res) => {
    const { name, email, username, password } = req.body;
    const userId = req.params.id;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (name) user.name = name;
        if (email) user.email = email;
        if (username) user.username = username;
        if (password) {
            user.password = await bcrypt.hash(password, 10);
        }

        await user.save();

        res.status(200).json({
            message: 'User updated successfully',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                username: user.username,
            },
        });
    } catch (err) {
        console.error("Update Error:", err);
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};