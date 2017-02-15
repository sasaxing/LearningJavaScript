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
    console.log("Lift off!");
    setTimeout(function(){
      resolve("In orbit");  // resolve's msg
    }, 2*1000); // a very fast rocket inded
  });
}

const c = new Countdown(15,true).on('tick', i=>console.log(i+'...'));

c.go().then(launch)   // launch() is the resolve function
  .then(function(msg){   // the resolve function itself will return a promise object.
    console.log(msg);   // this is the body of this returned Promise's resolve function
  })
  .catch(function(err){  // this is the reject function of the returned Promise.
    console.error("Houston, we have a problem....");
  })
