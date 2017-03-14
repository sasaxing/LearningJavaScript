var rimraf = require('rimraf');  //rm -rf  // both folder and file
var fs = require('fs');

if (fs.existsSync("./aFolder")) {  // only string to delete , no array.
    rimraf.sync("./aFolder");
}


