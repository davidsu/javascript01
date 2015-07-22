'use strict';

var express = require('express'),
  http = require('http');
//  mongoose = require('mongoose');

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 8080;

// Disable etag headers on responses
app.disable('etag');

// Connect to our mongo database
//mongoose.connect('mongodb://localhost/react-tweets');

// Index Route
//app.get('/', routes.index);

// Page Route
//app.get('/page/:page/:skip', routes.page);

// Set /public as our static content dir
app.use('/', express.static('../src'));
app.get('/', function(req, res){
   res.sendFile('../src/index.html');
});

// Fire this bitch up (start our server)
/*eslint no-unused-vars:0*/
var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});

// Initialize socket.io
//var io = require('socket.io').listen(server);

// Set a stream listener for tweets matching tracking keywords
//twit.stream('statuses/filter',{ track: 'javascript'}, function(stream){
//  streamHandler(stream,io);
//});