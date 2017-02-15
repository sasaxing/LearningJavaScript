const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter {
  constructor(seconds, superstitious){
    super();
    this.seconds = seconds;
    this.superstitious = !!superstitious;  // transfer whatever to boolean
  }
  go(){
    const countdown = this;

    const timeoutIds = [];

    return new Promise(function(resolve, reject) {
      for(let i=countdown.seconds; i>=0; i--){
        timeoutIds.push(setTimeout(function(){
          if(countdown.superstitious && i===13){
            console.log(`timeoutIds.length = ${timeoutIds.length}`); // 16
            //clear all pending timeouts.
            timeoutIds.forEach(clearTimeout);
            return reject(new Error("Definitely NOT counting that!"));
          }
          countdown.emit('tick', i);  //emit(event, arg);
          if(i===0) resolve();
        }, (countdown.seconds-i)*1000));
      }
      console.log(`timeoutIds.length = ${timeoutIds.length}`); // 16
    });
  }
}

function launch(){
  return new Promise(function(resolve, reject) {
    if(Math.random()<0.5) return;
    // silent failure
    // no reject
    // no error log

    console.log("Lift off!");
    setTimeout(function(){
      resolve("In orbit");  // resolve's msg
    }, 2*1000); // a very fast rocket inded
  });
}


// To solve the above problem, we need another timeout:
// if the promise hasn’t settled in some reasonable amount of time,
// automatically reject it.

// this timeout should be at least larger than the time that the algorithm needs to execute.
// to let the whole algorithm normally finish executing,
// otherwise it will always end into "promise timed out!".

function addTimeout(fn, timeout){
  if(timeout === undefined) timeout = 1000; // default timeout

  return function(...args){
    return new Promise(function(resolve, reject) {
      const tid = setTimeout(reject, timeout, new Error("promise timed out!"));

      fn(...args)  // will be launch() in our case, it will return a promise obj
        .then(function(...args){ // this is the rs-callback of the Promise-obj returned by launch
          clearTimeout(tid);  // if resolve(successfully), clear tid, so the callback of tid will not be executed.
          resolve(...args);  // then call the rs-callback of the current Promise obj. (5 lines ago, differ from the Promise obj returned by )
        })
        .catch(function(...args){ // rj-callback of launch's return Promise-obj
          clearTimeout(tid);
          reject(...args); // call the rj-callback of current Promise-obj
        });
        // so no matter rs or rj, tid will both be cleared
        // so the callback of tid(reject) will not be executed
        // unless neither rs nor rj is called within the pre-set timeout:
        // i.e., unsettled!
    });
  }
}

/*
const c = new Countdown(2,true).on('tick', i=>console.log(i+'...'));

c.go()
  .then(launch)   // launch() is the resolve function
  .then(function(msg){   // the resolve function itself will return a promise object.
    console.log(msg);   // this is the body of this returned Promise's resolve function
  })
  .catch(function(err){  // this is the reject function of the returned Promise.
    console.error("Houston, we have a problem....");
  });
*/

const c1 = new Countdown(2,true).on('tick', i=>console.log(i+'...'));

// this timeout should be at least larger than the time that the algorithm needs to execute.
// so 4*1000s at least larger than 2s.
// otherwise it will always end into "promise timed out!".
c1.go()
  .then(addTimeout(launch, 4*1000))   // launch() is the resolve function
  .then(function(msg){   // the resolve function itself will return a promise object.
    console.log(msg);   // this is the body of this returned Promise's resolve function
  })
  .catch(function(err){  // this is the reject function of the returned Promise.
    console.error("Houston, we have a problem: " + err.message);
  });
