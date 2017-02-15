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
  .then((x)=>{
    x += 5;
    console.log(`:) a = ${x}`);
    return x; //10
  })
  .then(
    function(x){
      return new Promise(function(resolve, reject) {
        x += '5'; //'105'
        //x += 5;
        console.log(`:) a = ${x}`);
        if (typeof x === 'number') {
          resolve(x);
        }else {
          reject(x);
        }
      });
    }
  )
  .then((x)=>{
    x += 5;
    console.log(`:) a = ${x}`);
    //resolve(x)
    // can not do this: it's not inside a Promise block,
    // resolve will be undefined.
    return x;

  })
  .then((x)=>{
    x += 5;
    console.log(`:) a = ${x}`);
    return x;
  })
  .catch((x)=>{
    console.log(`:( a = ${x}`);
    return -1;
  })

// catch will take care the whole chain,
// no matter when it decides to reject,
// it will jump to execute catch's callback function
