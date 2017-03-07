// mocha test/spy.spec.js
let sinon = require('sinon')
let myFunction = require('../src/spy.js').myFunction

describe('myFunction', ()=> {
    it('should call the callback function', ()=> {
        var callback = sinon.spy()
        myFunction(true, callback)
        sinon.assert.calledOnce(callback);
    });
});
