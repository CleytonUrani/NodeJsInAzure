var http = require('http');
var port = process.env.port || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if(req.url === '/sobre'){
		res.end('Sobre....');
	}
	else{
		res.end('<p>Hello World.<p>');
	}
}).listen(port);
