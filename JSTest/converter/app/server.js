// Express framework to create a simple web API:
var express = require("express");
var app = express();

var converter = require("./converter")

app.get("/rgbToHex", function(req, res){
  //1. parse the request msg
  var red = parseInt(req.query.red, 10); //parse the request msg and get its value for 'red'
  var green = parseInt(req.query.green, 10);
  var blue = parseInt(req.query.blue, 10);

  //2. convert the decimal to hex using converter.js
  var hex = converter.rgbToHex(red, green, blue);

  //3. make the response msg.
  res.send(hex);
});

app.get("/hexToRgb", function(req, res){
  var hex = req.query.hex; // get the value for hex from request msg

  var rgb = converter.hexToRgb(hex);

  res.send(JSON.stringify(rgb))
})

app.listen(3000);
// the listen method runs a web server on the provided port 3000
