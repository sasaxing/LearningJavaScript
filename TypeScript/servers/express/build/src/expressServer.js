"use strict";
const express = require("express");
//import * as multer from 'multer'
let app = express();
/*
let diskStorage = multer.diskStorage({
  destination: function (req, file, callback) {
      console.log('==>before any files, the req.body:');
      console.log(req);
      console.log(req.body); //NOTE: print all 'text' defined BEFORE any 'file'
      callback(null, './uploads/'+req.body.sutid) // manully create uploads directory
  },
  filename: function (req, file, callback) {
      callback(null, file.fieldname + '-' + Date.now())
  }
})

let upload = multer({storage: diskStorage});
*/
app.get('/', function (req, res) {
    res.send('Hello World!');
});
//upload.single('logfiles'),
app.post('/', function (req, res) {
    console.log(req);
    res.send('Got a POST request.');
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=expressServer.js.map