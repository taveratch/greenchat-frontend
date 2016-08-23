var connection = require('./connection');
var thinky = connection.thinky;
var type = connection.type;
var Channel = thinky.createModel('Channel', {
  id: type.string(),
  name: type.string(),
  chats: type.array()
});

module.exports = Channel;
