const doesContain = function (array, subValue) {
    return array.indexOf(subValue) !== -1
}

const superChai = (chai, utils) => {
    let globalThis

    chai.Assertion.addChainableMethod('number', function (value) {
        globalThis = this
        globalThis.assert(
            doesContain(utils.flag(globalThis, 'object'), value),
            `expected [${utils.flag(globalThis, 'object')}] to have number ${value}`,
            `expected [${utils.flag(globalThis, 'object')}]  not to have number ${value}`
        )

        utils.flag(globalThis, 'lastIndex', utils.flag(globalThis, 'object').indexOf(value))
        return new chai.Assertion(utils.flag(globalThis, 'object'))
    })

    chai.Assertion.addMethod('finally', function (value) {
        const finalElement = utils.flag(globalThis, 'object').slice(-1).pop()
        globalThis.assert(
            finalElement === value,
            `expected ${finalElement} to be ${value}`,
            `expected ${finalElement} not to be ${value}`
        )
    })

    chai.Assertion.addProperty('afterwards', function () {
        //console.log(this.__flags.object)
        const previousArray = utils.flag(globalThis, 'object')
        const lastIndex = utils.flag(globalThis, 'lastIndex')
        const restArray = previousArray.slice(lastIndex + 1, previousArray.length)
        utils.flag(globalThis, 'object', restArray)

        return new chai.Assertion(utils.flag(globalThis, 'object'))
    })
}

module.exports = superChai 