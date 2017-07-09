const fs = require('fs');
//const path = require('path');

fs.writeFileSync('hello.txt', 'hello from Node!')
// it creates a file and write something into it;
// if the file already exists, it'll just be overwriten.
/*
fs.writeFile((__dirname+'/hello.txt'),'hello from Node!', function(err){
  if(err) return console.log('Error writing to file');
})
*/
