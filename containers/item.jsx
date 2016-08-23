(function() {
  'use strict';
  var Wrapper = React.createClass({
    render: function() {
      return (
        <p>{this.props.item}</p>
      );
    }
  });
  module.exports = connect()(Wrapper);
}());
