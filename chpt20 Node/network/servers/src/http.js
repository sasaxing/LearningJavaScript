const http = require('http');
const server = http.createServer(function(req, res) { //res is a write stream
    console.log(req);
    if(req.method === 'GET' && req.url === '/favicon.ico'){
        console.log(`==> ${req.method} ${req.url}`);
        const fs = require('fs');
        const rs = fs.createReadStream('favicon.ico');
        rs.pipe(res);
    }else{
        console.log(`${req.method} ${req.url}`);
        res.end('Hello world!');
    }
});

const port = 8080;
server.listen(port, function() {
// you can pass a callback to listen that lets you know
// the server has started
    console.log(`server startd on port ${port}`);
});
