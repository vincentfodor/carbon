"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.replace");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _inputPresentation = require("./input-presentation.component");

require("./input.style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// This is a component in progress to incrementally remove the reliance
// on the input decorators. For now we still rely on inputProps being
// fed into this component from the decorated parent component if you want
// to use the full supported feature set of a Carbon component. Over time we
// will add additional supported on the decorated features without the need
// for the decorators themselves.
// Switch the old class for the new one until we refactor out the input decorators
var classNamesForInput = function classNamesForInput(className) {
  return className ? className.replace('common-input__input', 'carbon-input') : 'carbon-input';
};

var selectTextOnFocus = function selectTextOnFocus(input) {
  // setTimeout is required so the dom has a chance to place the cursor in the input
  setTimeout(function () {
    var length = input.current.value.length;
    var cursorStart = input.current.selectionStart;
    var cursorEnd = input.current.selectionEnd; // only select text if cursor is at the very end or the very start of the value

    if (cursorStart === 0 && cursorEnd === 0 || cursorStart === length && cursorEnd === length) {
      input.current.setSelectionRange(0, length);
    }
  });
};

var Input =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Input)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "input", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (ev) {
      if (_this.props.onClick) _this.props.onClick(ev);

      _this.input.current.focus();
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (ev) {
      if (_this.props.onFocus) _this.props.onFocus(ev);
      if (_this.context && _this.context.onFocus) _this.context.onFocus(ev);
      selectTextOnFocus(_this.input);
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (ev) {
      if (_this.props.onBlur) _this.props.onBlur(ev);
      if (_this.context && _this.context.onBlur) _this.context.onBlur(ev);
    });

    return _this;
  }

  _createClass(Input, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.inputRef) this.props.inputRef(this.input);
      if (this.context && this.context.inputRef) this.context.inputRef(this.input);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          inputRef = _this$props.inputRef,
          props = _objectWithoutProperties(_this$props, ["className", "inputRef"]);

      return _react.default.createElement("input", _extends({}, props, {
        ref: this.input,
        className: classNamesForInput(className),
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onClick: this.handleClick
      }));
    }
  }]);

  return Input;
}(_react.default.Component);

_defineProperty(Input, "propTypes", {
  className: _propTypes.default.string,
  inputRef: _propTypes.default.func,
  // a callback to retrieve the input reference
  onBlur: _propTypes.default.func,
  onClick: _propTypes.default.func,
  onFocus: _propTypes.default.func
});

_defineProperty(Input, "contextType", _inputPresentation.InputPresentationContext);

var _default = Input;
exports.default = _default;