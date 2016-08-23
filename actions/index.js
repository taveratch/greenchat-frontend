(function() {
  'use strict';
  var types = require('../constants');
  var Actions = {
    updateChat: function(chats) {
      return {
        type: types.UPDATE_CHAT,
        chats: chats
      };
    }
  };
  module.exports = Actions;
}());
