const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL, {}).then(() => {
    console.log('Connect to MongoDB');
}).catch((err) => {
    console.log('Error: ', err);
});

app.get('/', (req, res) => {
    res.send('Prioritx is up and Running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});