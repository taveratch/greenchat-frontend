(function() {
  'use strict';
  var initialState = {
    chats: ['A'],
    username: null
  };
  var types = require('../constants');
  var Reducer = function(state, action) {
    state = typeof state !== 'undefined' ? state : initialState;
    var newState = _.clone(state);
    switch(action.type) {
      case types.UPDATE_CHAT:
        newState.chats = action.chats;
        console.log(newState);
        return newState;
      default:
        return state;
    }
  };
  module.exports = Reducer;
}());
