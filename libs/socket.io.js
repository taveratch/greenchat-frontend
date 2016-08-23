(function() {
  'use strict';
  var Actions = require('../actions');
  var socket = require('socket.io-client')('http://localhost:9090');
  var Socket = {
    listen: function(store) {
      socket.on('updateChat', function(data) {
        console.log('Received data from server : ' + JSON.stringify(data));
        store.dispatch(Actions.updateChat(data));
      });
    },
    selectChannel: function(channel) {
      socket.emit('channel', channel);
    }
  };
  module.exports = Socket;
}());
