"use strict";
const fs = require("fs");
/*
fs.writeFile('new_folder/hello.txt', 'some contents...', function(err){

    if(err) {
        console.log("Error happens!");
    } else {
        console.log("success.");
    }

})
*/
class FileWriter {
    storeFile(folderName, fileName, contents) {
        return new Promise(function (resolve, reject) {
            fs.writeFile(folderName + '/' + fileName, contents, function (error) {
                if (error) {
                    reject("Something bad happened!");
                }
                else {
                    resolve("Your logfile has been successfully stored, naming as ... .");
                }
            });
        });
    }
}
exports.FileWriter = FileWriter;
//# sourceMappingURL=write.js.map