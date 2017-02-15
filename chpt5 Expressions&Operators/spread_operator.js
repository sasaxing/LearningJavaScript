// (...arr) <==> (arr[0],arr[1],arr[2],...,arr[l-1])

console.log('\n1. p106:');
function addPrefix(prefix, ...words){
  const prefixedWords = [];
  for(let i=0; i<words.length; i++){
    prefixedWords[i] = prefix + words[i];
  }
  return prefixedWords;
}
console.log(addPrefix('con','verse','vex'));
// ...words = 'verse', 'vex', ... (all after the first one)


console.log('\n2. p114:');
const arr = [2,3,-5, 15, 7];
console.log(Math.min.apply(null, arr));  // bind to nothing : apply(bounder, anArray)
console.log(Math.max.apply(null, arr));  // bind to nothing
console.log(Math.min.call(null, ...arr)); // bind to nothing : call(bounder, otherArguments)
