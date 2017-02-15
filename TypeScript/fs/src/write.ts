import * as fs from 'fs';

/*
fs.writeFile('new_folder/hello.txt', 'some contents...', function(err){

    if(err) {
        console.log("Error happens!");
    } else {
        console.log("success.");
    }

})
*/

export class FileWriter {

    storeFile(folderName: string, fileName: string, contents: string): Promise<string> {
        return new Promise(function(resolve, reject) {
            fs.writeFile(folderName+'/'+fileName, contents, function(error){
                if(error) { // can not  reject here, why?
                    reject("Something bad happened!")
                }else {
                    resolve("Your logfile has been successfully stored, naming as ... .")
                }
            })
        });
    }
}
