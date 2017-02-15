'use strict'
const expect = require('chai').expect
const Greeter = require('../../src/Greeter')

const expectedName = 'Ted'

this.name = 'amy'

describe('The basic context rules', () => {
  it('has context in functions', () => {
    function greetingFunc() {
      return this.name
    }

    const greeter = new Greeter(expectedName, greetingFunc)
    // TODO: replace the empty string with the correct value
    const nameMatch = 'Ted' === greeter.greet()

    expect(nameMatch).to.be.true
  })

  this.name='carl'

  it('has context in lambdas', () => {
    this.name = 'Darly'
    const greetingLambda = () => {
      return this.name
    }
    const greeter = new Greeter(expectedName, greetingLambda)
    // TODO: replace the empty string with the correct value
    const nameMatch = 'Darly' === greeter.greet()

    expect(nameMatch).to.be.true
  })

  it('can change the context', () => {
    // TODO: change the context of greetingFunc so that it returns Bill and not Ted
    const boundName = 'Bill'
    //or I can shadow the expectedName here in this inner scope
    // const expectedName = boundName

    function greetingFunc() {
      return this.name
    }

    //const boundNameGreetingFunc = greetingFunc.bind(bill)

    const greeter = new Greeter(expectedName, greetingFunc.bind({name: boundName}))
    const nameMatch = boundName === greeter.greet()

    expect(nameMatch).to.be.true
  })
})
