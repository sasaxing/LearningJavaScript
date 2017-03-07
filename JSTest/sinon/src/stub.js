//https://www.sitepoint.com/sinon-tutorial-javascript-testing-mocks-spies-stubs/

var sinon = require('sinon')

console.log(`\n==>1. anonymous stub`);
let stub1 = sinon.stub();

//We can call a spy like a function
stub1('Hello', 'World');
stub1('Hello2', 'World2');

//Now we can get information about the call
console.log(stub1.firstCall.args); //output: ['Hello', 'World']
console.log(stub1.secondCall.args); //output: ['Hello', 'World']

console.log(`\n==>2. spy for an object's method`);
let user = {
    setName: function(name){
        this.name = name
    }
}
let stub2 = sinon.stub(user, 'setName')
user.setName('Darth Vader')
user.setName('Darth Vader')
console.log(user.name);
console.log(stub2.callCount); //1
//Important final step - remove the spy
stub2.restore() //?
