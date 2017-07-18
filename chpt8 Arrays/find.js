/**
 * Array.prototype.find(callback)
 * 
 * find the first element in the array that makes the callback returns true.
 */
var inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 },
    { name: 'bananas', quantity: 5 },
];

const result = inventory.find((element) => element.name === 'bananas')
console.log(result)