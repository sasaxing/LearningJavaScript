var rimraf = require('rimraf');  //rm -rf
var fs = require('fs');

if (fs.existsSync("./aFolder")) {
    rimraf.sync("./aFolder");
}
