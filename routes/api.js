const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');



//get a list of todos from DB
router.get('/todos', function(req, res, next){
  Todo.find().then(function(todo){
    res.send(todo);
  });
});

//add a new todo to the DB
router.post('/todos', function(req, res, next){
  Todo.create(req.body).then(function(todo){
    res.send(todo);
  }).catch(next);
});

//update a todo in the DB
router.put('/todos/:id', function(req, res, next){
  Todo.findOneAndUpdate({_id: req.params.id}, req.body).then(function(){
    Todo.findOne({_id: req.params.id}).then(function(todo){
      res.send(todo);
    });
  });
});

//delete a todo from DB
router.delete('/todos/:id', function(req, res, next){
  Todo.findOneAndDelete({_id: req.params.id}).then(function(todo){
    res.send(todo);
  });
});

module.exports = router;
