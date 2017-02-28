// A class may only have one constructor

'use strict'
class Car{
    constructor(name, year, started=false){
        this.name = name;
        this.year = year;
        this.started = started;
    }
    start(){
        this.started = true;
        console.log(`Car ${this.name} started!`);
    }
    stop(){
        this.started = false;
        console.log(`Car ${this.name} stopped!`);
    }
}


let car1 = new Car('Benz', 1960, true)
car1.start()//Car Benz started!


let car2 = new Car()
car2.start() //Car undefined started!
