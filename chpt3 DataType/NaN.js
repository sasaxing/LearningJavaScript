var n1 = 0 / 0;
var n2 = "food" * 1000;
var n3 = Math.sqrt(-9);

console.log(`${n1} is a ${typeof n1}`); //NaN is a number
console.log(`${n2} is a ${typeof n2}`);
console.log(`${n3} is a ${typeof n3}`);

console.log(`typeof NaN = ${typeof NaN}`);  //typeof NaN = number

if(n3 == NaN){  // will not be true! Every NaN is unique in JavaScript
  console.log("n3 is NaN.");
}

if(isNaN(n3)){ // this is true
  console.log("==> n3 is NaN.");
}
