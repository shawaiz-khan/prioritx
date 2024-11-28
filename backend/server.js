const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/TasksRoute');
const userRoutes = require('./routes/UserRoute');

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Prioritx is up and Running');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});