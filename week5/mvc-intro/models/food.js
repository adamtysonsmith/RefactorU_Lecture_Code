// Our main data structure
var allFoods = [];

// Base class for our model
var FoodItem = function(name, flavor, image) {
    this.name = name;
    // This trims any trailing spaces, converts our url slug to lowercase and replaces spaces with hyphens
    this.slug = name.trim().toLowerCase().replace(/ /g, '-');
    this.flavor = flavor;
    this.image = image;
}

// Helper functions to add food items and find food items
// We could contain this logic in the constructor, but this is simple for readability
var addFood = function(name, flavor, image) {
    var newFood = new FoodItem(name, flavor, image);
    allFoods.push(newFood);   
}
var findFood = function(slug) {
    // We are returning an array of one value, so we can grab index 0 at the end
    return allFoods.filter(function(food) {
        return food.slug === slug;
    })[0];
}
var deleteFood = function(slug) {
    for (var i = 0; i < allFoods.length; i++) {
        if(allFoods[i].slug === slug) {
            // We need to modify the original array, which will change all references that are exported
            allFoods.splice(i, 1);
            return;
        }
    }
}

// Add some foods!
addFood('Pizza', 'Savory', '/pizza.jpg');
addFood('Lasagna', 'Good', '/lasagna.jpg');
addFood('Bananas Foster', 'Sweet', '/bananas-foster.jpg');
addFood('Escargo', 'Earthy', '/escargo.jpg');

// Export stuff!
module.exports = {
    FoodItem: FoodItem,
    allFoods: allFoods,
    addFood: addFood,
    findFood: findFood,
    deleteFood: deleteFood
}