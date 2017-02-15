"use strict";
const express = require("express");
const multer = require("multer");
let app = express();
let diskStorage = multer.diskStorage({
    destination: function (req, file, callback) {
        console.log('==>before any files, the req.body:');
        console.log(req.body);
        callback(null, './uploads/' + req.body.sutid);
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now());
    }
});
let upload = multer({ storage: diskStorage });
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.post('/', upload.single('logfiles'), function (req, res) {
    res.send('Got a POST request.');
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=expressServer.js.map