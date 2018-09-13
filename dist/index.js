"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LC3Screen =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LC3Screen, _React$Component);

  function LC3Screen(props) {
    var _this;

    _classCallCheck(this, LC3Screen);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LC3Screen).call(this, props));
    _this.state = {
      name: 'LC3',
      data: undefined,
      title: 'simpsons',
      err: undefined
    };
    return _this;
  }

  _createClass(LC3Screen, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.doFetch();
    }
  }, {
    key: "doFetch",
    value: function doFetch() {
      var _this2 = this;

      fetch("http://www.omdbapi.com/?t=".concat(this.state.title, "&apikey=27defc43")).then(function (res) {
        return res.json();
      }).then(function (data) {
        _this2.setState({
          data: data,
          err: null
        });
      }).catch(function (err) {
        _this2.setState({
          err: err,
          data: null
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          Input = _this$props.Input,
          Image = _this$props.Image,
          _this$props$user = _this$props.user,
          user = _this$props$user === void 0 ? {} : _this$props$user;
      return _react.default.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }
      }, _react.default.createElement("h1", null, this.state.name), _react.default.createElement("div", null, _react.default.createElement("h3", null, "USER"), _react.default.createElement("div", null, "Name: ".concat(user.name)), _react.default.createElement("div", null, "Email: ".concat(user.email))), _react.default.createElement("input", {
        value: this.state.title,
        onChange: function onChange(_ref) {
          var target = _ref.target;
          return _this3.setState({
            title: target.value
          });
        },
        onKeyPress: function onKeyPress(e) {
          return e && e.key === 'Enter' && _this3.doFetch();
        },
        name: "search"
      }), this.state.data && _react.default.createElement("div", null, _react.default.createElement("div", null, "Title: ".concat(this.state.data.Title)), _react.default.createElement("div", null, "Release Year: ".concat(this.state.data.Year)), _react.default.createElement("img", {
        src: this.state.data.Poster,
        alt: "poster"
      })), this.state.error && _react.default.createElement("div", null, "Ooops! something bad happen :/"));
    }
  }]);

  return LC3Screen;
}(_react.default.Component);

LC3Screen.propTypes = {
  Input: _propTypes.default.func.isRequired,
  Image: _propTypes.default.func.isRequired,
  user: _propTypes.default.object.isRequired
};
var _default = LC3Screen;
exports.default = _default;