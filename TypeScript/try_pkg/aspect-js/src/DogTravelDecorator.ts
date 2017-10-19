export class DogTravelDecorator {
    static travelDecorator(duration: number) {
        return function decorator(target, name, descriptor) {
            console.log('Hello, this is what decorator starts to do.')// this is executed wherever @travelD is written.
            console.log('not a long trip, only', duration / 24, 'days.')
            /*
            const originalTravel = descriptor.value
            descriptor.value = function (...args) { // this new value replace the original eat function.
                console.log('Dog - get on to the car and set out with my owners.')
                originalTravel(...args)
                console.log('Dog - go back home and play with my bones.')
            }
            */
        }
    }
}