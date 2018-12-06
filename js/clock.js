'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Clock = function (_React$Component) {
  _inherits(Clock, _React$Component);

  // currentTime 속성 초기 상태 설정
  function Clock(props) {
    _classCallCheck(this, Clock);

    // launchClock() 실행
    var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

    _this.launchClock();
    // 초기 상태에 현재 시작 추가
    _this.state = { currentTime: new Date().toLocaleString('en') };
    return _this;
  }
  // 1초마다 상태 갱신하는 launchClock함수


  _createClass(Clock, [{
    key: 'launchClock',
    value: function launchClock() {
      var _this2 = this;

      setInterval(function () {
        console.log('Updating time...');
        _this2.setState({
          currentTime: new Date().toLocaleString('en')
        });
      }, 1000);
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('Rendering Clock...');
      return React.createElement(
        'div',
        null,
        React.createElement(AnalogDisplay, { time: this.state.currentTime }),
        React.createElement(DigitalDisplay, { time: this.state.currentTime })
      );
    }
  }]);

  return Clock;
}(React.Component);

ReactDOM.render(React.createElement(Clock, null), document.getElementById('content'));
