// http://www.jb51.net/article/65850.htm
console.log('\n1. ');
console.log("==> There is a caller using '.' to call the function/method, "+
            "so 'this' is bound to the caller.");
var myObject = {
  value:100,
}
myObject.getValue = function(){
  console.log(`Inside getValue(): this.value = ${this.value}`);
  console.log(`Inside getValue(): this = ${this}`);
  console.log(this);

  return this.value;
}
console.log(`myObject.getValue() = ${myObject.getValue()}`); //3 print out


console.log('\n2.');
console.log("==> There is no caller, " +
            "so 'this' is bound to the global object.");

myObject.getValue = function(){  // getValue() directly belongs to myObject
  var foo = function(){        // but foo() is just a part of getValue(), like any other parts of getValue(), does not belong to anyone.
    console.log(`Inside foo(): this.value = ${this.value}`);  // Javascript no idea that 'this ' should be related to myObject
    console.log(`Inside foo(): this = ${this}`);       // so it's just bound to the global object
    //console.log(this);  //the whole global object, too large to print it.
  };

  foo();
  return this.value;  // this 'this' will be bound to myObject

};

console.log(`myObject.getValue() = ${myObject.getValue()}`);


console.log('\n3.');

console.log("==> You are using Arrow Function, "+
            "so 'this' is bound lexically.");  //meaning that, 'this' here is just an identifier name, nothing else.
            // JavaScript starts at the innermost scope and searches outwards until it finds the variable/object/function it was looking for

myObject.getValue = () => {
  //this.value = "It's not global obj, not myObj, it's just some obj."
  console.log(`Inside getValue(): this.value = ${this.value}`);
  console.log(`Inside getValue(): this = ${this}`);
  console.log(this);

  return this.value;
}
console.log(myObject.getValue());


console.log('\n4.');
console.log("==> You are using 'this' in a constructor," +
            "'this' will be bound to the new object.");
const People = function(){
  this.type = "Human";
}
let aPerson = new People();
console.log(`aPerson.type = ${aPerson.type}`);
console.log(`aPerson = ${aPerson}`);
console.log(aPerson);


console.log('\n5.');
console.log("==> You can use call,apply,bind to change the bounder.");
var foo = function(){
  console.log(this);
}
//foo(); //global obj
foo.apply(myObject); // {value:100}
foo.call(myObject); // {value:100}

var newFoo = foo.bind(myObject);
newFoo();
