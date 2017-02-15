var koa = require('koa');
var bodyParser = require('koa-bodyparser');

var app = koa();
app.use(bodyParser());

app.use(function *() {
  // the parsed body will store in this.request.body
  // if nothing was parsed, body will be an empty object {}
  this.body = this.request.body;
});
app.listen(3000);
