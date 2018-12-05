'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var helloWorldReactElement = React.createElement(
  'h1',
  null,
  'Hello World!'
);

var HelloWorld = function (_React$Component) {
  _inherits(HelloWorld, _React$Component);

  function HelloWorld() {
    _classCallCheck(this, HelloWorld);

    return _possibleConstructorReturn(this, (HelloWorld.__proto__ || Object.getPrototypeOf(HelloWorld)).apply(this, arguments));
  }

  _createClass(HelloWorld, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'h1',
        this.props,
        'Hello ',
        this.props.fruitName,
        ' world!'
      );
    }
  }]);

  return HelloWorld;
}(React.Component);

var ProfileLink = function (_React$Component2) {
  _inherits(ProfileLink, _React$Component2);

  function ProfileLink() {
    _classCallCheck(this, ProfileLink);

    return _possibleConstructorReturn(this, (ProfileLink.__proto__ || Object.getPrototypeOf(ProfileLink)).apply(this, arguments));
  }

  _createClass(ProfileLink, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'a',
        { href: this.props.url,
          title: this.props.label,
          target: '_blank' },
        'Profile'
      );
    }
  }]);

  return ProfileLink;
}(React.Component);

var Content = function (_React$Component3) {
  _inherits(Content, _React$Component3);

  function Content() {
    _classCallCheck(this, Content);

    return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
  }

  _createClass(Content, [{
    key: 'getUrl',
    value: function getUrl() {
      return 'http://www.naver.com';
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          null,
          'Your REST API URL is: ',
          React.createElement(
            'a',
            { href: this.getUrl() },
            this.getUrl()
          )
        )
      );
    }
  }]);

  return Content;
}(React.Component);

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));
