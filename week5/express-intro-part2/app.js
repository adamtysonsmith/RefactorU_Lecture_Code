var express = require('express');
// The body parser is needed to receive data from POST requests
// You can only transmit strings over HTTP, so we need to convert the strings back to javascript(arrays, objects, numbers, etc).  Body parser attaches the data (the body of the POST req) to req.body.
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');


// app.use indicates that we are declaring application level middleware
// app.use runs on every single request, unlike app.set which runs once

// The public folder houses your front end static content: images, css, client side js
app.use(express.static(__dirname + '/public'));

// This code parses the body
app.use(bodyParser.urlencoded({extended: false}));



app.get('/', indexController.index);

// Dynamic routing
// Colon indicates a URL parameter, we are expecting some value which we will assign to page property
app.get('/:page', function(req, res){
    console.log(req.params);
    res.send('Check the console');
    // ==> { page: 2 } if you type /2
});

app.get('/:page/:order', function(req, res){
    console.log(req.params);
    res.send('Check the console');
    // ==> { page: '3', order: '456' } if you type /3/456
});

// /contact is our route, and the cb is our route handler
app.post('/contact', function(req, res){
    // The name attribute in our HTML form becomes the key in req.body
    // HTML forms REQUIRE a name attribute in order to send that data
    console.log(req.body.complaint);
    // You must then give the client a response (send, render, redirect)
    // You could then redirect the client back to homepage after submitting the form
    res.redirect('/');
});

var server = app.listen(6053, function() {
	console.log('Express server listening on port ' + server.address().port);
});