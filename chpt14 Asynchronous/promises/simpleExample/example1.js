//https://www.youtube.com/watch?v=s6SH72uAn3Q

let promiseToCleanTheRoom = new Promise(function(resolve, reject) {
  //rs, rj are parameters of the Promise Object's callback.
  // rs: I finish what I promised
  // rj: I can't fulfilled what I promised under some constriants.

  //DO THINGS: try best to clean the room

  let isClean = false;

  if(isClean){
    resolve('clean');
  }else{
    reject('not clean');
  }

});


//execute the primise
//may take a long time to wait for the promise to finish DO THINGS
promiseToCleanTheRoom
  .then(function(fromResolve){  // this function here is connected to resolve()
              // the message behind resolve() can be catched by the argument of this function here.
    console.log("The room is " + fromResolve);
  })
  .catch(function(fromReject){  // this function here is connected to reject()
    console.log("The room is " + fromReject);
  })

// it will wait for the Promise to execute all the code inside
// the inside code will finally decide itself whether to resolve or reject a promise.
// only after all of these, .then/.catch will be executed
// if resolve: then's callback function will be executed
// if reject: catch's callback function will be executed.
