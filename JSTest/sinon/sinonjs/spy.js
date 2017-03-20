//mocha spy.js

const Sinon = require('sinon')
const fs = require('fs')
const expect = require('chai').expect

describe('fs', () => {
    it('should call the callback of fs.mkdir', function (done) {
        this.timeout(3000)
        const myCallback = Sinon.spy()

        fs.exists('aFolder', myCallback)

        setTimeout(() => {
            //must assert after it finishes calling fs.exists's callback
            Sinon.assert.called(myCallback)
            done()
        }, 1000)

    })

})

describe('spy', () => {
    it('can spy on myFunc', () => {
        let myFunc = function () {
            console.log('this is my func.')
        }
        const spy = Sinon.spy(myFunc)
        myFunc() //spy.callCount stays
        spy() //spy.callCount++
        //////////////////////////////////
        Sinon.assert.calledOnce(spy)  /////????????????? -- calledTwice
        //////////////////////////////////
    })
    it('can spy on the method of my Obj', () => {
        let myObj = {
            name: 'xxs',
            myMethod: function (param1, param2) {
                console.log(`this is my method, with param: ${param1} and ${param2}`)
            }
        }
        const spy = Sinon.spy(myObj, 'myMethod')
        myObj.myMethod('p1', 'p2')
        myObj.myMethod('p11', 'p22')
        spy('p3', 'p4')
        spy.restore()
        Sinon.assert.calledThrice(spy)
        Sinon.assert.calledWith(spy, 'p1', 'p2')
        expect(spy.getCall(1).args).to.deep.equal(['p11', 'p22'])

    })
    it('can detect it when myFunc threw error', () => {

        const myObj = {
            myMethod: function () {
                throw new Error('I just throw an error')
            }
        }
        const spy = Sinon.spy(myObj, 'myMethod')
        try {
            myObj.myMethod()
        } catch (e) {

        }
        expect(spy.threw()).to.be.true

    })
})