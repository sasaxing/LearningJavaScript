import * as path from 'path'
import * as S3Promisified from 'aws-s3-promisified'

const bucket = 'rtc-platform-fusion-test-artifacts'
let key = 's3-promised/hello.pdf'
let filePath = path.join(__dirname, 'testFile.txt')

let s3:any = S3Promisified()
let feedback = s3.putFile(bucket, key, filePath)
console.log(feedback)

console.log(typeof(s3));
