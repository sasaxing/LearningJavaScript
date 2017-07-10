function Foo() {
    getName = function () { console.log(1) } // === this.getName = function(){1}
    return this
}
Foo.getName = function () { console.log(2) } // define a static method (aka. class method)

Foo.getName() // 2 [access Foo's static method]
// without defining Foo.getName = function(){...} -> TypeError: Foo.getName is not a function
Foo().getName() // 1 [Foo return a 'this', which has a property getName]

/**
 * 调用公有方法，公有属性，我们必需先实例化对象，
 * 也就是用new操作符实化对象，就可构造函数实例化对象的方法和属性，
 * 并且公有方法是不能调用私有方法和静态方法的
 * 静态方法和静态属性就是我们无需实例化就可以调用
 * 而对象的私有方法和属性,外部是不可以访问的
 */