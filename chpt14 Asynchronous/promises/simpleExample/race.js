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


// using race, you just need one of these functions to finish
// sometimes you may need one of the functions, any one can satisfy.
Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(function(){
  console.log("One of them finished!");
})
