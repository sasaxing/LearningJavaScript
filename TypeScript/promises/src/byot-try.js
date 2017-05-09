let fnResolve;
function waitfor() {
    let promise = new Promise((resolve) => {
        debugger;//1
        fnResolve = resolve;
    });
    return promise;
}
// in this promise,
// no other work: such as: let myRand = Math.random()
// no matter res/rej:      if(...){resolve()} else{reject()}
// it does one thing -> making resolve callback accessible from outside: fnResolve = resolve
// it does neither resolve nor reject.
// it will be someone else's task instead of the promise itself to decide when to fulfill the promise
let aNoneAssertivePromise = waitfor() // get a promise
    .then((value) => {
    debugger;
    console.log(typeof (value)); //string
    console.log(':) ', value);
})
    .catch((reason) => {
    console.log(typeof (reason));
    console.log(':( ', reason);
});
