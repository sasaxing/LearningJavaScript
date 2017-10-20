const chai = require('chai')
const superChai = require('../src/index')

chai.use(superChai)
const expect = chai.expect

describe.only('Super Chai', () => {
    describe('.number', () => {
        it('should assert presence of a value in array', () => {
            expect([1, 2, 3]).to.have
                .number(2)
                .and.number(1)
        })
        it('should assert non-presence of a value in array', () => {
            expect([1, 2, 3]).not.to.have.number(4)
        })
    })

    describe('.finally', () => {
        it('should assert the last number', () => {
            expect([1, 2, 3, 4, 5]).to.have
                .number(1)
                .and.finally(5)
        })
    })

    describe('.then', () => {
        it('should be able to chanied', () => {
            expect([1, 2, 3, 4, 5, 6, 7, 8]).to.have
                .number(3)
                .afterwards.number(6)
                .afterwards.number(8)
        })
    })
})