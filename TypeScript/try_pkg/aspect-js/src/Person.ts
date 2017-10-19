import { Dog } from './Dog'

export class Person {
    name: string
    dog: Dog

    constructor(name) {
        this.name = name
    }

    keepAPet(petName) {
        this.dog = new Dog(petName)
    }

    travel(dest: string) {
        console.log('Person - take my dog to travel')
        this.dog.travel(dest)
    }
}