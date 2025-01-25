const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/TasksRoute');
const userRoutes = require('./routes/UserRoute');

connectDB();

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173", "https://prioritx.vercel.app", "https://prioritx-production.up.railway.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Prioritx is up and Running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});