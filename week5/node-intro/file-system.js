var fs = require('fs');

// Write to a new file synchronously, Accepts a file name and file contents
fs.writeFileSync('output.txt', 'This is some text in my new file!');

// Read a file.  Takes 2 args: File to read, and character encoding to return
var notes = fs.readFileSync('./node-intro.txt', 'utf-8');
console.log(notes);