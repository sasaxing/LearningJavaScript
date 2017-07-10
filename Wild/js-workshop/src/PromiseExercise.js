class PromiseExercise {
  static add (a, b) {
    // return a promise
    return new Promise(function(resolve, reject) {
      if(typeof a !== 'number' || typeof b !== 'number')
        reject();
      resolve(a+b);
    });
  }

  static inc10 (a) {
    return new Promise(function(resolve, reject) {
      resolve(a+10);
    });
  }

  static multiply (a, b) {
    return new Promise(function(resolve, reject) {
      if(b === undefined) b=2;
      resolve(a*b);
    });
  }
}

module.exports = PromiseExercise
