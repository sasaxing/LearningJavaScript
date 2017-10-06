import * as S3Promisified from 'aws-s3-promisified'

const bucket = 'rtc-platform-fusion-test-artifacts'
const s3 = S3Promisified()
/*
async function start() {
    const result = await s3.listObjects('rtc-platform-fusion-test-artifacts', 'atestid-AAAA/SUT-AAA/testFile.txt')
    console.log('==>result.Contents: ', result.Contents)
}

start()
*/


const prom1 = s3.listObjects('rtc-platform-fusion-test-artifacts', 'atestid-AAAA/SUT-AAA/testFile.txt')
const prom2 = s3.listObjects('rtc-platform-fusion-test-artifacts', 'testid-AAAA/SUT-AAA/testFile.txt')

Promise.all([prom1, prom2])
    .then((res) => {
        console.log(res[0].Contents)
        console.log(res[1].Contents)
    })

console.log('end') // before promise.