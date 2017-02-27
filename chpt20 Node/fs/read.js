const fs = require('fs');
const path = require('path');

//__dirname,  is always set to the directory in which the source file resides.
//path.join will make it work for windows as well.
fs.readFile(path.join(__dirname,"hello.txt"), {encoding: 'utf8'}, function(err, data){
  if(err) return console.error('Error reading file.');
  console.log('Read file contents:');
  console.log(data);

})  // this returns a string
// without option:{encodeing: 'utf8'}, this will return an object


//console.log(fs.readdirSync(__dirname));
fs.readdir(__dirname, function(err, files){
  if(err) return console.error('Unable to read directory contents.');
  console.log(`Contents of ${__dirname}`);
  console.log(files.map( f => '\t'+f).join('\n'));
})
