// use nfcall we can convert any method that takes a callback to a promise
function nfcall(f, ...args) {
  return new Promise(function (resolve, reject) {
    f.call(null, ...args, function (err, ...args) {
      if (err) return reject(err);
      resolve(args.length < 2 ? args[0] : args);
    })
  });
}

// we also need setTimeout, it takes a callback.
// ptimeout = promise timeout
function ptimeout(delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, delay);
  });
}

//grun = generator runner
function grun(g) {
  const it = g();
  (function iterate(val) {
    const x = it.next(val);
    if (!x.done) {
      if (x.value instanceof Promise) {
        x.value.then(iterate).catch(err => it.throw(err));
      } else {
        setTimeout(iterate, 0, x.value);
        // why not iterate() directly?
        // because we gain a little efficiency by avoiding synchronous recursion
        // asynchronous recursion allows the JavaScript engine to free resources more quickly
      }
    }
  })();
}


const fs = require('fs');
/*
// callback hell
// we want to wait for some time : 3000ms before combining the contents and writing to 4th file
// but using this way won't manage to wait.

fs.readFile('a.txt', function(err, dataA){ // this function will read contents to dataA
  if(err) console.error(err);
  fs.readFile('b.txt', function(err, dataB){
    if(err) console.error(err);
    fs.readFile('c.txt', function(err, dataC){
      if(err) console.error(err);
      setTimeout(function () {
        fs.writeFile('d.txt', dataA+dataB+dataC, function(err){
          if(err) console.error(err);
        })
      }, 3*1000);
    })
  })
})
*/

/*
// Not using Promise.all
// reading from 3 files are not in parallel
function* theFutureIsNow(){
  const dataA = yield nfcall(fs.readFile, 'a.txt');
  const dataB = yield nfcall(fs.readFile, 'b.txt');
  const dataC = yield nfcall(fs.readFile, 'c.txt');
  yield ptimeout(3*1000);
  yield nfcall(fs.writeFile, 'd.txt', dataA+dataB+dataC);
}
*/

function* theFutureIsNow() {
  let data;
  try {
    data = yield Promise.all([
      nfcall(fs.readFile, 'a.txt'),
      nfcall(fs.readFile, 'b.txt'),
      nfcall(fs.readFile, 'c.txt'),
    ]);
  } catch (err) {
    console.error("Unable to read one or more input files: " + err.message);
    throw err;
  }
  yield ptimeout(3 * 1000); //yield to this promise ptimeout. and the return value is what the promise resolves.

  try {
    yield nfcall(fs.writeFile, 'd.txt', data[0] + data[1] + data[2]);
  } catch (err) {
    console.error("Unable to write output files: " + err.message);
    throw err;
  }

}

grun(theFutureIsNow);
