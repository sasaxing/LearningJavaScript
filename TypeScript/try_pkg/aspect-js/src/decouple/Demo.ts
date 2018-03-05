import { Dog } from './Dog'
import { Cat } from './Cat'
import { Corgi } from './Corgi';
require('./Aspects') // this will make Aspect run at compile time -- help to finish the meave process.
//import {DogAspect} from './Aspect' does not work because this does not trigger Aspect to be executed.
//but in order to insert advice to Dog, we must get DogAspect run in compile time.

const myDog = new Dog()
myDog.bark()

const myCat = new Cat()
myCat.meow()

const myCorgi = new Corgi()
myCorgi.bark() // get the beforeAdvice of Dog.bark() only if Corgi does not implement its own bark()