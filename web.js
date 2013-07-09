var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var txt = fs.readFileSync('index.html');
var test1 = fs.readFileSync('test1.html');
var test2 = fs.readFileSync('test2.html');

app.get('/', function(request, response) {
  response.send(txt.toString());
});

app.get('/test1.html', function(request, response) {
  response.send(test1.toString());
});

app.get('/test2.html', function(request, response) {
  response.send(test2.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});