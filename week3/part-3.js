////////////////////////////////////////////////////////////////////////////
// Pure Functional Programming
////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////
// Using map()
////////////////////////////////////////////

// Map returns an array of new values.  We can pass it a function that manipulates the data.
// Map will run this function for each item in the array
var cap = function(i) {
    var firstLetter = i[0];
    var rest = i.slice(1);
    
    return firstLetter.toUpperCase() + rest;
}

var names = ['adam','seth','steven P. Barnaby','michaelangelo'];

// We are not changing the original data, you are creating a new array
var capNames = names.map(cap).join(' ');
console.log('Using map(): ', capNames);


////////////////////////////////////////////
// Using filter()
////////////////////////////////////////////

// filter() returns a new array containing only the items for which the given function returns true
// filter() requires a function that returns true or false
// var results = myArray.filter(function);

var isShort = function(name) {
    return name.length < 5;
}

console.log('Using filter(): ', names.filter(isShort).join(' '));


// You can also chain filter().map() or filter().reduce or map().reduce() etc
