const express = require('express');
const router = express.Router();



//get a list of todos from DB
router.get('/todos', function(req, res){
  console.log('GET request received');
  res.send({ type:'GET' });
});

//add a new todo to the DB
router.post('/todos', function(req, res){
  console.log('POST request receive');
  console.log(req.body);
  res.send({
    type:'POST',
    title: req.body.title,
    details: req.body.details
  });
});

//update a todo in the DB
router.put('/todos/:id', function(req, res){
  console.log('PUT request received');
  res.send({ type:'PUT' });
});

//delete a todo from DB
router.delete('/todos/:id', function(req, res){
  console.log('DELET request received');
  res.send({ type:'DELETE' });
});

module.exports = router;
