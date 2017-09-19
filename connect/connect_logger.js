var connect = require('connect');
var logger = require('morgan');
var fs = require('fs');
var favicon = require('serve-favicon');

var log = fs.createWriteStream('/var/log/myapp.log', {flags:'a'});

var app = connect()
    .use(favicon(__dirname + '/public/favicon.ico'))
    .use(logger({format:':method :url :response-time ms', stream :log}))
    .use(hello)
    .listen(3000);

function hello(req, res) {
    console.log('Hello');
    res.end("Hello world!!!");
}