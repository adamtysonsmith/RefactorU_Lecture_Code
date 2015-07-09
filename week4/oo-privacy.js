/////////////////////////////////////////////////
// Public Methods
/////////////////////////////////////////////////

// myNameIs() is a public method
var Person = function(first, middle, last) {
    this.first = first;
    this.middle = middle;
    this.last = last;
}
Person.prototype.myNameIs = function() {
    console.log(this.first + ' ' + this.middle + ' ' + this.last);
}

var bill = new Person('Bill','Fuckin','Murray');
bill.myNameIs();



/////////////////////////////////////////////////
// Private Methods
/////////////////////////////////////////////////

// fullName() is a private method
var ImportantPerson = (function() {
    
    var ImportantPerson = function(first, middle, last) {
        this.first = first;
        this.middle = middle;
        this.last = last;  
    }
    
    // This is private! Cannot be accessed outside of this scope
    var fullName = function(thatPerson) {
        return thatPerson.first + ' ' + thatPerson.middle + ' ' + thatPerson.last
    }
    
    // When we call myNameIs(), it will call fullName() because we have closure
    ImportantPerson.prototype.myNameIs = function() {
        console.log(fullName(this));
    }
    
    return ImportantPerson;
})();

var jfk = new ImportantPerson('John','F','Kennedy');
jfk.myNameIs();



/////////////////////////////////////////////////
// Static Methods
/////////////////////////////////////////////////

// This AwesomePerson IIFE executes once and returns the AwesomePersonINSIDE.
// Every time you call new AwesomePerson(), it is really using the AwesomePersonINSIDE constructor that was returned
var AwesomePerson = (function() {
    var awesomePeople = [];
    
    var AwesomePersonINSIDE = function(first, middle, last) {
        this.first = first;
        this.middle = middle;
        this.last = last;
        awesomePeople.push(this);
    }
    
    // This is a static method, since it concerns all our Persons
    AwesomePersonINSIDE.listAllPeople = function() {
        console.log(awesomePeople);
    }
    
    // This is private! Cannot be accessed outside of this scope
    var fullName = function(thatPerson) {
        return thatPerson.first + ' ' + thatPerson.middle + ' ' + thatPerson.last
    }
    
    // When we call myNameIs(), it will call fullName() because we have closure
    AwesomePersonINSIDE.prototype.myNameIs = function() {
        console.log(fullName(this));
    }
    
    return AwesomePersonINSIDE;
})();

var seth = new AwesomePerson('Chief','Skeef','Skeefer');
var jamie = new AwesomePerson('The','Mighty','Binnsler');
var chris = new AwesomePerson('Chris','Or','Fully');
var me = new AwesomePerson('Adam','T','Smith');
me.myNameIs();

// The static method allows you to call a method on a class!
console.log(AwesomePerson.listAllPeople());