const fs = require('fs');
const path = require('path');

if (fs.existsSync("./aFileToDelete.txt")) {
    fs.unlinkSync("./aFileToDelete.txt");
}

if (fs.existsSync("./anEmptyFolderToDelete")) {
    fs.rmdirSync("./anEmptyFolderToDelete") // only can delete empty folder. even if it has .DS_Store
}

var deleteFolderRecursively = function (path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function (file, index) {
            var curPath = path + "/" + file;
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};
deleteFolderRecursively("./aFolder");
