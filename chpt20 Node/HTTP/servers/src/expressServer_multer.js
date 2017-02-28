var express = require('express')
var multer  = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
      console.log('==>before any files, the req.body:');
      console.log(req.body); //NOTE: print all 'text' defined BEFORE any 'file'
      callback(null, './uploads/'+req.body.sutid) // manully create uploads directory
  },
  filename: function (req, file, callback) {
      callback(null, file.fieldname + '-' + Date.now())
  }
})

var upload = multer({ storage: storage })

var app = express()

app.post('/', upload.single('logfiles'), function (req, res, next) {
    res.send('Got your request')
    console.log('\n==> req.body:');
    console.log(req.body); //text
    console.log('\n==> req.file:');
    console.log(req.file); //file
    console.log(typeof(next)); //function
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
