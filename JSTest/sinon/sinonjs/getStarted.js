//http://sinonjs.org
const Sinon = require('sinon')
const expect = require('chai').expect

function once(fn) {
    var returnValue, called = false
    return function () {
        if (!called) {
            called = true
            returnValue = fn.apply(this, arguments) //bind fn's `this` to current this.
        }
        return returnValue
    }
}

describe('.once', function () {
    /* spy */
    it('calls the original function', function () {
        var callback = Sinon.spy()

        once(callback)()

        //expect(callback.called).to.be.true
        Sinon.assert.called(callback)
    })

    it('calls the original function only once', function () {
        var callback = Sinon.spy()
        var proxy = once(callback)

        proxy()
        proxy()
        proxy()

        //expect(callback.calledOnce).to.be.true
        Sinon.assert.calledOnce(callback)
    })

    it('calls original function with right "this" and args', function () {
        var callback = Sinon.spy()
        var proxy = once(callback)
        var obj = {}

        proxy.call(obj, 1, 2, 3) //bind proxy's `this` to obj. So that the cb will be bound to obj when fn.apply(this, args)

        //expect(callback.calledOn(obj)).to.be.true
        Sinon.assert.calledOn(callback, obj)
        Sinon.assert.calledWith(callback, 1, 2, 3)
    })


    /* stub */
    it('returns the return valeu from the original function', function () {
        var callback = Sinon.stub().returns(42)
        var proxy = once(callback)

        Sinon.assert.match(proxy(), 42)
        // Sinon.match(actual, expected)
        // string: actual contains expected
        // number: actual === expected
        // object: actual contains expected(same Key-Value pair)
    })

})

