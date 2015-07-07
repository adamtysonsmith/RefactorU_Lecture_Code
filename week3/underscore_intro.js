///////////////////////////////////////
// Intro to Underscore
///////////////////////////////////////

// console.log(_);



// Using _.map
var numbers = [2,6,87];

var doubleNumbers = _.map(numbers, function(val) {
    return val * 2;
});
console.log(doubleNumbers);



// Using _.reduce
var str = 'Please Excuse My Dear Aunt Sally';

    // Three Args:
    // str.split(' ') is our array
    // function()
    // ' ' is our starting point
var reduction = _.reduce(str.split(' '), function(acroynm, currentWord) {
    return acroynm + currentWord[0] + '.';
}, ' ');
console.log(reduction);



// Using _.find
var treasures = [
    {
        type: 'wood',
        treasure: 'gold'
    },
    {
        type: 'wood',
        treasure: 'booty'
    },
    {
        type: 'metal',
        treasure: 'booty'
    }
];

// Goal: find and return the first chest with booty
// This will return the first object that is true
var booty = _.find(treasures, function(obj) {
    return obj.treasure === 'booty';
});
console.log(booty);


// Using _.pluck
var treasures = [
    {
        type: 'wood',
        treasure: 'gold'
    },
    {
        type: 'wood',
        treasure: 'booty'
    },
    {
        type: 'metal',
        treasure: 'booty'
    }
];

// Goal: Create a list of treasure types using pluck
var chestTypes = _.pluck(treasures, 'type');
console.log(chestTypes);



// Using _.uniq
var uniqueChestTypes = _.uniq(chestTypes);
console.log(uniqueChestTypes);
console.log(_.uniq([1,1,2,2,3,3,4,4,5,5]));



// Chaining Underscore methods
// By using chain, you pass the list(array) once to chain, then that sets the context for the rest of the chained methods
// At the end of the chain, you need to call value to get the final value
var chain = _.chain(treasures)
    .pluck('type')
    .uniq()
    .value();

console.log(chain);



// Challenge: get a unique list of all the treasures
// Hint: Flatten!
var moreTreasures = [
    {
        type: 'wood',
        treasure: ['gold', 'booty', 'doubloons', 'javascripties']
    },
    {
        type: 'wood',
        treasure: ['booty', 'doubloons', 'weapons']
    },
    {
        type: 'metal',
        treasure: ['booty', 'javascripties', 'breakfast cereal']
    }
];

var treasureList = _.chain(moreTreasures).pluck('treasure').flatten().uniq().value();
console.log('Our unique list of treasures:', treasureList);
