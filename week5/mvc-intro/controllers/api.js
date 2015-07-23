var food = require('../models/food.js');

var apiController = {
    deleteFood: function(req, res) {
        var slug = req.params.slug;
        food.deleteFood(slug);
        // Redirect or reload the homepage
        res.redirect('/');
    }
}

module.exports = apiController;