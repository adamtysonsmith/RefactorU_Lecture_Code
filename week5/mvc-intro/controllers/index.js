var food = require('../models/food.js');

var indexController = {
	index: function(req, res) {
		res.render('index', {
            allFoods: food.allFoods
        });
	},
    foods: function(req, res) {
        var slug = req.params.slug;
        var thisFood = food.findFood(slug);
        
        res.render('foods', {
            thisFood: thisFood
        });
    }
};

module.exports = indexController;