// Import filesystem module
var fs = require('fs');

// Store our file to copy that was passed as an argument
var fileToCopy = process.argv[2];

// Read the contents
var contents = fs.readFileSync(fileToCopy, 'utf-8');

// Write the contents to a new file
fs.writeFileSync('/Users/student/Desktop/copy-output.txt', contents);