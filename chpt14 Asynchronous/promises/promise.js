/*
// this works as well:
let seconds = 3;

new Promise(function(resolve, reject) {
  for(let i=seconds; i>=0; i--){
    setTimeout(function(){
      if(i>0) console.log(i+ '...');
      else resolve(console.log("GO!"));

    }, (seconds-i)*1000);
  }
});
*/

function countdown(seconds){
  return new Promise(function(resolve, reject) {

    for(let i=seconds; i>=0; i--){
      setTimeout(function(){
        if(i === 13) return reject(new Error("Definitely NOT counting that!")); // invoke this callback (reject(err))
        if(i>0) console.log(i+ '...');
        else resolve(console.log("GO!"));  // invoke this callback (resolve())
      }, (seconds-i)*1000);
    }

  });
}

// take advantage of Promise
// set its resolve and reject functions.

// Approach 1:
const rs = function(){  // ?resolve function?
  console.log("countdown completed successfully.");
};

const rj = function(err){  // ?reject function?
  console.log("countdown experienced an error: " + err.message);
}

countdown(15).then(rs, rj);

/*
//Approach 2:
const p = countdown(4);
p.then(rs);
p.catch(rj);
*/
