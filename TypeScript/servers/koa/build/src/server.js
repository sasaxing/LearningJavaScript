"use strict";
const BodyParser = require("koa-bodyParser");
const Koa = require("koa");
let app = new Koa();
app.use(BodyParser()); //'json','form','text'
app.use(function* () {
    console.log(`Receive a ${this.request.method} request:`);
    console.log(`${this.request.method} is idempotent: ${this.request.idempotent}`); // GET: true, POST: false
    console.log(`==>this.request.headers`);
    console.log(this.request.headers);
    console.log(`==>this.request.host`);
    console.log(this.request.host);
    console.log(`==>this.request.body`);
    console.log(this.request.body);
    console.log(`==>this.request.body.sutid`);
    console.log(this.request.body.sutid);
    if (JSON.stringify(this.request.body) === '{}') {
        this.body = 'still not get body';
    }
    else {
        this.body = 'I am response body!:)';
    }
});
app.listen(3000);
/*
import * as http from 'http';

let postHTML =
  '<html><head><title>Post Example</title></head>' +
  '<body>' +
  '<form method="post">' +
  'Input 1: <input name="input1"><br>' +
  'Input 2: <input name="input2"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';

http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    console.log('POSTed: ' + body);
    res.writeHead(200);
    res.end(postHTML);
  });
}).listen(3000);
*/
