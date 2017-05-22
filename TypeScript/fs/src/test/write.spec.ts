import 'mocha'
import { expect } from 'chai'
import { FileWriter } from '../src/write'


describe('This write.ts', () => {
    let fw : FileWriter

    before(() => {
        fw = new FileWriter()
    })

    after(() => {
    })

    it('can store logfiles', (done) => {
        let sutId = "sut1"
        let fileName = "log1.txt"
        let contents = "Some log data..."

        let result = fw.storeFile(sutId, fileName, contents)

        result.then(
            (result) => {
                expect(result).to.include('successfully')
                done()
            }
        )

    })

    it('can detect invalid sutId', (done) => {
        let sutId = "new_folder/sut2"
        let fileName = "log1.txt"
        let contents = "Some log data..."
        let result = fw.storeFile(sutId, fileName, contents)

        result.then(
            (result) => {
                result = ''
                done(new Error('it should reject invalid params'))
            }
        )
        .catch(
            (result) => {
                expect(result).to.include('bad');
                done()
            }
        )
    })

})
