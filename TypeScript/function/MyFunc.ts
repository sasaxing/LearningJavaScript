class Dog {
    name: string
    constructor(name: string) {
        this.name = name
    }
    @eatDecorator()
    eat(food: string): string {
        console.log(this.name + ' is eating ' + food)
        return 'Full'
    }
}

function eatDecorator() {
    return function decorator(target, name, descriptor) {
        console.log('Hello, this is what decorator starts to do.')
        const originalEat = descriptor.value
        descriptor.value = function (...args) { // this new value replace the original eat function.
            console.log('This is a fake eat function.')
        }
    }
}

const myDog = new Dog('Qiu')
myDog.eat('a bone')