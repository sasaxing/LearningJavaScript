import { tossACoin } from './tossACoin'

async function retAPromise(): Promise<any> {
    return new Promise((resolve, reject) => {
        console.log('inside the promise.')
        resolve(':)')
    })
}

async function start() {
    let value = await retAPromise()
    console.log(typeof (value)) //string
    console.log(value) //:)
}
// [because when you returns a promise in a promise, 
// the resolved value is always the inner-most promise's result value
// node-js will always WAIT until all the promises resolved,
// and then returns the eventual resolved primitives.]
// so the typeof(value) is a string, which is the return type of the inner-most promise(tossACoin)

start()