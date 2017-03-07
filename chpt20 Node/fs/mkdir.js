const fs = require('fs');
const path = require('path');

console.log(__dirname);

fs.mkdir("anotherFolder",function(err){
    if(err){
        console.log("==>Error:");
        console.log(err);
    } else {
        console.log("No errror");
    }
})
