////////////////////////////////////////////
// Type Checking
////////////////////////////////////////////

// jQuery Example
// $('.some-class').text() 
    // In this example, the arguments are not defined, so the text() method 
    // behaves as a getter method
// $('.some-class').text('some text') 
    // In this example, the arguments are defined, so the text() method 
    // behaves as a setter method


// Lets make our own polymorphic method
var steve_o = {
    name: 'Steve',
    myNameIs: function(name) {
        if (typeof name === 'undefined') {
            return steve_o.name;
        } else if (typeof name === 'string') {
             return steve_o.name = name;
        }
    }
}

steve_o.myNameIs('Jeff');
//console.log(steve.myNameIs());

// typeof undefined ==> 'undefined'
// typeof null ==> 'object'
// typeof 'hello' ==> 'string'
// typeof {} ==> 'object'
// typeof NaN ==> 'number'
// typeof alert ==> 'function'
// typeof 13 ==> 'number'
// typeof [] ==> 'object'
// typeof console.log ==> 'function'
// typeof true ==> 'boolean'

// Checking NaN
// NaN === NaN ==> false - DOES NOT WORK
// isNaN('string') ==> false - must use method

// Checking for an array
// [].constructor === Array ==> true





////////////////////////////////////////////
// Using Default Values
////////////////////////////////////////////

// Check if name is undefined, and if true give it a default value
// Define default values using ||
var logName = function(name) {
    // This expression evaluates to the first truthy value
    // falsy values: 0, '', null, undefined, false
    // truthy: all other values
    name = name || 'Steve';
    
    console.log(name);
}

// Another example
var logger = function(name, lastname) {
    // If you dont pass anything, it will return the last value (default)
    name = (name || lastname || 'Steve');
    
    console.log(name);
}

logger(null, 'Smith');
// ==> 'Smith'
logger('Adam', undefined);
// ==> 'Adam'
logger();
// ==> 'Steve'




////////////////////////////////////////////
// Passing in Objects to Functions
////////////////////////////////////////////

// Instead of passing in 10 variables, pass in a function with all the
// properties you need
var whosYourDaddy = function(person) {
    // By using this && chain, it prevents program from throwing error 
    // if one of these is undefined
    if (person && person.parents && person.parents.dad) {
        var dad = person.parents.dad;
    } else {
        dad = 'No Father Defined';
    }
    
    return dad;
}

var steve = {
    name: 'Steve',
    parents: {
        dad: 'Steve\'s Dad',
        mom: 'Alice'
    },
    siblings: ['Carol','Jane','Ellen']
}

var adam = {
    name: 'Adam',
    siblings: ['Timmy','Ashley']
}

console.log(whosYourDaddy(steve));
console.log(whosYourDaddy(adam)); // Throws default if no parents or dad exist




////////////////////////////////////////////
// Ternary Operator
////////////////////////////////////////////

// return (true or false) ? (value if true) : (value if false);

var falsey = false;
var troo = true;

var checkIt = function(check) {
    return check ? 'Evaluated to true' : 'Evaluated to False';
}

console.log(checkIt(troo));

// The ternary is an expression, therefore you can use it in places that
// you cannot use a traditional if statement, such as a for loop
// for (var i = 0; (ternary expression here); i++) {
    // Some code
// }



////////////////////////////////////////////
// Callback Functions
////////////////////////////////////////////

//var caller = function(callback) {
//    callback();
//}
//
//var nameFunc = function(name) {
//    console.log(name);
//}
//
//caller(nameFunc); // Using this pattern, you are NOT able to pass in args

var callback = function() {
    console.log('Now!');
}

//setTimeout(callback, 2000); // You are passing the function reference, then setTimeout is actually calling the function later

//setInterval(callback, 500); //Works the same way, but does something every 500 ms
// Each interval function has an id
// clearInterval(2); // Better to assign to variable

// Sort - Array Method
// sort() is destructive, it mutates the array
var people = ['Bob','Janet','Alice','Joey'];
people.sort();

var sortNumbers = [1, 11, 8, 234, 92];
sortNumbers.sort(); // Sorts numbers alphabetically

// Pass sort a callback
sortNumbers.sort(function(a, b) {
    return a - b; // Sorts low to high
    return b - a; // Sorts high to low
});

var peopleObjs = [{name: 'Bob', age: 23},
                  {name: 'Alice', age: 32},
                  {name: 'Joey', age: 12}];

// Sort by age
peopleObjs.sort(function(a, b){
    if (a.age > b.age) {
        return 1;
    } else {
        return -1;
    }
});
console.log(peopleObjs);

