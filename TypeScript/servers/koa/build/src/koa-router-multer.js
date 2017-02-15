"use strict";
const koa = require("koa");
//import multer from 'koa-router-multer'
const route = require("koa-route");
const multer = require("koa-multer");
let app = new koa();
let upload = multer({ dest: 'uploads/' });
app.use(route.post('/', upload.single('avatar')));
app.listen(3000);
