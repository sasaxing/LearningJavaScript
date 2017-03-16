//https://www.sitepoint.com/sinon-tutorial-javascript-testing-mocks-spies-stubs/

const Sinon = require('sinon')
const fs = require('fs')

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
        let stub = Sinon.stub(myObj, 'myFunc')

        let cbSpy = Sinon.spy()
        stub(false, cbSpy) // will not make callback to be executed, because it's not really executing myFunc
        stub.yields() //automatically calls the first function passed as a parameter === stub.callback()
        // but why we'd want to use it? 

        stub.restore() //stop stubbing cut
        console.log(`stub.callCount = ${stub.callCount}`)
        console.log(`cbSpy.callCount = ${cbSpy.callCount}`)
        Sinon.assert.calledWith(stub, false, cbSpy)
        console.log(`sinon.assert = ${Sinon.assert}`)
        console.log(Sinon.assert)

    })
})


describe.only('fs', () => {
    it('should call the callback of fs.mkdir', () => {
        const cb = Sinon.spy()
        const spy1 = Sinon.spy(fs, 'mkdir')

        spy1('a', cb) //expect: cb will be called as callback of fs.mkdir

        spy1.restore()

        Sinon.assert.calledWith(spy1, 'a', cb)
        Sinon.assert.calledOnce(cb)  // but never called
        console.log(cb.args)  // empty array.
    })
})
