// app.js is the entry point for the application
// We require the express module
var express = require('express');

// calling express returns an app object.  Calling methods on the app object configures our app.
var app = express();

// These are the configuration settings, they run once when we execute app.js
// Here we are setting the templating engine to jade
app.set('view engine', 'jade');
// Here we are dynamically loading our views.  It tells express where our jade templates are located.
app.set('views', __dirname + '/views');

// app.get is a route - ready to accept GET requests. You send a GET request when you enter a URL in the browser.
// takes two args - where we are expecting the request (root is '/'), and a callback function that allows us to write methods on the request or response (What you do when you receive a request at that location)
app.get('/', function(req, res) {
    // render() finds a template, and renders the html
    // Internally, express will res.send the hhtml
    // send() is typically the last thing you do in any route
	res.render('index');
});

app.get('/about', function(req, res) {
    res.set('Content-Type','text/html');
	res.send('<h1>Welcome to the About page!</h1>');
});

var server = app.listen(8176, function() {
	console.log('Express server listening on port ' + server.address().port);
});
