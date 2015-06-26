////////////////////////////////////////////////////////////
// Lesson 1
////////////////////////////////////////////////////////////

// In JavaScript, we have STATEMENTS composed of VALUES which have TYPES

// Numbers (literals)
// 4, 10, 3.14159, -10

// Strings (literals)
// "I am a string", 'I am also a string', "I'm a string with a single quote"

// Operators
// +, -, *, /

// Variables
// A variable is simply a name that points to a value
var result = 10 / 3;
var pi = 3.14159;

// result is not a literal number
// pi is a literal
// alert(result);
// alert(pi);



// Boolean literals
// true, false

// Boolean operators
// ! - unary operator
// !true, !false - not true, not false
// !!true, !!false - true, false (not not double negative)

// Binary bool operators
// &&, ||
// || - If one is true, the whole thing is true
// && - If one is false, the whole thing is false

// || - Either one can be true
// && - Both have to be true

// true && false - evaluates to false
// true && true - evaluates to true
// false && false - evaluates to false
// false || true - evaluates to true
// true || true - evaluates to true
// false || false - evaluates to false
// alert(true && true && true && false && true && true); // False if just one is f
//alert(false || false || true || false || false); // False only if all are false, even if one is true the whole thing is true

// Comparison Operators
// 10 > 1 -> Returns true or false
// == (Loose Equality - Bad practicE!!) (myVar == null will match both null and undefined)
// === (Strict Equality) 
// !== (Inquality check)

// String operators
var greeting = 'Hello ' + 'world.';

// Be concious of types
var eleven = '1' + '1'; // "11"
var math = '1 + 1'; // "1 + 1"


// Strings have properties.  Strings are zero index based.
// Bracket notation
console.log(greeting['length']);
console.log(greeting[4]);

// Or Dot Notation. Does not work when accessing index (arrays, strings, etc)
console.log(greeting.length);

// How do we get the last character in greeting?
console.log(greeting[greeting.length - 1]);
// You can perform calculations inside bracket notation

// Conditional Logic
var age = 19;
var canDrink;
var country = 'Ireland';

if (age >= 21) {
    canDrink = true;
} else if (age >= 18 && country === 'Ireland') {
    canDrink = true;
} else {
    canDrink = false;
}
// Type coercion - JS knows you are concatenating a string and a bool, and is smart enough to handle it
console.log("Will you be served?" + canDrink);


////////////////////////////////////////////////////////////
// Lesson 2
////////////////////////////////////////////////////////////

// Array Literal
var array = [];


var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
console.log('There are ' + days.length + ' in the week.');

// access individual items in the array with bracket notation
console.log(days[3]);

for (var i = 0; i < days.length; i++) {
    console.log(days[i]);
}

for (var i = 0; i < days.length; i++) {
    if (days[i]==='Saturday') {
        alert('Party Hard');
    } else if (days[i]==='Sunday') {
        alert('Party Light');
    } else {
        alert('Party after work');
    }
}

// You can assign a value in an array
days[0] = 'Mooooonnnnnndaaaayyyy';

// Push items onto the array
days.push('AdamDay');

// Remove the last item from the array
days.pop();


// Object Literal
var object = {};

var movie = {
    title : 'Sharknado II',
    genre : 'Science Fiction',
    rating : 8
}

// accessing an object with bracket notation requires quotations
// movie['title'];
// Dot notation does not
// movie.title;

// Lets say the user is typing in a property to check
//var input = prompt('What property do you want to check?');
//console.log(movie[input]); // You have to use bracket notation if you dont know which property your checking!

// Add a property for year
movie.year = 1986;
movie['year'] = 1986; // Same thing


// Loop through our property with for-in loop
// Declare an iterator var
// Then the object or array to loop over
for (var key in movie) {
    console.log('the ' + key + ' of the movie is ' + movie[key] + '.');
}


// More object stuff
var hotTubTM = {
    title : 'Hot Tub Time Machine',
    genre : 'Historical Autobiography',
    rating : 11
};
var sharkNado = {
    title : 'Sharknado II',
    genre : 'Science Fiction',
    rating : 8
};

var movies = [hotTubTM, sharkNado];

console.log(movies);

var apples = 3;
var grapes = 42;
var pears = 4;
var arrayOfVars = [apples, grapes, pears];
console.log(arrayOfVars);