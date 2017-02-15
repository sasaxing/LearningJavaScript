"use strict";
const http = require("http");
//import * as querystring from 'querystring'
//The url we want is `www.nodejitsu.com:1337/`
let options = {
    //this.request.header:
    host: 'localhost',
    path: '/',
    port: 3000,
    headers: {
        'sutid': 'sut1',
        'contents': 'some log data...',
        //'Content-Type':
        'content-type': 'text/plain',
        "content-length": "16",
    },
    //this.request.method
    method: 'POST',
};
let callback = function (response) {
    console.log(`STATUS: ${response.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(response.headers)}`);
    response.setEncoding('utf8');
    response.on('data', (chunk) => {
        console.log(`Response message: ${chunk}`); // = this.body in server.ts
    });
    response.on('end', () => {
        console.log('No more data in response.');
    });
};
/*

let postData = querystring.stringify({
    'compilation_level' : 'ADVANCED_OPTIMIZATIONS',
    'output_format': 'json',
    'output_info': 'compiled_code',
    'warning_level' : 'QUIET',
    'js_code' : 'XXXXXXXXXXXXXXXX'
});

*/
let req = http.request(options, callback);
//This is the data we are posting, it must be a string or a buffer
//req.write("hello world!");
// write data to request body
//req.write(postData);
req.write("hello");
/*
req.on('error', (e) => {
  console.log(`problem with request: ${e.message}`);
});
*/
req.end();
