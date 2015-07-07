// Call & Apply is all about changing the value of 'this'
// call & apply are just different ways of calling a function (with a forced 'this' value)

//////////////////////////////////////////////
// Using call()
//////////////////////////////////////////////
var whatsMyName = function() {
    console.log('My name is ' + this.name);
    // 'this' is referring to the window
}

var alice = {
    name: 'Alice'
}

// Call allows us to change what 'this' refers to
// Remember that functions are objects and they can have their own properties and methods. (A method on a method, yep)
// Call takes one argument, the context.  You have to pass in the new 'this' value
// alice is now the new 'this' instead of the window
whatsMyName.call(alice); // This calls the function also at the same time



//////////////////////////////////////////////
// Using call() with arguments
//////////////////////////////////////////////
var whatsMyNameAgain = function(end) {
    console.log('My name is ' + this.name + end);
    // 'this' is referring to the window
}

whatsMyNameAgain.call(alice, '!!!!'); // You just pass the additional arguments



//////////////////////////////////////////////
// Using apply()
//////////////////////////////////////////////

// apply() is very similar to call, it takes maximum of 2 arguments
// You can pass all your args in an array
whatsMyNameAgain.apply(alice, ['????']);

// A good use case
var numeros = [2, 5, 76, 34, 762, 45];

// This way is not dynamic and totally sucks
//var result = Math.max(numeros[0], numeros[1], numeros[2], numeros[3], numeros[4], numeros[5]);
//console.log(result);

// Let's use apply() to make this better
// We don't need a context here, we can pass in null
var betterResult = Math.max.apply(null, numeros);
console.log(betterResult);



//////////////////////////////////////////////
// Using bind()
//////////////////////////////////////////////

// bind() does NOT call a function immediately, but it returns a new function with a bound 'this' value (and args)
var bob = {
    name: 'Bob'
}

var bobSaysHey = whatsMyNameAgain.bind(bob);

// Now we call the new function with the bound 'this' context
// You can just pass in args normally!
bobSaysHey('!!!');



// Lets take bind() a step further by binding arguments
var carlos = {
    name: 'Carlos'
}

var carlosIsHappyToMeetYou = whatsMyNameAgain.bind(carlos, '!!!!!!!!!'); // This argument is bound every time you call it
carlosIsHappyToMeetYou();


// A REAL LIFE example of using bind()
// navigator.getUserMedia is used to access camera and microphone, GPS etc
// The problem below is that there is no reference to 'this' when calling getUserMedia()
// 'this' needs to refer to the navigator object
var getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;

if (getUserMedia) {
    getUserMedia = getUserMedia.bind(navigator);
} else {
    console.log('Not Supported');
}
getUserMedia(); // Native function that needs 3 args, unknown at this point



