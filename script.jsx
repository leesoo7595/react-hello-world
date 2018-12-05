class DateTimeNow extends React.Component {
  render() {
    let dateTimeNow = new Date().toLocaleString()
    return <span>Current date and time is {dateTimeNow}.</span>
  }
}

ReactDOM.render(
  <DateTimeNow/>,
  document.getElementById('content')
)
