var data = [{
  key: "1",
  title: "Test",
  text: "OH *lawd*, ITS A FIAR!",
  author: "Brad Egler",
  duration: 15
}, {
  key: "2",
  title: "Test 2",
  text: "Help",
  author: "Brad Egler",
  duration: 60
}];


exports.get = function(req, res) {
  res.send(200, data);
};

exports.post = function(req, res) {
  data.push(req.body);
  res.send(200);
};