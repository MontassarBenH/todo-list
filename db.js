const mongoose = require('mongoose');

// Connect to the MongoDB server
mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a schema for the to-do items
const todoSchema = new mongoose.Schema({
  item: String
});

// Create a model based on the schema
const Todo = mongoose.model('Todo', todoSchema);

// Export the model
module.exports = Todo;
