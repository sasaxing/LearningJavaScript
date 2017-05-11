import { tossACoin } from './tossACoin'

function retAPromise(): Promise<Promise<any>> {
    return new Promise((resolve, reject) => {
        resolve(tossACoin())
    })
}

retAPromise()
    .then((value) => { //value is Promise<any>
        console.log(typeof (value)) //string? 
        // [because when you returns a promise in a promise, 
        // the resolved value is always the inner-most promise's result value
        // node-js will always wait until all the promises resolved,
        // and then returns the eventual resolved primitives.]
        // so the typeof(value) is a string, which is the return type of the inner-most promise(tossACoin)
        console.log(value) //frontSide
    })
    .catch((reason) => {
        console.log(typeof (reason))
        console.log(reason) //backSide
    })