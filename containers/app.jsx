(function() {
	'use strict';
	var mapStateToProps = function(state) {
		return {reducer: state};
	};
  var socket = require('../libs/socket.io');
	var Item = require('./item.jsx');
	var App = React.createClass({
    __handleClick: function() {
      var channel = this.refs.channel.value;
      socket.selectChannel(channel);
    },
		render: function() {
			return (
				<div>
          <div></div>
          <div></div>
          <input ref="channel"/>
          <button onClick={this.__handleClick}>Start</button>
					{this.props.reducer.chats.map(function(result, i) {
						return <Item key={i} item={result.message}/>;
					})
          }
				</div>
			);
		}
	});
	module.exports = connect(mapStateToProps)(App);
}());
