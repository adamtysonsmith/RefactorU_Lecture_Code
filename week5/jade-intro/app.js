var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended: false}));

// Site data vars
var siteCounter = 0;
var foodNames = [
    { name: 'pineapple' },
    { name: 'cherry pie' },
    { name: 'ice cream' }
];

app.get('/', function(req, res) {
    // render can take a second arg, and object of data!
    // We are passing this object to our jade template, index
	res.render('index', { 
        counter: siteCounter,
        foods: foodNames
    });
    
    ++siteCounter;
});

app.post('/submit', function(req, res) {
    // Three objects that can send data from client
    // req.query - Usually only GET requests
    // req.params - Dynamic routes
    // req.body - Used in POST requests to send data! (Also PUT and DELETE)
    
    // Push the new food to our data object
    foodNames.push({
        name: req.body.foodName
    });
    
    // Redirect to Home
    res.redirect('/');
});

var server = app.listen(9330, function() {
	console.log('Express server listening on port ' + server.address().port);
});
