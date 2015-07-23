var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var apiController = require('./controllers/api.js');

// Express Config
var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// Express Middleware
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

// View Routes
app.get('/', indexController.index);
app.get('/foods/:slug', indexController.foods);

// API Routes
app.get('/foods/:slug/delete', apiController.deleteFood);

// Server
var server = app.listen(7750, function() {
	console.log('Express server listening on port ' + server.address().port);
});