// Shortcut for document.ready
$(function(){
    
    ////////////////////////////////////
    // DOM Creation
    ////////////////////////////////////
    
    $('h1').append(' Im a string!');
    $('h1').prepend('Im before the Header! ');
    
    // Append & Prepend - First and Last Child
    $('h1').prepend('<div>Im a new prepended div - Inside the H1</div>');
    $('h1').append('<div>Im a new appended div - Inside the H1</div>');
    
    // Before & After - First and Last Sibling
    $('h1').before('<div>Im a new before div - sibling</div>');
    $('h1').after('<div>Im a new after div - sibling</div>');
    
    var myDiv = $('<div class="my-div">Hello, I live in JAVASCRIPT!</div>');
    
    $('body').append(myDiv);
    
    // Lets say we want to append the same div in multiple places
    $('h1').append(myDiv.clone()); // We must make a copy using clone
    
    // If you try this without cloning -  You have a "Highlander" variable
    // There can only be ONE.  So the old one will be removed, and jQuery will render the new one
    
    // Now you can remove() any of your generated content
    $('h1').remove();
    
    // Or you can just empty() the contents of your selection without destroying the element
    $(myDiv).empty();
    
    
    ////////////////////////////////////
    // DOM Traversal
    ////////////////////////////////////
    
    $('.buy').on('click', function() {
        var clickedButton = $(this);
        
        // Traverse the DOM to select the price
        // When you make a traversal selection, it becomes the new reference point,
        // allowing you to chain methods on the new selection.  Here we get the text
        // of the new selections (siblings).  You can also pass in a selector to the
        // traversal selection, in this case we want siblings with the .price class
        console.log(clickedButton.siblings('.price').text());
        
        // Grab the parent elements
        console.log(clickedButton.parent());
        console.log(clickedButton.parent().parent());
        
        // Grab the closest element that matches the selector
        // .closest() needs a selector, otherwise it will select the document
        // .closest() only goes up the DOM parent by parent
        console.log(clickedButton.closest('.big-container'));
        
        // The find() method is the opposite of closest()
        // find() also requires a selector
        // It travels down the DOM from the selection reference point(s)
        console.log($('.big-container').find('h2'));
        
        // Let practice - find the nearest h2 up from the button
        console.log(clickedButton.closest('.big-container').find('h2').text());
        
        // Give me all your children
        console.log('Give me all your children! ', $('.little-container').children());
    });
    
});