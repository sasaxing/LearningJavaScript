const Sinon = require('sinon')
const fs = require('fs')
const expect = require('chai').expect

describe('fs', () => {
    it('should call the callback of fs.mkdir', function (done) {
        this.timeout(3000)
        const myCallback = Sinon.spy()
        const stub = Sinon.stub(fs, 'mkdir', function () {
            setTimeout(function () {
                stub.restore()
                Sinon.assert.calledOnce(stub)
                Sinon.assert.calledOnce(myCallback)
                // stub will not really execute fs.mkdir, so that it's not going to call its callback
                done()
            }, 1000)
        })
        fs.mkdir('aFolder', myCallback) // this instruction will automatically stubbed by stub.
        stub.yield() //makes callback to be called once
    })
})
