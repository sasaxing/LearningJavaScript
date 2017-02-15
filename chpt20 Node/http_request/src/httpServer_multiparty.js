var multiparty = require('multiparty');
var http = require('http');
var util = require('util'); // for good looking of response.
var fs = require('fs');

http.createServer(function(req, res) {
  if (req.method === 'POST') {
    // parse a file upload
    var form = new multiparty.Form();
    console.log(req);
    form.parse(req, function(err, fields, files) {
        //console.log(req);
        console.log('\n==> files:');
        console.log(files);
        console.log(files.my_files[0]);
        let rs = fs.createReadStream(files.my_files[0].path);
        let ws = fs.createWriteStream('./uploadedFiles/file1.json')
        rs.pipe(ws);


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
