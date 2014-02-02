var express = require('express');
var fs = require('fs');
var http = require('http');
var path = require('path');

var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/time');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("Connected to MongoDB mongodb://localhost/time")
});

app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('35ccfb7f2c444638a74d1599c529b03c'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, '../dist')));

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

fs.readdirSync(path.join(__dirname, '/routes')).forEach(function (file) {
  if(file.substr(-3) == '.js') {
      route = require('./routes/' + file);
      route.load(app);
  }
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
