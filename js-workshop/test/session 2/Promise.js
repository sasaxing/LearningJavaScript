'use strict'
const expect = require('chai').expect
const promiseExercise = require('../../src/PromiseExercise')

// NOTE: in order to make these asynchronous test cases to pass, you have to let done() to be executed at last!
// As soon as you execute done(), and all assertions during the process are all true, then you will pass it.

describe('Promise handling', () => {

  it('can add positive numbers', (done) => {  // to pass this test: you need expect to be true, and you also have to execute done()!!
    promiseExercise.add(5, 5)
      .then(   // resolve callback
        (result) => {
          expect(result).to.equal(10)
          done()
        }
      )
      //.catch(done)  // added by xxs: to check we just need done to be executed to pass the test.
      // no matter you reject it or resolve
      // You don't need catch here because you expect it to be
  })

  it('validates the input', (done) => {
    promiseExercise.add(5, [])
      .then(   // if  still resolve, it means you take no means to control the invalid output.
        () => {
          done(new Error('it should reject invalid params'))
        }
      )
      .catch(done)  // done() is executed if the promise obj decides to reject
                    // the test will pass as soon as it can catch done(promise obj must decide to reject)?????
  })

  it('is possible to chain inc10 to add', (done) => {
    promiseExercise.add(5, 5)
      .then(promiseExercise.inc10)
      .then((result) => {
        expect(result).to.equal(20)
        done()
      })
  })

  it('use partial application to multiply the result of the chain by 2', (done) => {
    promiseExercise.add(5, 5)
      //.then((result)=>promiseExercise.inc10(result))
      .then(promiseExercise.inc10) // here omit the (result) parameter.
      /*
      .then(function(result){
        return promiseExercise.inc10(result);
      })
      */
      //.then(promiseExercise.multiply) // TODO: use partial application here
      .then( x => x+10 )
      .then( x => x+10 )
      .then((result) => {
        expect(result).to.equal(40)
      //  done()
      })
      .then(done)

  })

  it('is possible to brake a chain in a handler', (done) => {
    promiseExercise.add(5, 5)
      .then(() => {  // here I can take the parameter 10 from resolve returned by add(), but I don't
        // TODO: brake the promise chain here

        return new Promise(function(resolve, reject) {
          reject();
        });

      })
      .then(promiseExercise.inc10)
      .catch(done) // must reject to pass the test
  })

})
