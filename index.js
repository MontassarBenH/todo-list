const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// Set up body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
//mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true });
const Todo = require('./db');

// Create a schema for the to-do items
/*const todoSchema = new mongoose.Schema({
  item: String
});*/

// Create a model based on the schema
 //Todo = mongoose.model('Todo', todoSchema);

// Set up the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Handle GET request to display the to-do list
app.get('/', (req, res) => {
    Todo.find((err, items) => {
      if (err) {
        console.log(err);
        res.status(500).send('An error occurred while retrieving the to-do list');
      } else {
        res.render('index.ejs', { items: items });
      }
    });
  });
  
  // Handle POST request to add an item to the to-do list
  app.post('/', (req, res) => {
    const newTodo = new Todo({
      item: req.body.item
    });
    newTodo.save((err) => {
      if (err) {
        console.log(err);
        res.status(500).send('An error occurred while saving the item');
      } else {
        res.redirect('/');
      }
    });
  });
  