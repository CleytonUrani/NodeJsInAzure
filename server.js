var http = require('http');
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if(req.url === '/sobre'){
		res.end('You in page from Sobre');
	}
	else{
		res.end('Hello World\n');
	}
}).listen(port);
