var port = process.env.port || 1337;
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/sobre', function (req, res) {
  res.send('Sobre....');
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
