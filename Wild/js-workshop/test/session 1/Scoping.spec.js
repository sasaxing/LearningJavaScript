'use strict'

const expect = require('chai').expect
const OuterScope = require('../../src/Scope')

describe('The scoping rules', () => {

  it('which values are accessible from the outer scope', () => { // can't inward
    const outerScope = new OuterScope()

    // TODO: uncomment the correct expectations
    expect(outerScope.getOuterScope0()).to.equal(0)
    expect(outerScope.getOuterScope1()).to.equal(1)
    expect(outerScope.getOuterScope2()).to.equal(2)
    expect(outerScope.getOuterScope3()).to.equal(3)

    // expect(outerScope.getInnerScope0()).to.be.a('function')  // this.getInnerScope0 = () => InnerScope0, InnerScope not defined.
    // expect(outerScope.getInnerScope1()).to.equal(1)   // InnerScope1 is inside InnerScope() scope, not accessible outside.
    // expect(outerScope.getInnerScope2()).to.equal(2)   //ditto
    // expect(outerScope.getInnerScope3()).to.be.a('function')  //ditto

  })

  it('which values are accessible from the inner scope', () => {  // can outward
    const outerScope = new OuterScope()
    const innerScope = outerScope.getInnerScope()

    // TODO: uncomment the correct expectations
    expect(innerScope.getOuterScope0()).to.equal(0)
    expect(innerScope.getOuterScope1()).to.equal(1)
    expect(innerScope.getOuterScope2()).to.equal(2)
    expect(innerScope.getOuterScope3()).to.equal(3)

    expect(innerScope.getInnerScope0()).to.be.a('function')
    expect(innerScope.getInnerScope1()).to.equal(1)
    expect(innerScope.getInnerScope2()).to.equal(2)
    expect(innerScope.getInnerScope3()).to.be.a('function')

  })

  it('is class hoisted?', () => {  // NO!!
    // TODO: uncomment the correct expectations
    // expect(Klass).to.be.a('function')

    class Klass {
    }
    expect(Klass).to.be.a('function')
  })

  it('is const hoisted?', () => {  // NO !!
    // TODO: uncomment the correct expectations
    // expect(constant).to.equal(0)

    const constant = 0

    expect(constant).to.equal(0)
  })

  it('is function hoisted?', () => {  //YES !!
    // TODO: uncomment the correct expectations
    expect(func).to.be.a('function')

    function func () {
    }
    expect(func).to.be.a('function')
  })

  it('is var hoisted?', () => {  // Declaration is hoisted, but assignment is not.
    // TODO: uncomment the correct expectations
    // expect(variable).to.equal(1)

    var variable = 1

    expect(variable).to.equal(1)
  })
})
