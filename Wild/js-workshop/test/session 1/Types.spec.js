const expect = require('chai').expect

// TODO: fill the emptystring in the Typecheck with the correct type name.

describe('The type system', () => {

  it('interprets 1 as type', () => {
    const typeCheck = typeof 1 === 'number'
    expect(typeCheck).to.be.ok
  })

  it('interprets 1.3 as type', () => {
    const typeCheck = typeof 1.3 === 'number'
    expect(typeCheck).to.be.ok
  })

  it('interprets "some text" as', () => {
    const value = 'some text'
    const typeCheck = typeof value === 'string'

    expect(typeCheck).to.be.ok
  })

  it('interprets [1, 2, 3] as type', () => {
    const value = [1, 2, 3]
    const typeCheck = typeof value === 'object'

    expect(typeCheck).to.be.ok
  })

  it('interprets {key: "value"} as type', () => {
    const value = { key: 'value' }
    const typeCheck = typeof value === 'object'

    expect(typeCheck).to.be.ok
  })

  it('interprets lambdas as type', () => {
    const value = () => {
    }
    const typeCheck = typeof value === 'function'

    expect(typeCheck).to.be.ok
  })

  it('interprets class as type', () => {
    const Basic = require('../../src/basic-class')
    const typeCheck = typeof Basic === 'function'

    expect(typeCheck).to.be.ok
  })

  it('interprets instances of a class as type', () => {
    const Basic = require('../../src/basic-class')
    const instance = new Basic()
    const typeCheck = typeof instance === 'object'

    expect(typeCheck).to.be.ok
  })
})
