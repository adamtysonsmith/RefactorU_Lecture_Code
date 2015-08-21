var Person = require('../models/person.js');

var indexController = {
	index: function(req, res) {
        Person.find({}, function(err, docs){
            // Rendering the template with data depends on the data being retreived from the db
    		res.render('index', {characters: docs});
        });
	},
    createHero: function(req, res) {
        var formData = req.body;
        
        // Construct a new hero from the form data
        var newHero = new Person({
            name: formData.name,
            powers: formData.powers.split(','), // Expecting an Array
            costume: formData.costume,
            catchPhrase: formData.catchPhrase
        });
        
        // Save the new hero & Redirect when finished saving
        newHero.save(function(err, doc){
            res.redirect('/');  
        });
    }
};

module.exports = indexController;