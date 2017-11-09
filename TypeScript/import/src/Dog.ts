console.log('Before Dog Definition.')
import { Animal } from './Animal'

export class Dog extends Animal {
    speak() {
        console.log('bark')
    }
}