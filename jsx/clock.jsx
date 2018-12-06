class Clock extends React.Component {
  // currentTime 속성 초기 상태 설정
  constructor(props) {
    super(props)
    // launchClock() 실행
    this.launchClock()
    // 초기 상태에 현재 시작 추가
    this.state = {currentTime: (new Date()).toLocaleString('en')}
  }
  // 1초마다 상태 갱신하는 launchClock함수
  launchClock() {
    setInterval(() => {
      console.log('Updating time...')
      this.setState({
        currentTime: (new Date()).toLocaleString('en')
      })
    }, 1000)
  }
  render() {
    console.log('Rendering Clock...')
    return <div>
      <AnalogDisplay time={this.state.currentTime}/>
      <DigitalDisplay time={this.state.currentTime}/>
    </div>
  }
}

ReactDOM.render(
  <Clock/>,
  document.getElementById('content')
)
