
// 1. closure
// make inner scope accessible to outside using inner functions.

console.log('\n1.');
let fc;
{
  let o = { note : 'safe'};
  console.log("==> At first, we define an o inside the closure:");
  console.log(`Inner o.note = ${o.note}`);
  fc = function() {
    return o;
  }
}

let oRef = fc();
oRef.note = "Not so safe after all!"
console.log(`==> We have changed the inner object, which we should not have access to without the inner function.`);
console.log(`Inner o.note = ${fc().note}`);
