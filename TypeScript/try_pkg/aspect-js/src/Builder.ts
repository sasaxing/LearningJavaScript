import { Dog } from './Dog'
import { Wove } from 'aspect.js'

@Wove()
export class Builder {
    createADog() {
        const myDog = new Dog('qiuqiu')
        myDog.speak()
    }
}