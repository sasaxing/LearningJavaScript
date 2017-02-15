console.log('\nStart of code.');

new Promise(function(resolve, reject) {

  //DO THINGS: try best to clean the room
  let isClean = true;

  if(isClean){
    resolve('clean');
  }else{
    reject('not clean');
  }

})
  .then( (result) => console.log(" :) The room is " + result) )   // rs
  .catch( (result) => console.log(" :( The room is " + result) )   //rj


console.log('End of code!');


// you can also define {the callback of resolve } in then()
// and define {the callback of reject } in catch()
// respectively
