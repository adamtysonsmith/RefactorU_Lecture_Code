var mongoose = require('mongoose');

var personSchema = mongoose.Schema({
    name: {type: String, unique: true, required: true},
    powers: {type: Array, default: []},
    costume: String,
    catchPhrase: {type: String, default: 'Holy moly mackerel!'}
});

var Person = mongoose.model('person', personSchema);

module.exports = Person;