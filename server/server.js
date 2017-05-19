const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Todo = require('./model/todo');

const app = express();

// Database setup
const dbUrl = 'mongodb://localhost/react-todo';

mongoose.connect(process.env.MONGODB_URI || dbUrl);

const db = mongoose.connection;

db.on('error', (err) => {
	console.log('Error connecting to the database', err);
});
db.once('open', () => {
	console.log('Succesfully connected to the database');
});

//  Parse incoming requests
app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());

// Serve static 
app.use(express.static(__dirname + '/..'+ '/build'));

// Route Handling
// GET
app.get('/todos', (req, res) => {
    Todo.find({}, (err, todos) => {
        if(err) console.log(err);
        res.json(todos);
    });
});

// POST
app.post('/todos', (req, res) => {
    Todo.create(req.body, (err, todo) => {
        if (err) console.log(err);
        res.status(201).end();
    });
});

// PUT
app.put('/todos/:id', (req, res) => {
    Todo.findOneAndUpdate({
        id: req.params.id
    }, req.body, (err, todo) => {
        if (err) console.log(err);
        res.status(204).end();
    });
});

// DELETE
app.delete('/todos/:id', (req, res) => {
    Todo.remove({
        id: req.params.id
    }, (err) => {
        if (err) console.log(err);
        res.status(204).end();
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server running at port', PORT);
});