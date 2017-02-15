let expect = require('chai').expect;
let indexof = require('../app/myFuncs').indexof;
let sum = require('../app/myFuncs').sum;
let max = require('../app/myFuncs').max;

describe('myFunc has a lot of functions: ', function() {
    describe('#indexof', function() {
        it('should return -1 when the item is not present in arr', function() {
            let item = 3;
            let arr = [1,2,6,5,4];
            expect(indexof(arr, item)).to.equal(-1);
        });
        it('should return the index when the value is present', function() {
            let item = 3;
            let arr = [1,2,6,5,4,3];
            expect(indexof(arr, item)).to.equal(5);
        });
    });
    describe('#sum', function(){
        it('should return the sum of elements of an array', function(){
            let arr = [1,2,3,4,5];
            expect(sum(arr)).to.equal(15);
        })
    })
    describe('max', function(){
        it('should return the maximal number of an array', function(){
            let arr = [3,6,7,11,1,5];
            expect(max(arr)).to.equal(11);
        })
    })
});
