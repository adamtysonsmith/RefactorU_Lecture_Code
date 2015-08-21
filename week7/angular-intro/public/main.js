// Create a module
// 2 args: Name of module and dependencies in an array
// Pass an empty array if no dependencies
var animalApp = angular.module('animalApp', ['ngResource', 'ngRoute']);

// Lets make some front end routes for our views
// We need to inject the route provider to our config method
// Make sure we passed ngRoute as a dependency to our module above!
animalApp.config(function($routeProvider) {
    // when() takes the route, and object
    $routeProvider
        .when('/', {
            // This will send an ajax GET request and populate the ng-view with the template from the server
            templateUrl: '/templates/animal-list',
            controller: 'animalListController'
        });
});

// Now we will make a factory to interface with the database
// Inject the $resource object into our factory
animalApp.factory('animalFactory', function($resource) {
    // resource takes a route, and object that defines the dynamic parts of the route
    // @_id is essentially the same as this._id
    // Model now has a bunch of built in methods to interact with the backend
    var model = $resource('/api/animals/:id', { id: '@_id' });
    
    // model.query() - GET request at that route, get all animals in an array
    // model.get() - GET request at that route, get one object
    // model.$save() - POST request at that route
    // model.$delete() - DELETE request at that route
    
    // Examples
    // model.get({id: ObjectId('394857439865')}) - GET /api/animals/394857439865
    // model.query() // GET /api/animals - we can optionally pass the /:id
    
    // We return an object from the factory
    return {
        model: model,
        animals: model.query() // GET /api/animals
    }
});

// Now we need some controllers of course
// We inject the scope
// Passing stuff to the controller cb is how we inject dependencies
// Inject our animalFactory
animalApp.controller('animalListController', function($scope, animalFactory) {
    // By declaring the newAnimal.name etc in our ng-model, Angular creates this object for you
    // So you don't need to do this, you can just start using newAnimal
    // var newAnimal = {
    //     name: something,
    //     age: something,
    //     color: something,
    //     parentSpecies: something
    // }
    
    // Now lets populate all our animals on the page
    $scope.animals = animalFactory.animals;
    
    // We create our addAnimal function on the scope so our ng-submit can call it
    // Hand off data to the server so we can save in DB
    $scope.addAnimal = function(){
        // 'this' refers to the scope we are defining this method on
        // you could also use $scope.newAnimal
        console.log(this.newAnimal);
        var newAnimalObject = new animalFactory.model(this.newAnimal);
        // This initiates POST to /api/animals, which triggers apiController.create to save to Database
        newAnimalObject.$save(function(returnedServerData){
            // Push the new data into our animals list
            animalFactory.animals.push(returnedServerData);
        });; 
        
        // Reset our form to empty
        this.newAnimal = {}
    }
});