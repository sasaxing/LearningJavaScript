const doesContain = function (array, subValue) {
    return array.indexOf(subValue) !== -1
}

const superChai = (chai, utils) => {
    chai.Assertion.addMethod('number', function (value) {
        this.assert(
            doesContain(utils.flag(this, 'object'), value),
            `expected [${utils.flag(this, 'object')}] to have number ${value}`,
            `expected [${utils.flag(this, 'object')}]  not to have number ${value}`
        )
        utils.flag(this, 'lastIndex', 100)
        return new chai.Assertion(utils.flag(this, 'object'))
    })

    chai.Assertion.addMethod('finally', function (value) {
        const finalElement = utils.flag(this, 'object').slice(-1).pop()
        this.assert(
            finalElement === value,
            `expected ${finalElement} to be ${value}`,
            `expected ${finalElement} not to be ${value}`
        )
    })

    chai.Assertion.addMethod('afterwards', function (value) {
        const restArray = utils.flag(this, 'object')
        console.log(utils.flag(this, 'lastIndex'))
        this.assert(
            finalElement === value,
            `expected ${finalElement} to be ${value}`,
            `expected ${finalElement} not to be ${value}`
        )
    })
}

module.exports = superChai 