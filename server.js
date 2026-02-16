// server.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/school-system', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error: ', err));

// Basic API routes
app.get('/api/students', (req, res) => {
    res.send('Get all students');
});

app.post('/api/students', (req, res) => {
    res.send('Add a student');
});

app.get('/api/teachers', (req, res) => {
    res.send('Get all teachers');
});

app.post('/api/teachers', (req, res) => {
    res.send('Add a teacher');
});

app.get('/api/classes', (req, res) => {
    res.send('Get all classes');
});

app.post('/api/classes', (req, res) => {
    res.send('Add a class');
});

app.get('/api/grades', (req, res) => {
    res.send('Get all grades');
});

app.post('/api/grades', (req, res) => {
    res.send('Add a grade');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});