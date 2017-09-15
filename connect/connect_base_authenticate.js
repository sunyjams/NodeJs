var connect = require('connect');
var app = connect();


// there is no blog
app.use('/blog', blog)
    .use('/posts', blog)
    .user(hello)
    .listen(8080);

function restrict(res, req, next) {
    var authorization = req.headers.authorization;
    if(!authorization) return next(new Error('Unauthorized'));

    var parts = authorization.split(' ');
    var scheme = parts[0];
    var auth = new Buffer(parts[1], 'base64').toString().split(':');
    var user = auth[0];
    var pass = auth[1];

    authenticateWithDatabase(user, pass, function(err) {
        if(err) throw err;
        next();
    });
}

function admin(req, res, next) {
    switch (req.url) {
        case '/':
            res.end('try/users');
            break;
        case '/users':
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(['tobi, loki', 'jane']));
            break;
        default:
            break;
    }
}