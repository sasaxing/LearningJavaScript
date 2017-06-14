import { tossACoin } from './tossACoin'

function retAPString(name: string): string {
    return ':) Hallo! ' + name
}

async function retAPromise(name: string): Promise<string> {
    return ':) Hallo! ' + name
}

async function startString() {
    console.log('\n==> startString:')
    let value = await Promise.all([retAPString('xxs'), retAPString('amy'), retAPString('bill')])
    console.log(typeof (value)) //string
    console.log(Object.prototype.toString.call(value)) //[object Array]
    console.log(value) //:)
}

async function startPromise() {
    console.log('\n==> startPromise:')
    let value = await Promise.all([retAPromise('xxs'), retAPromise('amy'), retAPromise('bill')])
    console.log(typeof (value)) //string
    console.log(Object.prototype.toString.call(value)) //[object Array]
    console.log(value) //:)
}

startString().then(startPromise)

/**
 * Promise.all(_______): inside should be a list of promises.
 * startPromise() did this , but startString did not.
 * 
 * however they behave the same............
 */