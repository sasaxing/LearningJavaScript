class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)
    greet() {
        console.log('[original greet]')
        return "Hello, " + this.greeting;
    }
}
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('[decorator greet]')
        descriptor.enumerable = value;
        // it doesn't overwrite descriptor.value here, so the original greet will still be invoked.
    };
}

const greeter = new Greeter('world')
//console.log(greeter)
debugger
greeter.greet()