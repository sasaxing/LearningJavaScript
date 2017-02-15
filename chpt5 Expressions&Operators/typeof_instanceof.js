console.log('\n1. Array:');
const arr = [1,3,2];

console.log(`> arr instanceof Object`);
console.log(arr instanceof Object);   // true
console.log(`> arr instanceof Array`);
console.log(arr instanceof Array);    // true
console.log(`> arr instanceof Function`);
console.log(arr instanceof Function);  //false

console.log(`> typeof arr`);
console.log(typeof arr);      //object
console.log(`> typeof(typeof arr)`);
console.log(typeof(typeof arr));      //string

console.log(`> typeof arr === 'array'`);
console.log(typeof arr === 'array');    //false
console.log(`> typeof arr === 'object'`);
console.log(typeof arr === 'object');   //true
console.log(`> typeof arr === Object`);
console.log(typeof arr === Object);   //false

console.log('\n2. Function:');
const f = function(){};

console.log(`> f instanceof Object`);
console.log(f instanceof Object);   // true
console.log(`> f instanceof Array`);
console.log(f instanceof Array);    // false
console.log(`> f instanceof Function`);
console.log(f instanceof Function);  //true

console.log(`> typeof f`);
console.log(typeof f);      // function
console.log(`> typeof(typeof f)`);
console.log(typeof(typeof f));    //string

console.log(`> typeof f === 'function'`);
console.log(typeof f === 'function');    //true
console.log(`> typeof f === 'object'`);
console.log(typeof f === 'object');   //false
console.log(`> typeof f === Object`);
console.log(typeof f === Object);   //false
