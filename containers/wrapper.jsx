
(function() {
  'use strict';
  var Provider = ReactRedux.Provider;
  var createStore = Redux.createStore;
  var reducer = require('../reducers');
  var socket = require('../libs/socket.io.js');
  var store = createStore(reducer);
  socket.listen(store);
  var App = require('./app.jsx');
  var Wrapper = React.createClass({
    render: function() {
        return (
          <Provider store={store}>
            <App />
          </Provider>
        );
    }
  });
  module.exports = Wrapper;
}());

var Wrapper = require('./wrapper.jsx');
ReactDOM.render(<Wrapper />, document.getElementById('app'));
