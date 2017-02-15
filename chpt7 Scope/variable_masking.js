//1. nested blocks, masked variables. aka, shadow variables
console.log("\n1.");
{
  let x = { color : "blue"};
  let y = x;
  let z = 3;
  {
    let x = 5; // outer x now masked
    console.log(`x=${x}`);
    console.log(`y.color = ${y.color}`);  // y is still in scope and as it was: 'blue'

    y.color = 'red'; // to check whether change the outer block's value.
    console.log(`z = ${z}`);
  }
  console.log(`y.color=${y.color}`); // => 'red' : changed by inner block

  console.log(`x.color=${x.color}`); // => 'red': because x, y refers(points) to the same object !!!

  console.log(`z = ${z}`);
}
