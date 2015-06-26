//////////////////////////////////////////////////////////////
// Function Basics
//////////////////////////////////////////////////////////////

// A function is a reusable block of code (set of instructions) that takes inputs, and produces outputs
// Functions are a non-primitive type
// Functions are also first-class objects under the hood

// FUNCTION LITERAL
//function(height, width) { // inputs are called arguments, or parameters
//    var area = height * width;
//    return area; // You must return the variable to be accessible outside of the function block
    // return defines the outputs of a function
//}


// FUNCTION EXPRESSION
// In order to use the function later instead of just running the function code in synchronous order, we must use a FUNCTION EXPRESSION
// Always use VERBS in your function var names
var calculateArea = function(height, width) { // inputs are called arguments, or parameters
    return height * width;
}


// FUNCTION DECLARATION
// This is known as a FUNCTION DECLARATION, it is better practice to use a function expression like above because it is more clear.
// function calculateArea() {}


// FUNCTION INVOCATION
// Call, or invoke the function!
calculateArea(4, 3);


// FUNCTION REFERENCES
// This is only a function reference that tells you that the function exists
// You must use () to actually call the function
console.log(calculateArea);

// You can use the function reference to create multiple references to the same function
var anotherReference = calculateArea;
// then when you call this, it will run calculateArea()
anotherReference(4,6);


// USING LOGIC IN FUNCTIONS
// Use any kind of logic in your functions
var pluralize = function(word, number) {
    if (number === 1) {
        return word;
    }
    else {
        return word + 's';
    }
}

console.log(pluralize('chair', 1));
console.log(pluralize('moose', 2));


// RETURNING ARRAYS
// Returning multiple values using an array
var func = function(word, letter) {
    return [word, letter];
}




//////////////////////////////////////////////////////////////
// Methods
//////////////////////////////////////////////////////////////

// Methods: Put simply, methods are both a function and a property of an object
var hello = 'Hello!';
hello.toUpperCase(); // toUpperCase is a function, and it is also a property of the string object

// Good use case for using function references
// You can reuse the same function, but give it different names to be more semantic
// By doing this we are creating methods, they are properties of their objects, but they are also functions!
var steve = {};
var janet = {};

steve.doSomething = calculateArea;
janet.alsoDoSomething = calculateArea;




//////////////////////////////////////////////////////////////
// String Manipulation Methods
//////////////////////////////////////////////////////////////

// Converting a string to an array with split()!
var weekString = 'Mon Tue Wed Thurs Fri Sat Sun';
// split() returns an array and takes one argument: the seperator character
var weekArray = weekString.split(' '); // Every space is what seperates array elements, you could also split by comma when working with CSVs
weekString = weekArray.join(', '); // Join does the opposite




//////////////////////////////////////////////////////////////
// Function Scope
//////////////////////////////////////////////////////////////

// functions create scope
var localScope; // This is considered a global variable
doohickey = 1; // this is also a global variable

var concat = function() {
    var scoped;
    doohickey = 2;
    localScope = 1;
    globaloo = 3; // This is a global var defined inside the function - BAD PRACTICE
}
concat();
// You can't access scoped outside of it!
// You can access localScope!
// You can access doohickey!
// You can access globaloo! BAD PRACTICE


// SHADOW SCOPE
// You can declare the same var inside a function, and it is treated as a different variable
// BAD PRACTICE - use unique variable names to avoid confusion
var shadow = 5;

var shadowFunc = function() {
    var shadow = 'Inside the function';
    return shadow;
}


// NESTED FUNCTIONS VARIABLE SCOPE
var nestedFunc = function() {
    var anonymous = 'I am anonymous!!'; 
    var anon = function() { // The inner function can access vars in the outer function
        anonymous = 'I am anonymous';
        var someVar = 12;
        return someVar;
    }
    return anonymous; // Then return the altered value
    return someVar; // FAILURE!
}
// You cannot access someVar in the outer function.


//////////////////////////////////////////////////////////////
// Variable Hoisting in Functions
//////////////////////////////////////////////////////////////

var myvar = 'my value'; 
  
var hoistFunc = function() {
  // Hoisting moves all variable DECLARATIONS to the top of the function scope. NOT VALUES.
  // JavaScript is thinking in these steps: 1) Is the var defined inside the function?, 2) If no, is the var defined globally?
  // If the var is inside the function, it will use the function scope
  // Since ONLY the declaration is hoisted, the value is not.  The commented code below is how JavaScript sees it.
    
  // var myvar;
  alert(myvar); // undefined 
  var myvar = 'local value'; // Now myvar is being assigned to a value after the alert has run.
}
