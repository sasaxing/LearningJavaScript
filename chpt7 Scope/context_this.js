// each function has its own scope.
// each scope has its own 'this' object.
// unless you use arrow function,
// inner scope will never access outer scope's 'this' object, because it just has its own.

this.desc = "I'm outside function fn.";
var aVar = 'just a global var';

console.log('==> f1():');
const f1 = function(){
  console.log('f1:');
  console.log(this.desc);
  console.log(aVar);
}
f1(); // f1: undefined.

console.log('==> f2():');
const f2 = () => {
  console.log("f2:");
  console.log(this.desc);
  console.log(aVar);
}
f2(); //  f2: I'm outside function f1 and f2.

console.log('==> f3():');
const that = this;
const f3 = function(){
  console.log('f3:');
  console.log(that.desc);
  console.log(aVar);
}
f3()

console.log('==> obj.test():');
const obj = {
  name : 'tester',
  desc : "I'm inside obj.",
  test1 : f1,  // bound to the caller.
  test2 : f2,  // still lexical scoping.
};

obj.test1(); // f1: I'm inside obj.
obj.test2(); // f2: I'm outside function f1 and f2.

console.log('==> f4():');
// function Declaration will be hoisted
// so they will actually go out to check if any 'this' object has the property desc.
function f4(){
  this.desc = 'f4';
  function f5(){
    console.log('f4:');
    console.log(this.desc);
  }
  f5();
}

f4(); // f4
