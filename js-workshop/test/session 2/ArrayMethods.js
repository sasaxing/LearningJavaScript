'use strict'
const expect = require('chai').expect
const arrayExercise = require('../../src/ArrayExercise')

describe('Array has some nice helpers', () => {

  it('can easily create new arrays on conditions', () => {
    const result = arrayExercise.getAllEvenNumbers([1, 2, 3, 4, 5, 6])

    expect(result).to.deep.equal([2, 4, 6])
  })

  it('can easily search values in arrays', () => {
    const result = arrayExercise.contains([1, 2, 3, 4, 5, 6], 3)

    expect(result).to.be.ok
  })

  it('can easily mutate each element', () => {
    const result = arrayExercise.doubleEachValue([1, 2, 3])

    expect(result).to.deep.equal([2, 4, 6])
  })

  it('can easily sort elements', () => {
    const names = ['Emely', 'Enda', 'William']
    const result = arrayExercise.sortByLastChar(names)

    expect(result).to.deep.equal(['Enda', 'William', 'Emely'])
  })
})
