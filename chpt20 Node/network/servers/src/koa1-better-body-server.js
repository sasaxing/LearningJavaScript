"use strict";
const Koa = require("koa");
const body = require("koa-better-body");
const Router = require('koa-router');
const fs = require('fs')

let app = new Koa();
let router = new Router();

router.post('/', body(), function* (next){

    console.log(this.request.body);
    console.log(this.request.files);
    console.log(this.request.fields);
    this.body = JSON.stringify({
        fields: this.request.fields,
        files: this.request.files,
        body: this.request.body || null
    }, null, 2)
    yield next

})

app.use(router.routes());


app.listen(3000);
