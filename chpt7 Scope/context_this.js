// each function has its own scope.
// each scope has its own 'this' object.
// unless you use arrow function,
// inner scope will never access outer scope's 'this' object, because it just has its own.

this.desc = "I'm outside function fn.";
var aVar = 'just a global var';

console.log('\n==> f1():');
const f1 = function(){
  console.log('f1:');
  console.log(this.desc);
  console.log(aVar);
}
f1(); // f1: undefined.

console.log('\n==> f2():');
const f2 = () => {
  console.log("f2:");
  console.log(this.desc);
  console.log(aVar);
}
f2(); //  f2: I'm outside function f1 and f2.

console.log('\n==> f3():');
const that = this;
const f3 = function(){
  console.log('f3:');
  console.log(that.desc);
  console.log(aVar);
}
f3()

console.log('\n==> obj.test():');
const obj = {
  name : 'tester',
  desc : "I'm inside obj.",
  test1 : f1,  // bound to the caller.
  test2 : f2,  // still lexical scoping.
};

obj.test1(); // f1: I'm inside obj.
obj.test2(); // f2: I'm outside function f1 and f2.

console.log('\n==> f4():');
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



console.log('\n==> f5():');
this.outerProp = 'outerProp'
this.bothProp = 'bothProp-outside'
f5 = ()=>{
  this.innerProp = 'innerProp'
  this.bothProp = 'bothProp-inside'

  console.log(this.innerProp)//inner scope's this has the property 'innerProp'
  console.log(this.outerProp)//inner scope's this doesn't have the property 'innerProp', use the outside's this(=>)
  console.log(this.bothProp) //both have. then use its own
}
f5()
