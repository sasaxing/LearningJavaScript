/*
module.exports = {   // return an object
  geometricSum(a,x,n){
    if(x === 1) return a*n;
    return a*(1-Math.pow(x,n))/(1-x);
  },
  arithmeticSum(n){
    return (n+1)*n/2;
  }

}
*/

module.exports.geometricSum = function(a,x,n){
  if(x === 1) return a*n;
  return a*(1-Math.pow(x,n))/(1-x);
};

module.exports.arithmeticSum = function(n){
  return (n+1)*n/2;
};
