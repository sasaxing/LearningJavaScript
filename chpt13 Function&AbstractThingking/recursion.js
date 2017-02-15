console.log('\n1.');
function findNeedle(haystack){
  if(haystack.length === 0) return "No haystack here!";
  if(haystack.shift() === 'needle') return "Found it!";
  return findNeedle(haystack);  //the first ele deleted.
}

console.log(findNeedle(['hay','hay','hay','hay','needle','hay','hay']));


console.log('\n2.');
function fact(n){
  if(n === 1) return 1;
  return n*fact(n-1);
}
console.log(`fact(5) = ${fact(5)}`);
