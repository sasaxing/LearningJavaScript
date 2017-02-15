const fs = require('fs');
//const path = require('path');

let path = "logs/"
fs.writeFile( path + 'hello.txt','hello from Node!', function(err){
  if(err) return console.log(err);
})

/*
fs.writeFile((__dirname+'/hello.txt'),'hello from Node!', function(err){
  if(err) return console.log('Error writing to file');
})
*/
