var connect = require('connect');
var bodyParse = require('body-parser');
var methodOverride = require('method-override');

function edit(req, res, next) {
    if('GET' != req.method) return next();
    res.setHeader('Content-Type', 'text/html');
    res.write('<form method="post">');
    res.write('<input type="hidden" name="post_to_put" value="put" />');
    res.write('<input type="text" name="user[name]" value="Tobi" />');
    res.write('<input type="submit" value="Update" />');
    res.write('</form>');
    res.end();
}

function update(req, res, next) {
    if('PUT' != req.method) return next();
    res.end('Update name to ' + req.body.user.name);
}

var app = connect()
    // .use(bodyParse())
    .use(methodOverride(function(req, res) {
        if(req.body && typeof req.body === 'object' && 'post_to_put' in req.body){
            var method = req.body.post_to_put;
            delete req.body.post_to_put;
            return method.toUpperCase();
        }
    }))
    .use(edit)
    .use(update);

app.listen(3000);