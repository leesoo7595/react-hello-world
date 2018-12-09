class Content extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      counter: 0
    }
  }
  handleClick(event) {
    this.setState({counter: ++this.state.counter})
  }
  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
          className="btn btn-primary">
          Don't Click Me {this.state.counter} times!
        </button>
      </div>
    )
  }
}
