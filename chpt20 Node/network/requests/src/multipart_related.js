let request = require('request');
let fs = require('fs');

const localhostLink = 'http://localhost:3000'
const anObj = {foo: 'bar', _attachments: {'message.txt': {follows: true, length: 18, 'content_type': 'text/plain' }}};
//multipart/related
request(
    {
        method: 'POST',
        url: localhostLink,

        preambleCRLF: true,
        postambleCRLF: true,
        multipart: [  // how to access this on server side using koa????
            {
                'content-type': 'application/json',
                body: JSON.stringify(anObj)
            },
            {body: 'I am an attachment'},
            {body: fs.createReadStream('image.jpg')}
        ]
    },
    function(err, response, body){
        // response handler : do sth with the response
        if(err){
            return console.error('upload failed:', err);
        }
        console.log('\nPOST response:');
        console.log(`response.request.headers['content-type'] = ${response.request.headers['content-type']}`);
        console.log('Upload successful!  Server responded with:', body);
    }
)
