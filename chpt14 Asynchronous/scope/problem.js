// When we invoke countdown, we’re creating a closure that contains the variable i.
// All of the (anonymous) callbacks that we create in the for loop all have access to i—the same i.

function countdown() {
  //let i; // note we declare let outside of the for loop console.log("Countdown:");
  for(i=5; i>=0; i--) {
    setTimeout(
      function() { console.log(i===0 ? "GO!" : i);} , // i is a free variable of this function()
      (5-i)*1000
    );
  }
}

countdown();

// so when you call function() in the future when time is up,
// the function will look up to its attached environment to read what is the value of 'i'
// in this case, all these functions() will have the same environment -- the environment definde inside countdown(),
// so the i inside is also the same and changed each loop
