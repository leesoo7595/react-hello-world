let helloWorldReactElement = <h1>Hello World!</h1>

class HelloWorld extends React.Component {
  render () {
    return <div>
      {helloWorldReactElement}
      {helloWorldReactElement}
    </div>
  }
}

class ProfileLink extends React.Component {
  render() {
    return <a href={this.props.url}
      title={this.props.label}
      target="_blank">Profile
    </a>
  }
}

ReactDOM.render(
  <ProfileLink url='http://www.naver.com' label='Profile for naver'/>,
  document.getElementById('content')
)
