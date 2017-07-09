/**
 * static method
 * 
 * You don't need to create an instance to invoke the static method.
 * 
 * a static method can not call a non-static method
 * a static method can not be an abstract method
 * 
 */

console.log('\n==>1.')
abstract class Car {
    name: string
    year: number
    started: boolean

    constructor(name, year, started = false) {
        this.name = name;
        this.year = year;
        this.started = started;
    }
    start() {
        this.started = true;
        console.log(`Car ${this.name} started!`);
    }
    stop() {
        this.started = false;
        console.log(`Car ${this.name} stopped!`);
    }

    numberOfWheals() {
        let numberOfWheals = this.getNumberOfWheals()
        console.log(`Car ${this.name} has 4 wheals!`);
    }

    abstract getNumberOfWheals(): number
}

class Sedan extends Car {
    getNumberOfWheals() {
        return 4
    }
}

const car = new Sedan('audi', 1992)
car.numberOfWheals()