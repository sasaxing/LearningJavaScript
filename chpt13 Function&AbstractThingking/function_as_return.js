function sum(arr, f){
  if(typeof f != 'function')  f= x=>x;
  if(typeof arr === 'number') return f(arr);

  return arr.reduce((a,x)=>a+=f(x), 0);
}

function newSummer(f){
  return arr => sum(arr,f)
}

const sumOfSquare = newSummer(x=>x*x);
console.log(`sumOfSquare([1,2,3]) = ${sumOfSquare([1,2,3])}`);  //14
console.log(`newSummer(x=>2*x)([1,2,3]) = ${newSummer(x=>2*x)([1,2,3])}`);  //12
console.log(`newSummer(x=>2*x)(3) = ${newSummer(x=>2*x)(3)}`);  //6
