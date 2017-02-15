'use strict'

console.log('\n1.');
//const FuncClass = function f() {   // also right
const FuncClass = function() {
  this.greet = function(){  // here must be a 'this.' ,
                            // otherwise: ReferenceError: greet is not defined
    console.log('hi');
  }
}
const fc = new FuncClass();
fc.greet();
console.log(typeof FuncClass); // function(of course)
console.log(typeof fc); // object


console.log('\n2.');
//const aClass = class {  // also right
const AClass = class {
  greet(){
    console.log('hi');
  }
}
const ac = new AClass();
ac.greet();
console.log(typeof AClass);  // function(class)
console.log(typeof ac);  // object
