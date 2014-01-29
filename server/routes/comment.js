var data = [{
  author: "Pete Hunt",
  text: "This is one comment"
}, {
  author: "Jordan Walke",
  text: "This is *another* comment"
}];

exports.get = function(req, res) {

  res.send(200, JSON.stringify(data));
};

exports.post = function(req, res) {

  var comment = req.body;
  data.push(comment);

  res.send(200);
};