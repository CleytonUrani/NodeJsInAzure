var port = process.env.port || 1337;
var express = require('express');
var app = express();

function resposta (res){
  res.send(new Date());
};

app.get('/', function (req, res) {
  resposta(res);
  res.send(
    'Jquery node.js + Express'
  );
});

app.get('/sobre', function (req, res) {
  res.send('Sobre....');
});

app.listen(port, function () {
  console.log('Rodando na porta: ' + port);
});
