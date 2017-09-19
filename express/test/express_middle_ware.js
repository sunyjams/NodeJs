var express = require('express');
var app = express();

app.use(function(req, res, next) {
    console.log('Time:', Date.now());
    next();
});

app.use('/user/:id', function(req, res, next) {
    console.log('Request Type:', req.method);
    next();
});

app.use('/user/:id', function(req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next();
});

app.get('/user/:id', function(req, res, next) {
    res.send('USER');
});

app.use(function(err, req, res, next) {
    console.log(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(8080, function () {
    console.log('Server is start!');
});