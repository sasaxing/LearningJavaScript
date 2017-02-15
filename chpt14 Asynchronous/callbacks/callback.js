// From wikipedia:
// a callback is a piece of executable code
// that is passed as an argument to other code,
// which is expected to call back (execute) the argument
// at some convenient time.

console.log('\n1. setTimeout():');
// we don't wait for the completion of f()
// we just continue to execute the rest
// so it does not block anything.
console.log("Before timeout: " + new Date());
function f(){
  console.log("After timeout: " + new Date());
}
setTimeout(f, 7*1000);  // f will be invoked(called back) in the future, when time is out.
setTimeout(f, 3*1000);
setTimeout(f, 1*1000);

console.log("I happen after setTimeout!"); // but exe before it
console.log("I happen after setTimeout as well!"); // even when timeout=0;


// setTimeout() and setInterval() are both asynchronous functions:
// they don't block each other
// they don't block any others
// their f() will be executed as soon as the time arrives,
// regardless of any other control flows.

console.log('\n2. setInterval()');
const start = new Date();
let i = 0;

function f1(){
  let now = new Date();
  if(now.getMinutes() !== start.getMinutes() || ++i>3)
    return clearInterval(intervalId);  //I(f1) will call you(intervalId) back when time is right.
    // where f is defined: global scope
    // where intervalId is defined: also global scope
    // so when we call setInterval(f,5000), the f inside a inner scope knows what intervalId we mean.

  console.log(`${i}: ${now}`);
}

const intervalId = setInterval(f1, 5*1000);



console.log('\n3. Error-First callback:');
const fs = require('fs');

const fname = 'may_or_may_not_exist.txt';

fs.readFile(fname, function(err, data){
  if(err) return console.error(`error reading file ${fname}: ${err.message}`);
  console.log(`${fname} contents: ${data}`);
});
