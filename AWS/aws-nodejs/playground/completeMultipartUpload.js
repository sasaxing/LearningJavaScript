var AWS = require('aws-sdk');

// Create an S3 client
var s3 = new AWS.S3();

var params = {
    Bucket: 'rtc-platform-fusion-test-artifacts',/* required */
    Key: 'testCreateMultipartUpload.txt', /* required */
    UploadId: '9r9aCnapZ5n7Lcy8h8JChIu6YfrUQN_gGmrCEH5gC62iT3yZlF0zBHfRab5B1bsVStPDWuZN2l67u8_1Vf.EjeGw8V7EidlW5moYsjTDaaSIHdJjka_XXxBAQ1RWn_1_',
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
