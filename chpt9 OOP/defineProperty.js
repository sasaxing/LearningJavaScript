const obj = {
    a: 1
}

console.log(obj)

Object.defineProperty(obj, 'b', { //'b' is the obj's new property.
    /**
     * // The value associated with the property. 
     * Can be any valid JavaScript value (number, object, function, etc).
     * Defaults to undefined.
     */
    value: 2,

    /**
     * true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.
     * Defaults to false.
     * true 表示你可以在之后修改这个prop的descriptor
     */
    configurable: true,

    /**
     * true if and only if this property shows up during enumeration of the properties on the corresponding object.
     * Defaults to false.
     * true 表示用Object.keys(obj) 或者 for...in 可以遍历到这个new prop。
     */
    enumerable: true,

    /**
     * true if and only if the value associated with the property may be changed with an assignment operator.
     * Defaults to false. 
     * true 表示能用 = 修改它的值
     */
    writable: false // when it's true, you can set this prop a new value with assignment operator = .
})

console.log(obj)

obj.b = 22
console.log(obj) // still {a:1, b:2}

Object.defineProperty(obj, 'b', { writable: true }) // you can do this because 'b'.descriptor.configurable = true
obj.b = 22
console.log(obj) // still {a:1, b:22}

console.log(Object.keys(obj)) // [ 'a', 'b' ] if enumerable == true;            ['a'] if false.
for (let prop in obj) {
    console.log(prop, '=', obj[prop])
}

delete obj.b // you can delete it because configurable == true, if it's false, this line will not work(without throwing error.)
console.log(obj.b) // if configurable == true {undefined} ; else 2.