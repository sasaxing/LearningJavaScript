const Sinon = require('sinon')
const fs = require('fs')

describe.only('fs', () => {
    it('should call the callback of fs.mkdir', (done) => {
        const myCallback = Sinon.spy()

        fs.exists('aFolder', myCallback)

        setTimeout(() => {
            Sinon.assert.called(myCallback)
            done()
        }, 2000)

    })
})