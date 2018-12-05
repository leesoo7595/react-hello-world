let h1 = React.createElement('h1', null, 'Hello world!')

// React 컴포넌트 클래스 정의(이름은 대문자로 시작)
class HelloWorld extends React.Component {
  // element 하나를 반환하는 함수인 render() 메서드 생성
  render() {
    // return 문에는 React element를 반환하도록 구현하여 React 클래스가 render()
    // 를 실행하면 두 개의 <h1> element를 감싼 <div> element를 받을 수 있다.
    return React.createElement('div', null, h1, h1)
  }
}

// React element를 ID가 content인 실제 DOM에 넣어준다.
ReactDOM.render(
  // 첫 번째 인자로 HelloWorld 클래스를 전달하여 element 생성
  // HelloWorld는 객체이다.
  React.createElement(HelloWorld, null),
  // content라는 div에 담기!
  document.getElementById('content')
)
