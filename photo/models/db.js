var settings = require('../settings');
var mongodb = require('mongodb');
var database = mongodb.Db;
var conn = mongodb.connection;
var server = mongodb.Server;

module.exports = new database(settings.db, new server(settings.host, conn.DEFAULT_PORT, {}));