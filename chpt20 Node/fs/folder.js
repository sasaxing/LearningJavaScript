const fs = require('fs');
const path = require('path');
//__dirname,  is always set to the directory in which the source file resides.
//path.join will make it work for windows as well.

myPath = path.join(__dirname, "./ServerLogs")
if( !fs.existsSync(myPath) ){
	fs.mkdirSync(myPath)
}

console.log(fs.existsSync(myPath)); //true
/*
if(!fs.existsSync("./aFolder")){
	fs.mkdir("./aFolder");
}

console.log(fs.existsSync("./aFolder")); //true
*/
