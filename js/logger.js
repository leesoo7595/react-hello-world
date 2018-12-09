'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Logger = function (_React$Component) {
  _inherits(Logger, _React$Component);

  function Logger(props) {
    _classCallCheck(this, Logger);

    var _this = _possibleConstructorReturn(this, (Logger.__proto__ || Object.getPrototypeOf(Logger)).call(this, props));

    console.log('constructor');
    return _this;
  }

  _createClass(Logger, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      console.log('componentWillMount 실행');
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount(e) {
      console.log('componentDidMount 실행');
      console.log('DOM node: ', ReactDOM.findDOMNode(this));
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      console.log('componentWillReceiveProps 실행');
      console.log('새로운 속성 : ', newProps);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(newProps, newState) {
      console.log('shouldComponentUpdate 실행');
      console.log('새로운 속성 :', newProps);
      console.log('새로운 상태 :', newState);
      return true;
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(newProps, newState) {
      console.log('componentWillUpdate 실행');
      console.log('새로운 속성 :', newProps);
      console.log('새로운 상태 :', newState);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(oldProps, oldState) {
      console.log('componentDidUpdate 실행');
      console.log('이전 속성 :', oldProps);
      console.log('이전 상태 :', oldState);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log('componentWillUnmount');
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('rendering...Display');
      return React.createElement(
        'div',
        null,
        this.props.time
      );
    }
  }]);

  return Logger;
}(React.Component);
