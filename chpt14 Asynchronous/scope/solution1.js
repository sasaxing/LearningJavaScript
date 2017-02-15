// Moving the declaration of i into the for loop.
// Then each (anonymous) callback that we create in the for loop will have access to different i.

function countdown() {
  for(let i=5; i>=0; i--) {
    setTimeout(
      function() { console.log(i===0 ? "GO!" : i);} , // i is a free variable of this function()
      (5-i)*1000
    );
  }
}

countdown();

// so when you call function() in the future when time is up,
// the function will look up to its attached environment to read what is the value of 'i'
// in this case, each of the function(




/*
function countdown() {
  var i; // note we declare let outside of the for loop console.log("Countdown:");
  for(i=5; i>=0; i--) {
    setTimeout(
      function() { console.log(i===0 ? "GO!" : i);} , // i is a free variable of this function()
      (5-i)*1000
    );
  }
}
countdown();
*/


/*
function countdown() {
  for(var i=5; i>=0; i--) {
    setTimeout(
      function() { console.log(i===0 ? "GO!" : i);} , // i is a free variable of this function()
      (5-i)*1000
    );
  }
}
countdown();

*/
