
let request = require('request');
let fs = require('fs');

const localhostLink = 'http://localhost:3000'

// formData is a dependency of 'request', now that you have imported 'request', you can just use formData
// otherwise you need to explicitly import 'form-data', and then form = new FormData()
var formData = {
    // you can add all options to the formData
    // or you can append new options after create it
    sutid: "sut1",
    my_fieeld: 'my_value',
    logfiles: fs.createReadStream('./file.json'),

    //my_file2: fs.createReadStream(__dirname + '/../image.jpg'),
    //myfile: fs.createReadStream('/files/myfile.txt')
};

request.post(
    {
        url: localhostLink,
    //    form: ['helloooo'],
        formData: formData,  // using 'request', it enables the request option to contain formData :)

    },
    function(err, res, body){
        if (err) {
            return console.error('upload failed:', err);
        }
        console.log('\n==> POST response:');
        //console.log(httpResponse);
        console.log('==>resonse\'s body:', body);
        console.log(`==>request.headers['content-type'] = ${res.request.headers['content-type']}`);
    }
)
