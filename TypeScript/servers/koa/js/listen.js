var http = require('http');
var https = require('https');
var koa = require('koa');
var app = koa();
http.createServer(app.callback()).listen(3000);
https.createServer(app.callback()).listen(3001);
