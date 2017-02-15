"use strict";
require("mocha");
const chai_1 = require("chai");
const write_1 = require("../src/write");
describe('This write.ts', () => {
    let fw;
    before(() => {
        fw = new write_1.FileWriter();
    });
    after(() => {
    });
    it('can store logfiles', (done) => {
        let sutId = "sut1";
        let fileName = "log1.txt";
        let contents = "Some log data...";
        let result = fw.storeFile(sutId, fileName, contents);
        result.then((result) => {
            chai_1.expect(result).to.include('successfully');
            done();
        });
    });
    it('can detect invalid sutId', (done) => {
        let sutId = "new_folder/sut2";
        let fileName = "log1.txt";
        let contents = "Some log data...";
        let result = fw.storeFile(sutId, fileName, contents);
        result.then((result) => {
            result = '';
            done(new Error('it should reject invalid params'));
        })
            .catch((result) => {
            chai_1.expect(result).to.include('bad');
            done();
        });
    });
});
//# sourceMappingURL=write.spec.js.map