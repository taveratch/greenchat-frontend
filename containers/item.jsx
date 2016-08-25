class Wrapper extends React.Component {
  render() {
    return (
      <p>{this.props.item}</p>
    );
  }
}

export default connect()(Wrapper);
