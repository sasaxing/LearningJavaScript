function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

@classDecorator
class Greeter {
    property = "property";
    hello: string;
    constructor(m: string) {
        console.log('[original constructor]')
        this.hello = m;
    }

    greet() {
        console.log('[greet]')
    }
}

const greeter = new Greeter('world')
console.log(greeter)
greeter.greet()