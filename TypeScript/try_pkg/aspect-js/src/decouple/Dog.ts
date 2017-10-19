import { Wove } from 'aspect.js'

@Wove()
export class Dog {
    bark(): void {
        console.log('Dog - Decoupled - bark')
    }
}