var connect  = require('connect');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = connect();


// app.use(hello);
app.use(bodyParser.json());
// app.use(registUser);
// app.use(setHttpHeader);
// app.use(cookieParser('tobi is a cool ferret'));
// app.use(connect.cookieParser('tobi is a cool ferret'));
// app.use(function(req, res) {
//     console.log(req.cookies);
//     console.log(req.signedCookies);
//     res.end('hello\n');
// });


// app.use(logger);
app.listen(8080);

function logger(req,res, next) {
    console.log('%s %s', req.method, req.url);
    next();  
};

function hello(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello world');
}

function setHttpHeader(req, res) {
    res.setHeader('Set-Cookie', 'foo=bar');
    res.setHeader('Set-Cookie', 'tobi=ferret; Expires=Tue, 08 Jun 2018 10:18:13 GMT');
    res.end();
}

function registUser(req, res) {
    res.end('Registered new user: ' + req.body.username);
}
