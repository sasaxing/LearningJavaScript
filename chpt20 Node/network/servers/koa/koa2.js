"use strict";

const path = require('path')

const Koa = require("koa");   //need koa@2 here !!!!! (koa2 also works for generators, but not couraged.)
const body = require('koa-better-body')
let app = new Koa();

app.use(body({
    uploadDir: path.join(__dirname, 'uploadDir'),
    keepExtensions: true
})) // request gets parsed here


app.use(function (context) {
    console.log("\n==> context.request");
    console.log(context.request);
    console.log("\n==> context.request.files");
    console.log(context.request.files);
});
app.listen(3000);
