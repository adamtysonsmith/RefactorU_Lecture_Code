////////////////////////////////////////////
// Function Scope
////////////////////////////////////////////

var foo = 23;

// JavaScript Lexical Scope
// ONLY Functions create scope
var getFullName = function(first, last) {
    var fullName = first + ' ' + last;
    return fullName;
    
    console.log(foo); // Works
    console.log(fullName); // Works
}

//console.log(fullName); // DOES NOT WORK


////////////////////////////////////////////
// Closures!!!!!
////////////////////////////////////////////

// Garbage collection
// The fullName variable above has no references in scopes outside the getFullName function, so the variable is deleted after being used
// Yet the value remains!

// Closures are an exception to garbage collection
var counterConstructor = function() {
    var start = 0;
    var counter = function() {
        console.log(start++);
    }
    return counter;
}

// The counter() function has closure over the start variable, which prevents start from being garbage collected
var myCounter = counterConstructor();
// counterConstructor is called once,
// The return value of counterConstructor is counter()
// So when you call myCounter() you are actually calling the counter() function by a different reference
myCounter();
myCounter();
myCounter(); // ==> start is now 2

var yourCounter = counterConstructor();
yourCounter(); // ==> this instance of start is 0

