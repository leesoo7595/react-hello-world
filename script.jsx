let helloWorldReactElement = <h1>Hello World!</h1>

class HelloWorld extends React.Component {
  render () {
    return <h1 {...this.props}>Hello {this.props.fruitName} world!</h1>
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

class Content extends React.Component {
  getUrl() {
    return 'http://www.naver.com'
  }
  render() {
    return (
      <div>
        <p>Your REST API URL is: <a href={this.getUrl()}>{this.getUrl()}</a></p>
      </div>
    )
  }
}

ReactDOM.render(
  <Content/>,
  document.getElementById('content')
)
