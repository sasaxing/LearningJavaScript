const doesExperienced = function (array, subValue) {
    return array.indexOf(subValue) !== -1
}

module.exports = (chai) => {
    chai.Assertion.addMethod('experienced', function (value) {
        this.assert(
            doesExperienced(this._obj, value),
            `expected #{this} to have experienced ${value}`,
            `expected #{this} not to have experienced ${value}`
        )
    })
    chai.Assertion.addChainableMethod(chai.Assertion.prototype, 'foo', function (str) {
        var obj = chai.Assertion.flag(this, 'object');
        new chai.Assertion(obj).to.be.equal(str);
    });
}