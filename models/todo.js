const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create todo Schema and model
const TodoSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title field is required']
  },
  details: {
    type: String
  },
  done: {
    type: Boolean,
    default: false
  }
  //add in due date
})

const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;
