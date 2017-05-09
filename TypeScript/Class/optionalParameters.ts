class Person {
    name: string
    age: number
    constructor(name, age?) {
        this.name = name
        if (age) {
            console.log('==> age provided.')
        }
        if (!age) {
            console.log('==> age not provided.')
        }
        this.age = age || 1000
    }
    toString() {
        return `${this.name} - ${this.age} years old.`
    }
}

let aPerson = new Person('xxs', 1)
console.log(aPerson.toString())