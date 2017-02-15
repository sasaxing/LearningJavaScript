//import fs = require('fs');
import * as fs from 'fs';
let result = fs.readFileSync('foo.txt','utf8');
console.log(result);