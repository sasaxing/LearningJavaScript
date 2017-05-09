const fs = require('fs');
const path = require('path');

console.log(__dirname);

let folderSuffix = Math.random() * Math.pow(10, 17).toString()
fs.mkdir('folder-' + `${folderSuffix}`, function(err) {
    debugger // folder created already: not wait the cb finish.
    if (err) {
        console.log("==>Error:");
        console.log(err);
    } else {
        console.log("No errror");
    }
})
