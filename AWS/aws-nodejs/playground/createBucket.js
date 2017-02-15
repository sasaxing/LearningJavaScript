
// Load the SDK and UUID
var AWS = require('aws-sdk');
var uuid = require('node-uuid');

// Create an S3 client
var s3 = new AWS.S3();

var params = {
  Bucket: 'mycutefirstbucketins3', /* required */
};
s3.createBucket(params, function(err, data) {
  if (err) console.log(`Error: ${err}`); // an error occurred
  else     console.log(`Data: ${data}`);           // successful response
});



//always access denied.
