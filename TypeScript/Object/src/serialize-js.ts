import * as serialize from 'serialize-javascript'
export class A {
    x: number
    constructor(x: number) {
        this.x = x
    }
    add(y: number) {
        this.x = +y
    }
}
function deserialize(serializedJavascript) {
    return eval('(' + serializedJavascript + ')')
}
const a = new A(1) //doesn't work for a instance of Class, only work for an object decleared directly(in the same way as JS/OOP/serialzation_deserialization.js.
const b = serialize(a)
const c = deserialize(b)
console.log(c)
c.add(3)