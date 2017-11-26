// You can use PromiseChain to deal with promises with the dependency
// you don't need to nest them, you can define each function independently

// you can also use nested functions to implement these processes
// but when the callback becomes much more,
// it can be a nightmire to do so much nested.

let cleanRoom = function (input) {
  return new Promise(function (resolve, reject) {
    if (input === 'cleanRoomFail') {
      reject('[cleanRoom] rejects.')
    } else {
      resolve(input + 'Cleaned the room;   ')
    }
  });
};

let removeGarbage = function (message) {
  return new Promise(function (resolve, reject) {
    if (message.indexOf('removeGarbageFail') !== -1) {
      reject('[removeGarbage] rejects.')
    }
    resolve(message + 'Remove garbage;   ')
  });
};

let winIcecream = function (message) {
  return new Promise(function (resolve, reject) {
    if (message.indexOf('winIcecreamFail') !== -1) {
      reject('[winIcecream] rejects.')
    }
    resolve(message + 'Win an ice cream.   ');
  });
};

cleanRoom('winIcecreamFail')
  .then(function (result) { // when the obj returned by cleanRoom() decides to resolve, this function will be executed.
    return removeGarbage(result);  //result = 'Clean the room.'
  })
  .then(function (result) {
    return winIcecream(result)
  })
  .then(function (result) {
    console.log('finally resolve!!' + result)
  })
  .catch(function (reason) {
    console.log(reason)
  })

// experiment1: promise.then(rs, rj) !== promise.then(rs).catch(rj), 
// the latter uses promise chain, handling it when rs somehow also rejects.
cleanRoom('cleanRoomnotFail')
  .then((result) => {
    return new Promise(function (resolve, reject) {
      console.log(result)
      reject('I am not happy') // this reject will be handled by the chained catch.
    })
  })
  .catch((reason) => {
    console.log(reason)
  })
/* - produce error.
cleanRoom('cleanRoomnotFail')
  .then((result) => {
    return new Promise(function (resolve, reject) {
      console.log(result)
      reject('I am not happy') // this won't be handled -> UPRW.
    })
  }, (reason) => {
    console.log(reason)
  })
*/

// experiment2: 
new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject(); // can be handled by chained catch.
  }, 10);
}).catch(() => { });

new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!"); // can not be handled by chained catch.
  }, 10);
}).catch(() => { });