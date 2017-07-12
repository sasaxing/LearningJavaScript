import { Wove } from '../aspect.js/lib/index';

@Wove()
export class MyServer {
    port: number
    constructor(port?: number) {
        this.port = port || 3000
    }
    static connect() {
        console.log('I am connecting to...')
    }
    sayHi() {
        console.log('I am your server :) ')
    }
}