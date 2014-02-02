var Task = require('../model/task');

var task = {
  get: function(req, res) {
    Task.find(function(err, tasks) {
      if (err) {
        console.log(err);
      }
        res.send(200, tasks);
    });
  },
  post: function(req, res) {
    var entry = new Task(req.body);
    entry.save(function(err) {
      if (err)
        console.log(err);
    });
    res.send(200);
  }
}

module.exports.load = function(app) {
  app.get('/api/task', task.get);
  app.post('/api/task', task.post);
};