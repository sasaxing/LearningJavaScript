import { Wove } from 'aspect.js'

@Wove()
export class Cat {
    meow(): void {
        console.log('Cat - Decoupled - meow')
    }
}