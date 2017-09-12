var http = require('http');
var qs = require('querystring');
var items = [];
var server = http.createServer(function (req, res) {
    if('/' == req.url){
        switch(req.method){
            case 'GET':
                show(res);
                break;
            case 'POST':
                add(req, res);
                break;
            default:
                badRequest(res);
        }
    }else{
        notFound(res);
    }
});

server.listen(8080);


function show(res) {
    var html = '<html><head><title>Todo List</title></head><body>'
            + '<h1>Todo List</h1>'
            + '<ul>'
            + items.map(function (item) {
                return '<li>' + item + '</li>'
            }).join('')
            + '</ul>'
            + '<form method="post" action="/">'
            + '<p><input type="text" value="item" /></p>'
            + '<p><input type="submit" value="Add Item" /></p>'
            + '</form></body></html>';
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', Buffer.byteLength(html));
    res.end(html);
}


function notFound(res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
}


function badRequest(res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Bad Request');
}


function add(req, res) {
    var body = '';
    req.setEncoding('utf8');
    console.log('test');
    req.on('data', function (chunk) {
        console.log('chunk:' + chunk);
        body += chunk;
        console.log("body:" + body);
    });
    req.on('end', function () {
        console.log('end');
        var obj = qs.parse(body);
        console.log("body:" + body);
        items.push(obj.item);
        show(res);
    });
}