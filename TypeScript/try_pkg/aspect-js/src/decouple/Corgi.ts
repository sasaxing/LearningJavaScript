import { Dog } from './Dog'
import { Wove } from 'aspect.js'

@Wove()
export class Corgi extends Dog {
    bark(): void {
        console.log('Corgi - Decoupled - bark')
    }
}