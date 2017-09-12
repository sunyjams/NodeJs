var https = require('https');
var fs = require('fs');

var options = {
    key:fs.readFileSync('./NodeWeb/key.pem'),
    cert:fs.readFileSync('./NodeWeb/key-cert.pem')
};

https.createServer(options, function(req, res) {
    res.writeHead(200);
    res.end("Hello world\n");
}).listen(8080);