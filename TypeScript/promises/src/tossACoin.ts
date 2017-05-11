export function tossACoin(): Promise<string> {
    let myRand = Math.random()
    return new Promise((resolve, reject) => {
        if (myRand > 0.5) {
            resolve('frontSide')
        } else {
            reject('backSide')
        }
    })
}
let anAssertivePromise = tossACoin()
    .then((value) => {
        console.log(typeof (value)) //string
        console.log(':) ', value)
    })
    .catch((reason) => {
        console.log(typeof (reason))
        console.log(':( ', reason)
    })