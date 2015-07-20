console.log('hello-node.js just executed');

// The process object tells me information about this script process
//console.log(process);

// List of all arguments your script received at the command line
// console.log(process.argv); // => returns array of args!
// Arguments are passed with spaces at the terminal$ node hello.js arg1 arg2

// This tells you information about the environment
// You can also do this with unix env
// Anything you can access in the Unix terminal is also accessible in Node.js
// console.log(process.env);

// Lets pass some data to another file, goodbye.js
var allTheData = [1,2,3];
var someOtherData = ['a', 'b', 'c'];

// The module object allows us to export and import scripts
// module.exports is the only thing accessible outside of this file
module.exports = {
    alltheData: allTheData,
    someOtherData: someOtherData
}