var Animal = require('../models/animal.js');

var apiController = {
    get: function(req, res) {
        // Should be able to query for all animals in the db, or just one
        Animal.find({}, function(err, animals){
            res.send(animals);
        }); 
    },
    
    create: function(req, res) {
        // Lets reassign to a split array so our schema doesn't blow up
         req.body.parentSpecies = req.body.parentSpecies.split(',');

        // Create the new animal and save
        var animal = new Animal(req.body);
        animal.save(function(err, animal){
            res.send(animal);
        });
    },
    
    delete: function(req, res) {
        Animal.remove({_id: req.params.id}, function(err, animal){
            res.send(animal);
        });
    }
}

module.exports = apiController;