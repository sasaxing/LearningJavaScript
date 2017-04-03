var restify = require('restify');

function respond(req, res, next) {
    res.send('hello ' + req.params.name + '\n'); //response.body
    next();
}

var server = restify.createServer();

// request example:
//curl -X POST -d {} http://localhost:8080/hello --header "Content-Type:application/json" -H 'accept: text/plain'
server.post('/hello', function create(req, res, next) {
    //res.send(201, Math.random().toString(36).substr(3, 8));
    res.send(`receive your post request\n`)
    return next();
});

//curl -X POST -d {} http://localhost:8080/hello/xiaosha --header "Content-Type:application/json" -H 'accept: text/plain'
server.post('/hello/:name', function create(req, res, next){
    res.send(`Hi, ${req.params.name}, I received your request.\n`)
})

server.get('/hello', respond);
server.get('/hello/:name', respond);

server.put('/hello', respond);
server.head('/hello/:name', respond);
server.del('hello/:name', function rm(req, res, next) {
    res.send(204);
    return next();
});
server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});
