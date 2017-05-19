const mongoose = require('mongoose');

// Reference Schema
const Schema = mongoose.Schema;

// Create Schema
const todoSchema = new Schema({
    id: Number,
    name: String,
    isComplete: Boolean
});

// Create model
const todo = mongoose.model('Todo', todoSchema);

module.exports = todo;