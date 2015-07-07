// Global vars polluting the namespace are trouble (namespace collisions)
//var first = 'George';
//var middle = 'Washington';
//var last = 'Carver';

//var fullname = function() {
//    return first + middle + last;
//}

//console.log(fullname());

// What if I did this
//var first = 'Jeff';
// Then it breaks the first function


// We can acheive the same thing with one global variable instead of 3
//var app = {};
//app.first = 'George';
//app.middle = 'Washington';
//app.last = 'Carver';
//
//var fullname = function() {
//    return app.first + app.middle + app.last;
//}
//console.log(fullname());

// But still, this is not the most ideal scenario


//////////////////////////////////////////////////
// Revealing Module Pattern
//////////////////////////////////////////////////
// There are several ways to use namespacing to avoid the above problems, this is one pattern:

var appBuilder = function() {
    // These are private variables
    var first = 'George';
    var middle = 'Washington';
    var last = 'Carver';
    
    var app = {};
    
    // Only the properties created on the app module are revealed
    // Because of closure, the app module is able to save the state of these vars
    app.fullname = function() {
        return first + ' ' + middle + ' ' + last;
    }
    
    // Return the public object, with public method .fullname()
    return app;
}

var app = appBuilder();
console.log(app.fullname());



//////////////////////////////////////////////////
// Immediately Invoked Function Expression (IIFE)
//////////////////////////////////////////////////

(function(){})();

(function(){
    console.log('Hello World!');
})();

(function(name){
    console.log('Hello', name);
})('Steve!');


// Lets wrap our appBuilder in an IIFE
// This function will only be called once
var appObject = (function() {
    // These are private variables
    var first = 'Adam';
    var middle = 'Tyson';
    var last = 'Smith';
    
    var app = {};
    
    // Only the properties created on the app module are revealed
    // Because of closure, the app module is able to save the state of these vars
    app.fullname = function() {
        return first + ' ' + middle + ' ' + last;
    }
    
    // Return the public object, with public method .fullname()
    return app;
})();
// Now the methods are still accessible
console.log(appObject.fullname());


//////////////////////////////////////////////////
// Passed by Value vs. Passed by Reference
//////////////////////////////////////////////////

// Primitive types (String, Number, Boolean) are passed by value
    // The original variable WILL NOT be modified when passed into a function

// Non-primitive types (Array, Object) are passed by reference
    // The original variable WILL be modified when passed into a function


