var expect = require("chai").expect; // to replace 'assert'

describe.only("global", function () {
    beforeEach(() => {  // this is done after each 'it' . so 4 times in this case.
        console.log('==> after Each!!!')
    })
    describe("decrb1", function () {
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
