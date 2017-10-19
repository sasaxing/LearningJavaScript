const chai = require('chai')
const superChai = require('../src/index')

chai.use(superChai)
const expect = chai.expect

describe.only('Super Chai', () => {
    describe.only('.experienced', () => {
        it('should assert presence of a value in array', () => {
            expect([1, 2, 3]).to.have.experienced(1)
        })
        it('should assert non-presence of a value in array', () => {
            expect([1, 2, 3]).not.to.have.experienced(4)
        })
    })
})