const fs = require('fs');
const path = require('path');

if(!fs.existsSync("../aFolder")){
	fs.mkdir("../aFolder");
}

console.log(fs.existsSync("../aFolder")); //true