import { tossACoin } from './tossACoin'

async function decide() {
    try {
        let value = await tossACoin()
        console.log(':) Toss a coin resolved: ', value)  // fulfillment handler simply after await.
    } catch (err) {
        console.log(':( Toss a coin rejected: ', err) //error handler
    }
}

decide()