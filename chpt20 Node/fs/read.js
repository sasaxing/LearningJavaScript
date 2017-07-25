const fs = require('fs');
const path = require('path');
//__dirname,  is always set to the directory in which the source file resides.
//path.join will make it work for windows as well.

/* fs.readFileSync:  read syncly, and return the read contents*/
let result = fs.readFileSync(path.join(__dirname, "hello.txt"), { encoding: 'utf8' })
// without option:{encodeing: 'utf8'}, this will return an object<Buffer>
console.log('result = ', result)
console.log('typeof(result) = ', typeof (result))

/* fs.readFile: read asyncly, does NOT return the read contents, but use function as err&data handler */
fs.readFile(path.join(__dirname, "helloo.txt"), { encoding: 'utf8' }, function (err, data) {
  if (err) {
    console.error('==>Error:', err.message);
    return  // return here or move the rest code into else-block
  }
  console.log('Read file contents:');
  console.log(data);
})

/*
//console.log(fs.readdirSync(__dirname));
fs.readdir(__dirname, function (err, files) {
  if (err) return console.error('Unable to read directory contents.');
  console.log(`Contents of ${__dirname}`);
  console.log(files.map(f => '\t' + f).join('\n'));
})

let filePaths = ['./hello.txt', './hello.txt']
filePaths.forEach(function (element) {
  let buffer = fs.readFileSync(element)
  console.log(`buffer = ${buffer}`);

})

*/