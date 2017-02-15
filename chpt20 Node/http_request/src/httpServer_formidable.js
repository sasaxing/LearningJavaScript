//can not parse files array! compared to 'multiparty'

var formidable = require('formidable');
var http = require('http');
var util = require('util'); // for good looking of response.
var fs = require('fs');

http.createServer(function(req, res) {
  if (req.method === 'POST') {
    // parse a file upload
    var form = new formidable.IncomingForm();
    console.log(req);
    form.parse(req, function(err, fields, files) {
        //console.log(req);
        console.log('\n==> files:');
        console.log(files);


        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('received upload:\n\n'); // response.body
        res.end(util.inspect({Fields: fields, Files: files}));
    });

    return;
  } else{
      // show a file upload form
      res.writeHead(200, {'content-type': 'text/html'});
      res.end(
        '<form action="/upload" enctype="multipart/form-data" method="post">'+
        '<input type="text" name="title"><br>'+
        '<input type="file" name="upload" multiple="multiple"><br>'+
        '<input type="submit" value="Upload">'+
        '</form>'
      );
}

}).listen(3000);
