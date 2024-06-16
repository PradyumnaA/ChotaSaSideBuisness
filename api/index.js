
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));
app.use(express.json());
app.get('/test', (req, res) => {
    res.json('test ok');
});

// chotasi-side-business
// chotasi
mongoose.connect(process.env.MONGO_URL_CONNECTIONS, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    res.json({ name, email, password });
});

app.listen(2001, () => {
    console.log('Server is running on port 2001');
});
