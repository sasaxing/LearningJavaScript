//https://www.sitepoint.com/sinon-tutorial-javascript-testing-mocks-spies-stubs/

var sinon = require('sinon')

describe('stub', function () {
    it('yields to first callback', () => {

        console.log(`\n==>1. yields `);
        let myObj = {
            myFunc: function (condition, callback) {
                if (condition) {
                    callback()
                } else {
                    //do nothing
                }
            }
        }
        let stub = sinon.stub(myObj, 'myFunc')

        let cbSpy = sinon.spy()
        stub(false, cbSpy) // will not make callback to be executed, because it's not really executing myFunc
        stub.yields() //automatically calls the first function passed as a parameter === stub.callback()
        // but why we'd want to use it? 

        stub.restore() //stop stubbing cut
        console.log(`stub.callCount = ${stub.callCount}`)
        console.log(`cbSpy.callCount = ${cbSpy.callCount}`)
        sinon.assert.calledWith(stub, false, cbSpy)
        //console.log(`sinon.assert = ${sinon.assert}`)
        //console.log(sinon.assert)

    })
})