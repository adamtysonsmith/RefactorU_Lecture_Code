var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var apiController = require('./controllers/api.js');
var mongoose = require('mongoose');

// Mongo Connection
mongoose.connect('mongodb://localhost/angulardemo');

// Express
var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

// We need some middleware to read json that angular passes in the POST body
app.use(bodyParser.json());

// Dynamic jade templates for our angular app on our front end
app.get('/', indexController.index);
app.get('/templates/:templateName', indexController.templates);
app.get('/api/animals', apiController.get);
app.post('/api/animals', apiController.create);
app.delete('/api/animals/:id', apiController.delete);

var server = app.listen(5749, function() {
	console.log('Express server listening on port ' + server.address().port);
});