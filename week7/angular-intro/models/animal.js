var mongoose = require('mongoose');

var animalSchema = mongoose.Schema({
    name: String,
    color: String,
    age: {type: Number, default: 1},
    parentSpecies: [{type: String}]
});

var Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;