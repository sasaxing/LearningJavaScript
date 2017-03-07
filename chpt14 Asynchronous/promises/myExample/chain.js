let a = 1;
new Promise(function(resolve, reject) {
  a *= 10;
  a /= 2;
  a -= 1; //4

  if (typeof a === 'number') {
    resolve(a);
  }else {
    reject(a);
  }
})
  .then((x)=>{
    x += 1;
    console.log(`:) a = ${x}`);
    return x; //5
  })


console.log(`a = ${a}`);
