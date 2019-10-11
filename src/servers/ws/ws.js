const express = require('express')();
const http = require('http').Server(express);
var socketio = require('socket.io')(http);
const cfg = require('../../consts/servers/ws.json');

let ws = {
  expressServer: null,
  server: null,

  run() {
    // express.get('/', function(req, res) {
    //   res.sendFile(__dirname + '/index.html');
    // });

    socketio.on('connection', function(socket) {
      socket.on('chat message', function(msg) {
        console.warn('[WS] New chat message');
        socketio.emit('chat message', msg);
      });
      socket.on('disconnect', function (msg) {
        console.warn('[WS] User disconnected');
        socketio.emit('chat message', msg);
      });
    });
    
    http.listen(cfg["WS"]["PORT"], function(){
      console.log('Express/http/socket.io are listening on: ' + cfg["WS"]["PORT"]);
    });
  }
}

module.exports = {
  ws
}