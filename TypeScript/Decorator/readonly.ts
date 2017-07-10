class Car {
    color: string
    numberOfWheels: number

    constructor(color: string) {
        this.color = color || 'silver'
        this.numberOfWheels = 4
    }

    @readonly()
    getNumberOfWheels(): number {
        return this.numberOfWheels
    }

}

function readonly() {
    return function decorator(target, name, descriptor) {
        descriptor.writable = false;
        return descriptor;
    }
}

const car = new Car('')
console.log('==> at first car.color is: ', car.color)
console.log('==> at first car.numberOfWheels is: ', car.numberOfWheels)
console.log('==> at first car.getNumberOfWheels returns: ', car.getNumberOfWheels())

car.getNumberOfWheels = () => 400
console.log('==> set get#Wheels to another func that returns 400, if no @readonly 400, with @readonly unchanged:', car.getNumberOfWheels())
