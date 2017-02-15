"use strict";
const express = require("express");
//import * as multer from 'multer'
let app = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.post('/', function (req, res) {
    res.send('Got a POST request.');
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=expressServer.spec.js.map