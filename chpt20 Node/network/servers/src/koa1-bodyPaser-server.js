"use strict";
const BodyParser = require("koa-bodyParser");
const Koa = require("koa");
let app = new Koa();
app.use(BodyParser()); //'json','form','text'
app.use(function*() {
    console.log(`\n\nReceive a ${this.request.method} request:`);
    console.log(`${this.request.method} is idempotent: ${this.request.idempotent}`); // GET: true, POST: false
    console.log(this.request.host);
    console.log(`this.request.headers['content-type'] = ${this.request.headers['content-type']}`);  //image/jpeg

    console.log("==> this.request");
    console.log(this.request);
    console.log(`==> this.request.files`);
    console.log(this.request.files);

    if (JSON.stringify(this.request.body) === '{}') {
        console.log('==> request.body is empty!');
    }
    else {

        console.log("==> this.request.body:");
        console.log(this.request.body);
    }

    // console.log(this);
    // on server side, 'this' here includes both the request and response message, and some other informations as well
    // by default, for a PUT/POST request, the response here will always be ==> response: { status: 404, message: 'Not Found', header: {} },

    console.log(`==> this.response:`);
    console.log(this.response);


    // but you can actually modify the response(if you need to send it to the client side.) by modify this.body
    this.body = this
    // this execution will do following things:
    // this.response.status=200 + this.response.message='ok' + this.response.header= {...} + this.response.body=this.
    // magic! before here, this.body = undefined.
    // this.response will be changed if this.body is not empty
    // now the response just has EVERYTHING!!! You can enable clients to see them  if you do this.body = this
    //console.log(this.response); // then the response status = 200, this.response.body=this.


});
app.listen(3000);
