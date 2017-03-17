//https://www.sitepoint.com/sinon-tutorial-javascript-testing-mocks-spies-stubs/
let sinon = require('sinon')

console.log(`\n==>1. anonymous spy`);
let spy1 = sinon.spy();
let stub1 = sinon.stub();
let mock1 = sinon.mock();


//We can call a spy like a function
spy1('Hello', 'World');
spy1('Hello2', 'World2');
//console.log(`spy1.restore = ${spy1.restore}`) //undefined

//Now we can get information about the call
console.log(spy1.firstCall.args); //output: ['Hello', 'World']
console.log(spy1.secondCall.args); //output: ['Hello', 'World']

console.log(`\n==>2. spy for an object's method`);
let user = {
    setName: function (name) {
        this.name = name
    }
}
let spy2 = sinon.spy(user, 'setName')
user.setName('Darth Vader')
console.log(user.name);
console.log(spy2.callCount); //1
//Important final step - restore the original function: So that calling to the function after restore will not be counted
spy2.restore() // stop spying user.setName
user.setName('Amy') // call again
console.log(`spy2.callCount = ${spy2.callCount}`) // still 1

console.log(`\n==>3. spy for a callback`);
function myFunction(condition, callback) {
    if (condition) {
        callback();
    }
}

describe('myFunction', () => {
    it('should call the callback function', () => {
        var callback = sinon.spy()
        myFunction(true, callback)
        sinon.assert.calledOnce(callback);
    });
});
