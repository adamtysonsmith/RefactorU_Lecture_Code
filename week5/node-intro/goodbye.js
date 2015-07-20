// We use require to import the value of module.exports
// When we require a file, node executes that file and then assigns the value to module.exports
// Once you use require, the module.exports is cached.  So Node is smart enough to only execute that file once.  Even when used in other files.
var allTheData = require('./hello-node.js');

// The module.exports is an object, you can set all the key-value pairs you want
// and retreive the data
console.log(allTheData);
console.log(allTheData.someOtherData);
console.log(allTheData.alltheData);

// Import lodash module that we downloaded from npm
var _ = require('lodash');