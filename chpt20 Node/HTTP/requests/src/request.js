let request = require('request');
let fs = require('fs');

const imageLink = 'https://www.wired.com/wp-content/uploads/2015/09/google-logo.jpg'
const localhostLink = 'http://localhost:3000'


//make a request to url, and print the response
//it's a GET request by default
// request(url) == request.get(url)
request('http://www.google.com', function (error, response, body) { //body  = response.body
  if (!error && response.statusCode == 200) {
      console.log('\nGET response:');
      console.log(response.statusMessage) // Show the HTML for the Google homepage.
  }
});

//make a request and write the response directyly into the fileStream
request(imageLink).pipe(fs.createWriteStream('google-logo.jpg'));

//stream a file to a PUT or POST request.
// content-type will be set to 'application/json' automatically according to the extension of the attached file.
// read the file into a stream, and send the stream as a body of PUT request .
fs.createReadStream('file.json').pipe(request.put(localhostLink))  // works fine:) : request.body = file.json's contents

//pipe the request to itself to make another request
// so that you can POST/PUT the response of the first request to another target-- moving data from servers
request.get('http://www.google.com')
    .pipe(request.put(localhostLink))  // second request.body empty

request.get(imageLink)
    .on('response', function(response){
        console.log("\nGET response:");
        console.log(`response.statusCode = ${response.statusCode}`); //200
        console.log(`response.headers['content-type'] = ${response.headers['content-type']}`);  //image/jpeg
        console.log(`response.headers['content-length'] = ${response.headers['content-length']}`);  //78291
    })
    .on('error', function(err){ //e.g., the link does not exist.
        console.log(err);
    })
    .pipe(fs.createWriteStream('google-logo1.jpg'))
