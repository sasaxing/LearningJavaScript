const Sinon = require('sinon')
const fs = require('fs')
const expect = require('chai').expect

describe.only('fs', () => {
    it('should call the callback of fs.mkdir', function (done) {
        this.timeout(3000)
        const myCallback = Sinon.spy()

        fs.exists('aFolder', myCallback)

        setTimeout(() => {
            //must assert after it finishes calling fs.exists's callback
            Sinon.assert.called(myCallback)
            done()
        }, 1000)

    })
})