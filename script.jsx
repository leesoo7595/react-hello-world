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

ReactDOM.render(
  <div>
    <HelloWorld
      id='apple'
      fruitName='APPLE'
      title='Delicious Red Fruit' />,
    <HelloWorld
      id='grape'
      fruitName='Grape'
      title='Delicious Purple Fruit' />,
    <HelloWorld
      id='orange'
      fruitName='Orange'
      title='Delicious Orange Fruit' />
  </div>,
  document.getElementById('content')
)
