/**
 * static method
 * 
 * You don't need to create an instance to invoke the static method.
 * 
 * abstract keyword can only be used in ts.
 * 
 */

console.log('\n==>1.');
class Car {
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

    static numberOfWheals() {
        let numberOfWheals = 4
        console.log(`Car ${this.name} has 4 wheals!`);
    }
}

let audi = new Car('audi', 1992)
audi.start()
audi.stop()

Car.numberOfWheals()