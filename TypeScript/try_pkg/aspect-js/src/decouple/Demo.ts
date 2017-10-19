import { Dog } from './Dog'
import { DogAspect } from './DogAspect'
export class MyAspect extends DogAspect { } // connects Dog and DogAspect in the same file.
const myDog = new Dog()
myDog.bark()