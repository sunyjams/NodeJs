var express = require('express');
var router = express.Router();

app.get('/', router.login);

app.post('/', router.doLogin);