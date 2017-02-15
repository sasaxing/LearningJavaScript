console.log('\nStart of code.');

new Promise(function(resolve, reject) {
// resolve and reject here are 2 parameters(functions as parameters) of Promise's callback function.
// They are built in functions of Promise Library
// when you call these 2 parameters/functions inside the callback's body
// e.g., resolve(a) or reject(a),
// it will do more things than you can see here
// the resolve built in is something looks like this:
/*
  resolve(p){
    thisPromiseObject.rs(p);
    // rs here is defined inside then()
    // as a parameter as well.
  }
*/



  //DO THINGS: try best to clean the room
  let isClean = false;

  if(isClean){
    resolve('clean');
  }else{
    reject('not clean');
  }

})
  .then( (result) => console.log(" :) The room is " + result),   // rs
         (result) => console.log(" :( The room is " + result) )   //rj


console.log('End of code!');

// 1. you can assign all parameters in then()(both resolve and reject)
// 2. every time you call then() [the method of Promise object],
//    it will first wait until the completion of the code inside Promise.
//    then it will decide whether resolve or reject
//    then it knows which parameter of then() to execute. Note that the parameter here is a function.
//    As it must until the completion of the Promise's
