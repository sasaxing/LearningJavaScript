import { tossACoin } from './tossACoin'

let result = tossACoin()
    .then((value) => {
        console.log(typeof (value)) //string
        console.log(':) ', value)
    })
    .catch((reason) => {
        console.log(typeof (reason))
        console.log(':( ', reason)
    })