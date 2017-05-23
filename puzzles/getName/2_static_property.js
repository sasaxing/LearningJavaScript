function Foo() {
    getName = function () { console.log(1) }
    return this
}
Foo.getName = function () { console.log(2) } // define a static method (aka. class method)
Foo.getName() // 2 [access Foo's static method]
Foo().getName() // 1 [Foo return a 'this', which has a property getName]