"use strict";
//https://github.com/request/request#requestoptions-callback
const request = require("request");
let logData = {
    sutid: 'sut1',
    filename: 'logfile1.txt',
    contents: 'some log data...'
};
request.post('http://localhost:3000/', {
    headers: { a: 1 },
    //body: JSON.stringify(logData),
    form: logData,
    json: true
}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
});
/*
request({
    // will be ignored
    method: 'GET',
    uri: 'http://www.google.com',

    // HTTP Archive Request Object
    har: {
      url: 'http://www.mockbin.com/har',
      method: 'POST',
      headers: [
        {
          name: 'content-type',
          value: 'application/x-www-form-urlencoded'
        }
      ],
      postData: {
        mimeType: 'application/x-www-form-urlencoded',
        params: [
          {
            name: 'foo',
            value: 'bar'
          },
          {
            name: 'hello',
            value: 'world'
          }
        ]
      }
    }
  })

  // a POST request will be sent to http://www.mockbin.com
  // with body an application/x-www-form-urlencoded body:
  // foo=bar&hello=world

  */
