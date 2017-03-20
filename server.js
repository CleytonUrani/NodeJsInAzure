var port = process.env.port || 1337;
var express = require('express');
var app = express();

var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'us-cdbr-azure-central-a.cloudapp.net',
  user     : 'b68455bd958c23',
  password : '28953cd3'
});

app.get('/', function (req, res) {
  res.send(
    'Jquery node.js'
  );
});

app.get('/sobre', function (req, res) {
  res.send('Sobre....');
});

app.get('/select', function (req, res) {
  connection.connect();
  connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
  });
  connection.end();
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
