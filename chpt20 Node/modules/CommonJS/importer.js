// 1. import the default export 
const cal = require('./exporter.js');
console.log(cal(3));

// 2. import another non-default export function
const geo = require('./exporter.js').geometricSum;
console.log(geo(1, 2, 5));


console.log(exports === module.exports)