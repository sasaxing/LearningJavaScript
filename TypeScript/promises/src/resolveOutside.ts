// see example: http://lea.verou.me/2016/12/resolve-promises-externally-with-this-one-weird-trick/

import { tossACoin } from './tossACoin'

let fnResolve: Function
function waitfor(): Promise<Object> {
    let promise = new Promise((resolve) => {
        debugger
        fnResolve = resolve
    })
    return promise
}
// in this promise, 
// no other work: such as: let myRand = Math.random()
// no matter res/rej:      if(...){resolve()} else{reject()} 
// it does one thing -> making resolve callback accessible from outside: fnResolve = resolve
// it does neither resolve nor reject.
// it will be someone else's task instead of the promise itself to decide when to fulfill the promise

// advantage:
// 1. Can be used in sinon.Stub's callback function to resolve a promise to pass the test only when 
//    the counter comes to n.
// 2. mainly used to make it possible for a outside component to resolve the promise, so that
//    you don't need to wrap all code inside a promise, which could be ugly.

let aNoneAssertivePromise = waitfor() // get a promise
    .then((value) => {
        debugger
        console.log(typeof (value)) //string
        console.log(':) ', value)
    })
    .catch((reason) => {
        console.log(typeof (reason))
        console.log(':( ', reason)
    })
