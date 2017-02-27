const fs = require('fs');
const path = require('path');

console.log(__dirname);

console.log(path.join(__dirname, "hello", "world"));
//use path.join(), it will join all the items inside with the OS's own separator.
// e.g., unix: '/', windows: '\'
// so this will make code more OS-independent



fs.readFile(path.join(__dirname,"aFolder", "..", "hello.txt"), {encoding: 'utf8'}, function(err, data){
    if(err) return console.error('Error reading file.');
    console.log('Read file contents:');
    console.log(data);

})
