//https://www.typescriptlang.org/docs/handbook/decorators.html

function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
        console.log('target:', target) //C{}
        console.log('propertyKey:', propertyKey) //greet
        console.log('descriptor:', descriptor)
    }
}

class C {
    //these as a whole means f() is called, and moreover greet is also ______.
    @f()
    greet(name: string) {
        console.log('hi! ', name)
    }
}
