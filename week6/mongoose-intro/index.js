var mongoose = require('mongoose');

// Connect to the local mongo database
// If this db doesn't exist, mongo will create it
mongoose.connect('mongodb://localhost/foods');

// Create a mongoose model to enforce a schema on our document objects
// The first arg is the name of the model
// The second arg is the schema object
var Plate = mongoose.model('plate', {
    name: {type: String},
    calories: {type: Number},
    region: {type: String},
    texture: String // This is shorthand if you are just using 'type'
    // calories: {}, // This can accept any type
});

//var pizza = new Plate({
//    name: 'Pizza',
//    calories: 200,
//    region: 'Merica',
//    texture: 'Cheesy'
//});
//
//pizza.save();

// Retreive all the data in the Plates collection
// The find method takes two args: query[optional], and callback
// The callback receives an error, and documents
// Always returns an array of documents
Plate.find({}, function(err, docs) {
    console.log('Error', err);
    console.log('Documents', docs);
});