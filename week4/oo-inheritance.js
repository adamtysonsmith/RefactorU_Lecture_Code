// A Restaurant has a menu, a Menu has a plate, etc - 'Has a' Relationship
// A Golden Retreiver is a Dog, and a dog is an animal - 'Is a' Relationship

var Monkey = function(name, color) {
    this.name = name;
    this.color = color;
}
Monkey.prototype.climb = function(tree) {
    console.log(this.name + ' climbs the ' + tree + ' tree.');
}


// Instance
var george = new Monkey('George','red');
george.climb('oak');

// The point of inheritance is to prevent duplicating code.
// Don't use it all Willy Nilly - use it when it makes sense
//var FlyingMonkey = function(name, color, wingspan) {
//    this.name = name;
//    this.color = color;
//    this.wingspan = wingspan;
//}



//////////////////////////////////////////
// Inheritance
//////////////////////////////////////////

// Our FlyingMonkey should inherit the properties and methods from our Monkey class
var FlyingMonkey = function(name, color, wingspan) {
    // The monkey constructor adds name and color to our newly created FlyingMonkey
    // 1. Use the monkey constructor, but instead of using the 'monkey this' use the 'flyingmonkey this'
    // 2. Then pass in the args we passed to this flyingmonkey
    // 3. We are simply executing the monkey constructor function to set properties on THIS flying monkey.
    Monkey.call(this, name, color); // Omit wingspan because we don't need to pass wingpspan into Monkey constructor
    
    // If you had a bunch of args we could use apply, and simply pass in the arguments array
    // It will pass every argument, but the extra args will just be ignored by Monkey
    // Monkey.apply(this, arguments);
    
    // Now we need to construct the extra property
    this.wingspan = wingspan;
    
    // At this point we still dont inherit the methods of Monkey though!
    // We need an extra step to do that
}

// Now lets inherit the methods
FlyingMonkey.prototype = new Monkey();

// This will allow you to reassign the constructor for easier debugging
// Without doing this, the FlyingMonkey.constructor would be Monkey
FlyingMonkey.prototype.constructor = FlyingMonkey; 

// Now lets add some unique methods to Flying Monkey
FlyingMonkey.prototype.fly = function() {
    console.log(this.name + ' flew ' + this.wingspan * 10 + ' feet!');
}

// We can also ovverride any parent methods if we want to
// JS will go up the prototype chain as many levels as needed to find the method,
// so defining methods at the lowest level will take precendence
//FlyingMonkey.prototype.climb = function() {
//    console.log('Flying monkeys are better at climbing, but very condescending while doing it!');
//}

var evilGeorge = new FlyingMonkey('Evil George','Black',150);

// Note on Inheritance:
// The sub-class is always larger than the parent class because the child classes have extra methods and properties
