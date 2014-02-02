var mongoose = require('mongoose'),
  Schema = mongoose.Schema
  taskSchema = new Schema({
    title: String,
    text: String
  }),
  Task = mongoose.model('tasks', taskSchema);

module.exports = Task;