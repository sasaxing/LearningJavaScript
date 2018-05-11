const sinon = require('sinon')
const fs = require('fs')
const expect = require('chai').expect

describe('fs', () => {
    it('should call the callback of fs.mkdir', function (done) {
        this.timeout(3000)
        const myCallback = sinon.spy()
        const stub = sinon.stub(fs, 'mkdir', function () {
            setTimeout(function () {
                stub.restore()
                sinon.assert.calledOnce(stub)
                sinon.assert.calledOnce(myCallback)
                // stub will not really execute fs.mkdir, so that it's not going to call its callback
                done()
            }, 1000)
        })
        fs.mkdir('aFolder', myCallback) // this instruction will automatically stubbed by stub.
        stub.yield() //makes callback to be called once
    })
})

describe('stub', () => {
    it('can be used to force a method to throw an error', () => {

        let callback = sinon.stub()
        callback.withArgs(1).throws(new Error('Invalid input'))

        try {
            callback(1)
        } catch (e) {
            //do nothing
        }
        sinon.assert.threw(callback)
    })
    it('can change the method behavior such as the return value', () => {
        let callback = sinon.stub()
        callback.withArgs(1).returns(100)

        expect(callback(1)).to.be.equal(100)
    })
})
