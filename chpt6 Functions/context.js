// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#this_on_the_object's_prototype_chain

console.log('\n1. Global Context');

console.log(`typeof this = ${typeof this}`);
console.log(`==> Initially, this = ${this}`); //empty [global object]
console.log(this);

this.a = 1;
this.name = "global object";
console.log(`==> After adding properties to this, this = ${this}`);
console.log(this);
/*
// Only in browsers:
console.log(this.document === document); // true

// In web browsers, the window object is also the global object:
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37
*/
