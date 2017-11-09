console.log('Before import Dog Class.')
import { Dog } from './Dog'
import { Animal } from './Animal'
console.log('After import Dog Class.')


const myDog = new Dog()
console.log(myDog instanceof Animal)