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

Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function(){
  console.log("All finished!");
})
