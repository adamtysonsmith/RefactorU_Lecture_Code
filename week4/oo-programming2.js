// Volcano Constructor
// @param height - number
// @param age - number
// @param activity - bool
var Volcano  = function(name, height, age, activity) {
    this.name = name;
    this.height = height;
    this.age = age;
    this.activity = activity;
}

Volcano.prototype.erupt = function () {
    console.log(this.name + ' has erupted! BOOM!!!!');
};
Volcano.prototype.earthquake = function () {
    console.log(this.name + ' has erupted! BOOM!!!!');
};



// Lair Constructor
// @param name - string
// @param fortified - bool
// @param lunch - bool
var Lair = function(name, fortified, lunchBuffet, villian) {
    if (typeof name === 'string' && typeof fortified === 'boolean' && typeof lunchBuffet === 'boolean' && villian.constructor === Villian) {
        this.name = name;
        this.fortified = fortified;
        this.lunchBuffet = lunchBuffet;
        this.villian = villian;
    }
}

Lair.prototype.launchMissiles = function() {
    return 'Missles launched from ' + this.name;
}
Lair.prototype.selfDestruct = function() {
    return 'Self Destruct Imminent!!';
}



// Villian Constructor
// @param name - string
// @param bald - bool
// @param saying - string
var Villian = function(name, bald, saying) {
    if (typeof name === 'string' && typeof bald === 'boolean' && typeof saying === 'string') {
        this.name = name;
        this.bald = bald;
        this.saying = saying;
    }
}

Villian.prototype.speech = function() {
    
}





// Let's make some objects
var vesuvius = new Volcano('Mt. Vesuvius', 12000, 2700, true);
var evilVillian = new Villian('Dr. Evil', true, 'How about no!');
var evilLair = new Lair('Mordor', true, true, evilVillian);
