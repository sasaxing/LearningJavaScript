/*
var count = 0;
function counter(){
  count = count + 1;
  return count;
}
console.log(counter()); //1
console.log(counter()); //2
console.log(counter()); //3
// problem: we have to use a global variable for count, to make each ++ recorded.
// which can be problematic if you a are developing code with a team,
// because people often use the same names, which end up clashing.
*/


function makeCounter(){
  var count = 0;
  function counter(){
    count = count+1;
    return count;
  }
  return counter;
}
var doCount = makeCounter(); // doCount is the inner counter() function + its environment.
// it as a whole is a closure so that we can use its environment variable count.
// and count variable can only be accessed in this way(using counter()), no any other ways.
console.log(doCount());
console.log(doCount());
console.log(doCount());


function makeCounter1(){
  var count = 0;
  var obj = {
    increment: function(){
      count++;
      return count;
    }
  }
  return obj;
}
var doCount1= makeCounter1();
console.log(doCount1.increment());
console.log(doCount1.increment());
console.log(doCount1.increment());
