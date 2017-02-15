"use strict";
//import fs = require('fs');
var fs = require("fs");
var result = fs.readFileSync('foo.txt', 'utf8');
console.log(result);
