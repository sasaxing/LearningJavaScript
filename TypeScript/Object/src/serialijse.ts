import * as serialize from 'serialijse'
export class A {
    x: number
    constructor(x: number) {
        this.x = x
    }
    add(y: number) {
        return this.x + y
    }
}
serialize.declarePersistable(A)
const a = new A(1)
const b = serialize.serialize(a)
const c = serialize.deserialize<A>(b)
console.log(c.x)
console.log(c.add(3))