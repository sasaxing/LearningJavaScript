// 1. Immediately Invoke Function Expressions: IIFE
console.log('\n1.');
const message = (function(){
  const secret = "I'm a secret!";
  return `The secret message is ${secret.length} characters long.`;

})();
console.log(message);
