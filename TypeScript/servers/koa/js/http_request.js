var http = require('http');

//The url we want is `www.nodejitsu.com:1337/`
var options = {
  host: 'localhost', //'0.0.0.0'
  path: '/',
  //since we are listening on a custom port, we need to specify it by hand
  port: '3000',
  //This is what changes the request to a POST request
  method: 'POST'
};

callback = function(response) {
  var str = ':'

  response.on('data', function (chunk) {
    str += chunk;  //this chunk = 'this.body' after responsed
  });

  response.on('end', function () {
    console.log(str);
  });
}

var req = http.request(options, callback);
//This is the data we are posting, it needs to be a string or a buffer
req.write("hello world!");
req.end(); 
