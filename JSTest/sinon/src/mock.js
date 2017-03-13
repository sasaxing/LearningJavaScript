const sinon = require('sinon')
// mocha src/mock.js
describe('Calculator', () => {
    it('should do add and mul', () => {
        var aCalculator = {
            add: function (a, b) {
                return a + b
            },
            mul: function (a, b) {
                return a * b
            }
        }
        const mock = sinon.mock(aCalculator)
        mock.expects('add')
            .withArgs(1, 2)
            .atLeast(2)
        mock.expects('mul')
            .atMost(1)

        aCalculator.add(1, 2)
        aCalculator.add(1, 2)

        mock.verify()


    });
});
