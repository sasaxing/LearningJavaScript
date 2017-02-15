
console.log('\n1.');

for(let i=5; i>=0; i--){
  // setTimeout(function,time);
  console.log(i);  // this will be executed in each loop.
  setTimeout(
    function(){ //as a argument, this function will not be invoked in each loop.
      console.log(i===0 ? "go!" : i); // it will be invoked in the future after all the others finished.
    },                      // until the END of this program.
    (5-i)*1000
  );
}
