var port = process.env.port || 1337;
var express = require('express');
var app = express();

//var http=require('http');
//var jsdom=require('jsdom');
//var $=require('jquery')(jsdom.jsdom().createWindow());


app.get('/', function (req, res) {
  res.send(
    'Jquery node.js'
  );
});

app.get('/sobre', function (req, res) {
  res.send('Sobre....');
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
