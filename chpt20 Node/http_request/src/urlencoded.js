let request = require('request');
let fs = require('fs');

const imageLink = 'https://www.wired.com/wp-content/uploads/2015/09/google-logo.jpg'
const localhostLink = 'http://localhost:3000'


// application/x-www-form-urlencoded
let aform = {
    key: 'value',
    file1: fs.createReadStream('file.json'),
    file2: fs.createReadStream('image.jpg')
}; // just an object
request.post(
    {
        url: localhostLink,
        form: aform //will be request.body
    },
    function(err, httpResponse, body){
    // response handler : do sth with the response
        console.log('\nPOST response:');
        console.log(`httpResponse.request.headers['content-type'] = ${httpResponse.request.headers['content-type']}`);
    }
)
