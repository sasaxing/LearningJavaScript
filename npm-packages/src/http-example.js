const http = require('http')
const wait = require('wait.for')

function handler(req, res) {
  console.log('I am a handler.')
  console.log(res)
}

var server = http.createServer(function (req, res) {
  console.log('req!');
  res = { myMessage: 'my response' }
  wait.launchFiber(handler, req, res); //handle in a fiber, keep node spinning 
  console.log('end! ')
}).listen(8000);