var AWS = require('aws-sdk');

// Create an S3 client
var s3 = new AWS.S3();

var uploadIDTag1 = '';

var params = {
    Bucket: 'rtc-platform-fusion-test-artifacts',/* required */
    Key: 'testCreateMultipartUpload.txt', /* required */
};


s3.createMultipartUpload(params, function(err, data) {
  if (err){
      console.log(`==>error:`);
      console.log(err)
  } else {
      console.log(`==>data: `);
      console.log(data);
      uploadIDTag1 = data.UploadId
  }
});

params = {
    Bucket: 'rtc-platform-fusion-test-artifacts',/* required */
    Key: 'testCreateMultipartUpload.txt', /* required */
    UploadId: uploadIDTag1,
    MultipartUpload: {
        Parts: [
          {
            ETag: 'tag1',
            PartNumber: 1
          },
          /* more items */
        ]
      },
    RequestPayer: 'requester'
};

s3.completeMultipartUpload(params, function(err, data) {
  if (err){
      console.log(`==>error:`);
      console.log(err)
  } else {
      console.log(`==>data: `);
      console.log(data);
  }
});
