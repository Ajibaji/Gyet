const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/todo');
mongoose.Promise = global.Promise;

//intialize middleware
app.use(bodyParser.json());

//intialize routes
app.use('/api/', require('./routes/api'));

//listen for requests
app.listen(process.env.port||4000, function(){
  console.log('now listening for requests');
});
