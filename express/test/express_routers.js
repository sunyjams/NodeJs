var express = require('express');
var app = express();
var birds = require('./birds');

app.get('/example/a', function(req, res) {
    res.send("Hello from A");
});

app.get('/example/b', function(req, res, next) {
    console.log('response will be sent by the next function');
    next();
}, function(req, res) {
    res.send('Hello from B!!!');
});

var func1 = function(req, res, next) {
    console.log("response to function 1");
    next();
}

var func2 = function(req, res, next) {
    console.log('response to function 2');
    next();
} 

var func3 = function(req, res, next) {
    res.send("Hello from C!!!");
}

app.get('/example/c', [func1, func2, func3]);

app.use('/birds', birds);

app.listen(3000);