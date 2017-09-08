var http = require('http');
var url = require('url');
var items = [];

var server = http.createServer(function(req, res) {
    switch (req.method) {
        case 'POST':
            var item = '';
            req.setEncoding('utf-8');
            req.on('data', function (chunk) {
                item += chunk;
            });
            req.on('end', function () {
                items.push();
                res.end('OK\n');
            });
            break;
        case 'GET':
            // items.forEach(function(item, i) {
            //     res.write(i + ') ' + item + '\n');
            // });
            var body = items.map(function (item, i) {
                return i + ') ' + item;
            });
            res.end();
            break;
        default:
            break;
    }
});