//1. the function f has access to the identifiers that were available where it was defined, not where it was called.

console.log("\n1.");
const x = 3;

function f(){
  console.log(`x = ${x}`);
  console.log(`y = ${y}`);  // have access to y as well.
}

const y = 4;
f();


console.log("\n2.");

const x1 = 3;

function f1(){
  console.log(`x1 = ${x1}`);
  console.log(`y1 = ${y1}`);  // will produce a ReferenceError
}

{ // new scope
  const y1 = 5;
  f1(); // the function f has access to the identifiers that were available when it was defined, not when it was called.
  // when  f1() is called, who is in outer scope, it can't see the inner scope y1.
}

console.log("\n3.");

const x1 = 3;

function f1(){
  console.log(`x1 = ${x1}`);
  console.log(`y1 = ${y1}`);  // will produce a ReferenceError
}

const y1 = 5;

{ // new scope
  f1(); // the function f has access to the identifiers that were available when it was defined, not when it was called.
  // when  f1() is called, who is in outer scope, it can't see the inner scope y1.

}
