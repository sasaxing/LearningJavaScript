var AWS = require('aws-sdk');

// Create an S3 client
var s3 = new AWS.S3();

var params = {
    Bucket: 'rtc-platform-fusion-test-artifacts', //destination bucket
    Key: 'newFolder/hello_world1.txt', // file name
    Body: 'hey , how are you ?' // file contents: string, Buffer, Stream, Blob, or typed array object
};

s3.putObject(params, function(err, data) {
    if (err){
        console.log(`==> Error:`);
        console.log(err.message)
    }  else {
        console.log(`==>data: `);
        console.log(data);
    }
});

var params = {
    Bucket: 'rtc-platform-fusion-test-artifacts', //destination bucket
    CopySource: 'rtc-platform-fusion-test-artifacts/hello_world2.txt', /* required */
    Key: 'hello_world2_copy.txt',
};
s3.copyObject(params, function(err, data) {
    if (err){
        console.log(`==> Error:`);
        console.log(err.message)
    }  else {
        console.log(`==>data: `);
        console.log(data);
    }
});
