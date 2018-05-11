// npm test test/tryHook.spec.js 
var expect = require("chai").expect; // to replace 'assert'

describe.only("global", function () {
    beforeEach(() => {  // this is done after each 'it' . so 4 times in this case.
        console.log('==> global beforeEach!!!')
    })
    before(() => {
        console.log('==> global before!!!')

    })
    describe("decrb1", function () {
        beforeEach(() => {
            console.log('==> local beforeEach!!!')
        })
        before(() => {
            console.log('==> local before!!!')
        })
        it("desc1-it1", function () {
            console.log("desc1-it1")
        });
        it("desc1-it1", function () {
            console.log("desc1-it2")
        });
    });
    describe("decrb2", function () {
        it("desc2-it1", function () {
            console.log("desc2-it1")
        });
        it("desc2-it1", function () {
            console.log("desc2-it2")
        });
    });
});

/**
 * 1. global-before-each happens before local-before-each
 * 2. local-before happens before global-before-each happens
 * 3. global-before happens before local-before
 * 
 * Conclusion:  global-before  -->  local-before  --> global-beforeEach  --> local-beforeEach
 */