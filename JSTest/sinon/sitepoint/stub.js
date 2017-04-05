//https://www.sitepoint.com/sinon-tutorial-javascript-testing-mocks-spies-stubs/

const Sinon = require('sinon')
const fs = require('fs')
const expect = require('chai').expect

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
        const myCallback = Sinon.spy()
        const errObj = new Error('blah')
        const anotherErrorObj = new Error('something else')
        const mkdirStub = Sinon.stub(fs, 'mkdir').throws(errObj)

        try {
            fs.mkdir('aFolder', myCallback) //expect: myCallback will be called as callback of fs.mkdir
        } catch (err) {
            mkdirStub.yield(err)
        }

        mkdirStub.restore()

        Sinon.assert.threw(mkdirStub)
        expect(myCallback.args[0][0].message).to.equal(new Error('blah').message)

        debugger
        Sinon.assert.calledWith(myCallback, anotherErrorObj) // should have been failed!!: Error Object is not deeply comparable. They are all the same
        expect(myCallback.args[0][0]).to.deep.equal(anotherErrorObj)// should have been failed!!
        expect(myCallback.args[0][0]).to.deep.equal(new TypeError())// should have been failed!!

    })
})