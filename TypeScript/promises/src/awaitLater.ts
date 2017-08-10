import { tossACoin } from './tossACoin'

async function retAPromise(): Promise<any> {
    return new Promise((resolve, reject) => {
        console.log('inside the promise.') // this will be called as soon as retAPromise() is called.
        setTimeout(function () {
            console.log('inside the settimeout.') // !!!!! this is executed after resolve. 
        }, 1000)
        resolve(':)') // this will only be executed when it sees 'await' from caller of retAPromise().
    })
}

async function start() {
    let myPromise = retAPromise() // this will execute the content inside Promise. but it will not resolve itself until 'await'
    console.log('before await.')
    let result = await myPromise
    console.log(result)
    console.log('after await.')
}

start()