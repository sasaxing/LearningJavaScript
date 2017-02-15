// While it’s possible to use EventEmitter with a function like countdown,
// it’s designed to be used with a class.

const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter {
  constructor(seconds, superstitious){
    super();
    this.seconds = seconds;
    this.superstitious = !!superstitious;  // transfer whatever to boolean
  }
  go(){
    const countdown = this;  // after here, you can't reach this 'this' inside callback
    //'this' won’t have the same value inside a callback.
    //So we have to save the current value of this so we can use it inside the promises.


    const timeoutIds = [];

    return new Promise(function(resolve, reject) {
      for(let i=countdown.seconds; i>=0; i--){
        timeoutIds.push(setTimeout(function(){ // push() is executed before setTimeout's callback executes.
        // so you can do sth to the timeoutIds before finally those callbacks will be invoked.

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

// events
function f(i){ // the event(tick) handler
  if(i>0) console.log(i+ '...tick');
}

//promises
function rs(){
  console.log("Go!");
}

function rj(err){
  console.error(err.message);
}

const c = new Countdown(16,true);
c.on('tick', f);
// work with Emitter.emit();
// allows c to listen for the event 'tick';
// and set the callback(event handler) that will be triggered by event 'tick' to f;

c.go().then(rs).catch(rj);  //set the Promise obj's callbacks
