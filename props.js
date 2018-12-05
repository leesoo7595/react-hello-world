class HelloWorld extends React.Component {
  render() {
    return React.createElement(
      'h1',
      null,
      'Hello ' + this.props.languageName + ' world!'
    )
  }
}

ReactDOM.render(
  React.createElement(
    'div',
    null,
    React.createElement(HelloWorld, {
      id: 'java',
      languageName: 'JAVA',
      title: 'Best Feature of Java is OOP'
    }),
    React.createElement(HelloWorld, {
      id: 'python',
      languageName: 'PYTHON',
      title: 'Python is also OOP language'
    }),
    React.createElement(HelloWorld, {
      id: 'JavaScript',
      languageName: 'JavaScript',
      title: 'JavaScript is not strict language'
    })
  ),
  document.getElementById('content')
)
