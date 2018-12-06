// 안티패턴
// const DigitalDisplay = function(props) {
//   return <div>{DigitalDisplay.locale(props.time)}</div>
// }
// DigitalDisplay.local = (time) => {
//   return <div>{DigitalDisplay.locale(props.time)}</div>
// }

// 모범 패턴
const DigitalDisplay = function(props) {
  const locale = time => (new Date(time)).toLocaleString('EU')
  return <div>{locale(props.time)}</div>
}

ReactDOM.render(
  <DigitalDisplay/>,
  document.getElementById('content')
)
