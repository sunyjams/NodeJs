var events = require('events');
var net = require('net');

var channel = new events.EventEmitter();
channel.clients = {};
channel.subscriptions = {};

channel.on('join', function (id, client) {
    this.clients[id] = client;
    this.subscriptions[id] = function (senderId, message) {
        if(id != senderId){
            this.clients[id].write(message);
        }
    }
    this.on('broadcast', this.subscriptions[id]);
});

channel.on('leave', function (id) {
    channel.removeListener('broadcast', this.subscriptions[id]);
    channel.emit('broadcast', id, id + ' has left the chat.\n');
});

channel.on('shutdown', function () {
    channel.emit('broadcast', 'Chat has shut down.\n');
    channel.removeAllListeners('broadcast');
});

var chatServer = net.createServer();

chatServer.on('connection', function (client) {
    var id = client.remoteAddress + ':' + client.remotePort;
    console.log('connect success');
    channel.emit('join', id, client);
    client.on('data', function (data) {
        data = data.toString();
        if(data == 'shutdown\r\n'){
            channel.emit('shutdown');
        }
        channel.emit('broadcast', id, data);
    });

    // channel.on('join', function(id, client){
    //     var welcome = 'Welcome!\n' + 'Guests online: ' + this.listeners('broadcast').length;
    //     client.write
    // });

    client.on('close', function () {
        channel.emit('leave', id);
    });
});

// var server = net.createServer(function (client) {
//     var id = client.remoteAddress + ':' + client.remotePort;
//     client.on('connect', function () {
//         channel.emit('join', id, client);
//     });
//     client.on('data', function (data) {
//         data = data.toString();
//         channel.emit('broadcast', id, data);
//     });
// });

chatServer.listen(8888);