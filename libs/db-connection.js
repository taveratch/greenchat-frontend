(function() {
  'use strict';
  var Channel = require('./channel');
  var store = null;
  var Service = {
    listen: function(s) {
      store = s;
      var Channel = require('./channel');
      Channel.changes().then(function(feed) {
        feed.each(function(err, doc) {
          if (err) throw err;
          console.log(doc);
        });
      });
    },
    sendMessage: function(message) {

    }
  };
  module.exports = Service;
}());
