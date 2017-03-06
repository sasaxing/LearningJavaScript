let resolveIt = require('../src/myPromise').resolveIt
let resolveAnObject = require('../src/myPromise').resolveAnObject
let rejectIt = require('../src/myPromise').rejectIt
let chai = require('chai')
let expect = chai.expect

var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

it('should do something with promises', function(done) {
    var blah = 'foo';
    var result = resolveIt();

    //assertions
    result.then(function(data) {
        expect(data).to.equal(blah);
        done();
    }, function(error) {
        assert.fail(error);
        done()
    })
})

it('should do something with promises', function(done) {

    var blah = 'foo';
    var result = resolveIt();

    result.then(function(data) {
        expect(data).to.equal(blah);
        done();
    }, function(error) {
        done(new Error('should be resolved'))
    })
})

it('use "return" to get rid of "done, rj"', function(){
    let p = Promise.resolve('haha')
    return p
    // the test will pass only when p was resolved.
})

it('should do something with promises', function() {
    var blah = 'foo';
    var result = resolveIt();

    return result.then(function(data) {
        expect(data).to.equal(blah);
    });
});

it('should do something with promises', function() {

    var blah = 'foo';
    var result = resolveIt();

    return expect(result).to.eventually.equal(blah);
    //without return, it will produce false positive(test will still pass when it should not)
});

it('comparing object', function(){
    let expectedObj =  {name: 'xxs', gender: 'female'}

    let result = resolveAnObject()

    //return expect(result).to.eventually.deep.equal(expectedObj)
    return expect(result).to.eventually.become(expectedObj)
})

it('asserting Against a Specific Property from an Object', function(){
    let expectedObj =  {name: 'xxs', gender: 'female'}

    let result = resolveAnObject()

    return result.then(function(obj){
        expect(obj.name).to.equal('xxs')
    })

})

it('asserting Against a Specific Property from an Object', function(){
    let expectedObj =  {name: 'xxs', gender: 'female'}

    let result = resolveAnObject().then(function(obj){
        return obj.name
    })

    return expect(result).to.eventually.equal('xxs')

})

it('asserting Against a Specific Property from an Object', function(){
    let expectedObj =  {name: 'xxs', gender: 'female'}

    let result = resolveAnObject()
    return expect(result.then(obj => obj.name)).to.eventually.equal('xxs')

})
it('asserting for failures', function(done){
    let result = resolveIt()
    result.then(()=>{
        done(new Error('it should have rejected'))
    })
    .catch(()=>{
        done()
    })
})

it('asserting for failures', function(){
    let result = rejectIt()
    return expect(result).to.be.rejectedWith('foo')
})

it('Comparing Multiple Promises', function(){
    var p1 = Promise.resolve(3);
    var p2 = 1337;
    var p3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 100, 'foo');
    });
    return Promise.all([p1,p2,p3]).then((values)=>{
        expect(values[0]).to.equal(3)
        expect(values[1]).to.equal(1337)
        expect(values[2]).to.equal('foo')
    })
})
