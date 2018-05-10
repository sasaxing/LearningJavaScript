// module.exports === exports
// `exports` is an object that will be exposed to other js files.
// others can get this `exports` object by require('exporter.js').

// 1. default export
function calculate(r) {
  return 4 / 3 * Math.PI * Math.pow(r, 3);
}
module.exports = calculate; // export a function as default export


// 2. add another function to the module.exports object.
module.exports.geometricSum = function (a, x, n) {
  if (x === 1) return a * n;
  return a * (1 - Math.pow(x, n)) / (1 - x);
};

