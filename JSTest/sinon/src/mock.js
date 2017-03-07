const sinon = require('sinon')
// mocha src/mock.js
describe('Calculator', () => {
    it('should do add', () => {
        var aCalculator = {
            add: function (a, b) {
                return 2
            }
        }
        const mock = sinon.mock(aCalculator)
        mock.expects('add')
            .withArgs(1, 2)
            .atLeast(2)

        aCalculator.add(1, 2)
        aCalculator.add(1, 2)

        mock.verify()
    });
});
