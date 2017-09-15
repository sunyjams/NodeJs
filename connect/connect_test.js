var connect  = require('connect');
var app = connect();


app.use(hello);
app.use(logger);
app.listen(8080);

function logger(req,res, next) {
    console.log('%s %s', req.method, req.url);
    next();  
};

function hello(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello world');
}
