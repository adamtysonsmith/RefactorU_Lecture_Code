// OOP

// Constructor functions!
// By common convention, constructors start with a capital letter to denote that they are a constructor
var Cat = function(name, color, smell, whiskers) {
    // Properties
        // Whiskers
        // Smell
        // Color
        // Name
    
    this.name = name;
    this.color = color;
    this.smell = smell;
    this.whiskers = whiskers;
    
    // Methods
        // Sleep
        // Eat
    
    this.sleep = function() {
        console.log(this.name + ' is sleeping.');
    }
    
    this.eat = function() {
        console.log(this.name + ' is eating.');
    }
    
    // Under the hood
    // return undefined (default)
    // BUT
    // When using the 'new' keyword
    // return this
}

var blackCat = new Cat('Purrkins', 'black', 'bad', true);
var tabbyCat = new Cat('Garfield', 'orange', 'good', true);
console.log(blackCat);
console.log(tabbyCat);

// Lets talk about THIS
// 'this' is an arbitrary object that lives in the scope of a specific function, it provides context
// Every scope has one 'this'
// 'this' refers to the instance we are creating
// In jQuery, $(this) refers to the specific selection
// 'this' is immune to scope, so in order to reference a particular 'this' in another function, you will need to set it to a variable to be used later

// Lets talk about NEW
// When we use 'new' we are creating an object
// It creates a var this = {}
// It will also return 'this' by default!
// If you try to return something else, the 'new' keyword will override the return, and still returns 'this'



/////////////////////////////////////////////////
// In Class Challenge
/////////////////////////////////////////////////

// Create a class of Quotes with two properties:
// text and author
// Create an instance of the class and store it in a variable
// Have default values for text and author if none are passed into the function

var Quote = function(author, quote) {
    this.author = author || 'Unknown';
    this.quote = quote || 'No Quote';
}

var homer = new Quote('Homer Simpson','When will I learn? The answer to life\'s problems aren\'t at the bottom of a bottle, they\'re on TV!');
var bhudda = new Quote('Bhudda','Null');
console.log(homer);

/////////////////////////////////////////////////
// Prototype
/////////////////////////////////////////////////

// Currently when we create an instance of a class, that instance receives a copy of each method function, which is not ideal for performance.
// We can make our classes more performant by attaching those methods to the Cat prototype, which allows all instances to reference the SAME method function

// Our Cat variable has a prototype property which we can set methods or properties
// Setting methods on prototypes is a best practice for methods that will be shared across all instances
// Warning: If the method already exists in the constructor, that method will take precedence!!!
   // JavaScript will first look in the object for the property, if it's not there, it will check the prototype next, then up the prototype chain after that (inheritance).
Cat.prototype.poop = function() {
    console.log(this.name + ' is pooping! Splat!');
}

// This method will NEVER be called.  The constructor sleep() above takes precendence
Cat.prototype.sleep = function() {
    console.log(this.name + ' is sleeping. ZzzZZzzZZzz');
}

/////////////////////////////////////////////////
// Classes in ES6
/////////////////////////////////////////////////

//class Dog {
//    // Properties
//    constructor(name, color) {
//        this.name = name;
//        this.color = color;
//    }
//    
//    // Methods
//    bark() {
//        console.log('Ruff Ruff!');
//    }
//    sleep() {
//        console.log('The dog is sleeping.');
//    }
//}
//
//var floofy = new Dog({
//    name: 'Floofy',
//    color: 'Brown'
//});



/////////////////////////////////////////////////
// In Class Challenge 2
/////////////////////////////////////////////////

// Update the Quote class to include 2 methods (on the prototype)
// 1. countWords() - count number of words in quote
// 2. create() - return a new DOM element via jQuery for the quote

Quote.prototype.countWords = function () {
    return this.quote.split(' ').length;
};

Quote.prototype.create = function () {
    var quoteElement = '<h1>"' + this.quote + '"</h1><h3>-' + this.author + '</h3>';

    this.quoteElement = quoteElement; // You can set properties in here too!
    return this.quoteElement;
};

$('body').prepend(homer.create());



