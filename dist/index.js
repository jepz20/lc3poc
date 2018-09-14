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

      fetch("http://www.omdbapi.com/?s=".concat(this.state.title, "&apikey=27defc43")).then(function (res) {
        return res.json();
      }).then(function () {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            data = _ref.Search;

        console.log(data, 'DATA');

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
    key: "handleSelected",
    value: function handleSelected(data) {
      if (this.state.selected && this.state.selected.imdbID === data.imdbID) {
        this.setState({
          selected: null
        });
        return;
      }

      this.setState({
        selected: data
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props$user = this.props.user,
          user = _this$props$user === void 0 ? {} : _this$props$user;
      var cellStyle = {
        textAlign: 'left',
        padding: '0.25em'
      };
      var headerStyle = {
        color: '#2e3061',
        fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Helvetica", "Arial", sans-serif',
        fontSize: '40px',
        fontWeight: '700'
      };
      var popStyle = {
        position: 'fixed',
        height: '100%',
        width: '300px',
        top: 0,
        right: 30,
        backgroundColor: 'grey',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      };
      return _react.default.createElement("div", {
        style: {
          margin: '50px'
        }
      }, _react.default.createElement("h1", {
        style: headerStyle
      }, this.state.name), _react.default.createElement("div", {
        style: {
          margin: '10px 0 10px',
          border: '1px solid black'
        }
      }, _react.default.createElement("h3", null, "USER"), _react.default.createElement("div", null, "Name: ".concat(user.name)), _react.default.createElement("div", null, "Email: ".concat(user.email))), _react.default.createElement("input", {
        value: this.state.title,
        onChange: function onChange(_ref2) {
          var target = _ref2.target;
          return _this3.setState({
            title: target.value
          });
        },
        onKeyPress: function onKeyPress(e) {
          return e && e.key === 'Enter' && _this3.doFetch();
        },
        name: "search"
      }), _react.default.createElement("table", {
        style: {
          width: '100%'
        }
      }, _react.default.createElement("tbody", null, _react.default.createElement("tr", null, _react.default.createElement("th", {
        style: cellStyle
      }, "Title"), _react.default.createElement("th", {
        style: cellStyle
      }, "Release Year"), _react.default.createElement("th", {
        style: cellStyle
      }, "Type")), this.state.data && this.state.data.map(function (data) {
        return _react.default.createElement("tr", {
          key: data.imdbID,
          onClick: function onClick() {
            return _this3.handleSelected(data);
          }
        }, _react.default.createElement("td", {
          style: cellStyle
        }, data.Title), _react.default.createElement("td", {
          style: cellStyle
        }, data.Year), _react.default.createElement("td", {
          style: cellStyle
        }, data.Type));
      }))), this.state.selected && _react.default.createElement("div", {
        style: popStyle
      }, _react.default.createElement("div", {
        style: headerStyle
      }, this.state.selected.Title), _react.default.createElement("img", {
        src: this.state.selected.Poster,
        alt: "sample"
      })), this.state.error && _react.default.createElement("div", null, "Ooops! something bad happen :/"));
    }
  }]);

  return LC3Screen;
}(_react.default.Component);

LC3Screen.propTypes = {
  user: _propTypes.default.object.isRequired
};
var _default = LC3Screen;
exports.default = _default;