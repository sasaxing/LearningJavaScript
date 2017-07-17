async function promiseToCleanTheRoom() {
    let isClean = false
    console.log('start cleaning...')
    if (isClean) {
        return 'clean'
    } else {
        throw 'not clean'
    }
}

promiseToCleanTheRoom()
    .then(function (fromResolve) {
        console.log("The room is " + fromResolve)
    })
    .catch(function (fromReject) {
        console.log("The room is " + fromReject)
    })
console.log('Program finished.')

/**
 * output:
 * 
 * start cleaning...
 * Program finished.
 * The room is not clean
 */

/**
 * http://www.sohamkamani.com/blog/2016/03/14/wrapping-your-head-around-async-programming/
 * 
 * 所以并不是 promise 身为asynchronous code就一定要给后面的让路，
 * 而是当promise code不用main thread执行，而用I/O或者Network时，后面的code可以把main thread拿走先用。
 */