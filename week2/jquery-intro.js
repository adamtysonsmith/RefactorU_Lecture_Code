// jQuery is a function
// $ = function() {
    // jQuery stuff
// }


// When you make a selection, jquery returns an object
console.log($('h1'));

// Some examples of selections
$('body'); // Element tag selector
$('.some-class');
$('#my-id');
$('#my-id > p');
$('.some-class span');
$('.some-class, .some-other-class');

// Pass a variable also
var mySelector = 'h1';
$(mySelector);

// Take it one step further, store a selection in a var
var selection = $(mySelector);
var $myBox = $('.box'); // You can use $var to denote that this is a jQuery selection

// jQuery is Polymorphic
// Polymorphic: Methods change their functionality depending on how many arguments you pass

// Example of polymorphism
$myBox.width(); // ==> Returns 200 - the current width (getter)
$myBox.width('400'); // Now the width() method will change the width (setter)

var $anotherBox = $('.another-box');

$anotherBox.css({
    'height' : '350px',
    'background-color' : 'blue'
});

// Polymorphic properties of css()
// .css(propname) ==> Gets value of css property
// .css(propname, value) ==> Sets css prop to the value passed
// .css(object) ==> Sets key:value pair properties on the selection

// Hide & show
//$myBox.hide();
//$myBox.show(2000); // Pass a duration to animate
//$myBox.hide(3000);

// Fades do not affect height/width, just opacity
//$myBox.fadeIn(2000); // Pass a duration to animate
//$myBox.fadeOut(3000);

// Fades using a callback
//$anotherBox.fadeIn(5000, function() {
//    $anotherBox.fadeOut(3000);
//});

// Or define the callback before calling it
var fadeMeIn = function() {
    $anotherBox.fadeIn(3000);
}

$anotherBox.fadeOut(5000, fadeMeIn);

// Add and Remove classes
$myBox.addClass('circle');
//$anotherBox.removeClass();  // This will remove all classes
$anotherBox.addClass('red');
$anotherBox.removeClass('red');


// html(), text(), val()

// Get the value of the input
console.log($('.my-input').val());
// Set the value of the input
$('.my-input').val('Duck, duck, goose!');

// Text works the same
console.log($('p').text());
// Set the value of the input
$('p').text('Duck, duck, goose!');

// IMPORTANT: All jQuery methods return a jQuery object, which is the reason why you can chain methods over and over.

// html() can render html
$('.nested').html('<h1>Hey there buddy!</h1>'); // It will replace the p's


///////////////////////////////////////////
// Part II: jQuery Event Handling
///////////////////////////////////////////

// Callbacks
var adder = function(a, b) {
    return a + b;
}

// The first parameter is a callback function
var magic = function(callback, d, e) {
    // This is how we use the param callback
    return callback(d, e);
}

// Now we pass the callback function first when we invoke
console.log(magic(adder, 5, 10));


// Ensure the DOM has loaded before executing jQuery code
$(document).ready(function() {
    
    // Standard Click event listener
    var coolButton = $('#cool-button');
    coolButton.on('click', function() {
        $(this).text('This was clicked');
    });
    
    // Another One
    $('a').on('click', function(evt){
        // Prevent the default behavior
        //evt.preventDefault();
        // Returning false has the same behavior as return false
        return false;
    });
    
    // This button will not be affected by the click listener because it has been rendered after the DOM has loaded
    $('body').append('<button id="cool-button">This is another cool button</button>');
    
    // Delegated Events
    // Helps us to ensure our button will fire the click event regardless of when they are loaded in the DOM
    // This can be place before or after dynamically generated elements in the js code
    
    // The delegate(in this case document) must be a static element that is loaded in the initial DOM tree.  It will listen for events happening on it's children, and as long as it matches the "cool-button" condition it will fire the event.  It will fire this event on it's children REGARDLESS of whether or not they were rendered dynamically(appending code via jquery) after the DOM loaded.
    
    $(document).on('click', '#cool-button', function(evt){
        // Prevent the default behavior
        //evt.preventDefault();
        // Returning false has the same behavior as return false
        return false;
    });
    
    // Other event types
    // scroll
    // keydown
    // keyup
    // mouseover
    // mouseout
    // focus
    // blur
    
    $(window).on('scroll', function(){
//        console.log("Scrollin' with my homies");
        console.log($(window).scrollTop()); // How many pixels form the top have we scrolled?
        if ($(window).scrollTop() >= 300) {
            alert('Scrollin with my homies!');
        }
    });
    
});