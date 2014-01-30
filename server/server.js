var express = require('express');
var task = require('./routes/task');
var http = require('http');
var path = require('path');

var app = express();

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

app.get('/api/task', task.get);
app.post('/api/task', task.post);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
