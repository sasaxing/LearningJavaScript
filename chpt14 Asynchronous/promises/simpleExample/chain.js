let cleanRoom = function(){
  return new Promise(function(resolve, reject) {
    resolve('Cleaned the room.')
  });
};

let removeGarbage = function(message){
  return new Promise(function(resolve, reject) {
    resolve(message + 'Remove garbage.')
  });
};

let winIcecream = function(message){
  return new Promise(function(resolve, reject) {
    resolve(message + 'Win an ice cream.');
  });
};

cleanRoom().then(function(result){ // when the obj returned by cleanRoom() decides to resolve, this function will be executed.
  return removeGarbage(result);  //result = 'Clean the room.'
}).then(function(result){  // when the obj returned by removeGarbage() decides to resolve, this function will be executed.
  return winIcecream(result); // result = 'Clean the room. Remove garbage.'
}).then(function(result){ // when the obj returned by winIcecream() decides to resolve, this function will be executed.
  console.log('Finished: ' + result);      // result = 'Clean the room. Remove garbage. Win an ice cream.'
});

// this is how we can use promise to do the dependency
// you don't need to nest it, you can define each function independently

// you can also use nested functions to implement these processes
// but when the callback becomes much more,
// it can be a nightmire to do so much nested.



// these 3 functions have to be sequentially executed in this way
// but the execution will not block the rest of the code
// the following will be executed before.
console.log("this is the end of the code.");
