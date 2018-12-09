'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mouse = function (_React$Component) {
  _inherits(Mouse, _React$Component);

  function Mouse() {
    _classCallCheck(this, Mouse);

    return _possibleConstructorReturn(this, (Mouse.__proto__ || Object.getPrototypeOf(Mouse)).apply(this, arguments));
  }

  _createClass(Mouse, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          {
            style: { border: '1px solid red' },
            onMouseOverCapture: function (event) {
              console.log('mouse over on capture event');
              console.dir(event, _this2);
            }.bind(this),
            onMouseOver: function (event) {
              console.log('mouse over on bubbling event');
              console.dir(event, _this2);
            }.bind(this) },
          'Open Devtools and move your mouse cursor over here'
        )
      );
    }
  }]);

  return Mouse;
}(React.Component);
