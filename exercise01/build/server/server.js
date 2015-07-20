// Require our dependencies
var express = require('express'),
  http = require('http');
  //mongoose = require('mongoose');

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 8080;

// Disable etag headers on responses
app.disable('etag');

// Connect to our mongo database
//mongoose.connect('mongodb://localhost/kickstart_items');


// Set /public as our static content dir
app.use("/", express.static('../'));
app.get('/', function(res, req){
   res.sendFile('../index.html');
});

app.get('./items/items.js', function(res, req){
   res.send('blah blah');
});

// Fire this bitch up (start our server)
var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});
