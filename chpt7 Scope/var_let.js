
//1. var
console.log('\n1.');
var1;
console.log(`==> You can use a var variable before declaring it:`);
console.log(`var1 = ${var1}`);
var var1 = 1;
console.log(`==> After declaring:\nvar1 = ${var1}`);

{
  var var2 = 2;
  {
    var var3=3;
    console.log(`==> Read outside from inner block: var1 = ${var1}`);
  }
}
console.log(`==> Read inner block variable from outside: var3 = ${var3}`);  // this is not possible using let.

// 2. let
console.log('\n2.');
//let1;  //ReferenceError: let1 is not defined
console.log(`==> You can't use a let variable before declaring it:`);
//console.log(`let1 = ${let1}`);
let let1 = 1;
console.log(`==> After declaring:\nlet1 = ${let1}`);

{
  let let2 = 2;
  {
    let let3 = 3;
    console.log(`==> Read outside from inner block: let1 = ${let1}`);
  }
}
console.log(`==> Read inner block variable from outside: <Not possible!!>`);  // this is not possible using let.


console.log('\n3.');
var v1;
v1 = 100;

if(true){
  var v1;   // still the same as the outer scope var, because the declaration is hoisted
  console.log(v1);  // 100
}

console.log('\n4.');
let l1;
l1 = 100;

if(true){
  let l1 = l1-1;  // shadow the outer scope's l1.
  console.log(l1);  // undefined
}
