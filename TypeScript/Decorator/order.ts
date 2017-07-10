function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

class C {
    @f()
    @g()
    method() {
        console.log('==> I am the decoratee!')
    }
}

const c = new C()
c.method()

/**
 * 1. The expressions for each decorator are evaluated top-to-bottom. f(): evaluated is before g(): evaluated
 * 2. The results are then called as functions from bottom-to-top. g(): called is before f(): called
 */