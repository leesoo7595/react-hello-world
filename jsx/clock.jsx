class Clock extends React.Component {
  // currentTime 속성 초기 상태 설정
  constructor(props) {
    super(props)
    this.state = {currentTime: (new Date()).toLocaleString('en')}
  }
  render() {
    return <div>{this.state.currentTime}</div>
  }
}

ReactDOM.render(
  <Clock/>,
  document.getElementById('content')
)
