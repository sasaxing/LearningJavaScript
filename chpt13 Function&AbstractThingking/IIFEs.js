
console.log('\n1.');

var i;
for(i=5; i>=0; i--){
  // setTimeout(function,time);
  console.log(i);  // this will be executed in each loop.
  setTimeout(
    function(){ //as a argument, this function will not be invoked in each loop.
      console.log(i===0 ? "go!" : i); // it will be invoked in the future after all the others finished.
    },                      // until the END of this program.
    (5-i)*1000
  );
}

console.log('\n2.');
function loopBody(ii){
  setTimeout(
    function(){
      console.log(ii===0 ? "go!" : ii);
    },
    (5-ii)*1000
  );
}

var ii ;
for(ii=5; ii>=0 ; ii--){
  console.log("do sth");  // this will be executed before ==> Code ENDs!
  loopBody(ii);           // this will also be executed before that, but the setTimeout's function
                              // will always be postponed after all other things finished.
}  //we get 7 different scope (1 for outer scope, 6 for all loops), each of which has a different ii.


console.log('\n3.');
var iii;
for(iii=5; iii>=0; iii--){
  (function(iii) {
    setTimeout(
      function(){
        console.log(iii===0 ? "go!" : iii);
      },
      (5-iii)*1000
    );
  })(iii);
}


// 4 is the same as 3
// we use let in 4, so that JavaScript knows that
// at each step of the loop, there is to be a new, independent copy of iiii variable.
// so when the functions passed to setTimeout execute in the future,
// they are each receiving their value from a variable in its own scope 
console.log('\n4.');
for(let iiii=5; iiii>=0; iiii--){
  setTimeout(function(){
    console.log(iiii===0 ? "go!" : iiii);
  }, (5-iiii)*1000);
}

console.log("==> Code ENDs!");
