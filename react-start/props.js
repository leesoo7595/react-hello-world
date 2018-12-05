class HelloWorld extends React.Component {
  render() {
    return React.createElement(
      'h1',
      this.props, // 모든 속성을 자식 엘리먼트에(h1) 전달(id, title)
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
      languageName: 'JAVA', // languageName은 h1의 HTML 표준속성이 아니므로 렌더링하지 않는다.
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
