let expect = require('chai').expect;
let WordMaster = require('../app/myClass');
let wordMaster = new WordMaster('Amy',16);

describe('myClass can do a lot of things: ', function() {
    describe('can transfer a verb to its past form', function() {
        it('should append "-ed" after a verb when last word is not "y"', function() {
            expect(wordMaster.pastForm('support')).to.equal('supported');
        });
        it('should append "-ied" after a verb when last word is "y"', function() {
            expect(wordMaster.pastForm('satisfy')).to.equal('satisfied');
        });
    });
    describe('can transfer a verb to its present form', function() {
        it('should append "-ing" after a verb', function() {
            expect(wordMaster.presentForm('support')).to.equal('supporting');
        });

    });

});
