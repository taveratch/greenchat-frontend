import socket from '../libs/socket.io';
import Item from './item.jsx';

var mapStateToProps = (state) => {
  return {reducer: state.reducer};
};

class Channels extends React.Component {
  constructor(props) {
    super(props);
    this.__handleClick = this.__handleClick.bind(this);
  }

  __handleClick() {
    const channel = this.refs.channel.value;
    socket.selectChannel(channel);
  }

  render() {
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
}

export default connect(mapStateToProps)(Channels);
