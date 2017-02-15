console.log(a);  // undefined ==>  var declaration is hoisted, but the var assignmenet is not.
var a = 1;

console.log(b);  //ReferenceError: b is not defined ==> let will not be hoisted, neither of const
let b = 2;

console.log(c); //ReferenceError: c is not defined
const c = 3;
