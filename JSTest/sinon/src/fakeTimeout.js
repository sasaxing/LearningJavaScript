const sinon = require('sinon');
const clock = sinon.useFakeTimers();

console.log('Do something 1.')
setTimeout(() => {
    console.log('Do something 2.')
}, 3000);

clock.tick(3000); //fast-forward the time. 3s passed in no time:) save time for testing.

clock.restore();