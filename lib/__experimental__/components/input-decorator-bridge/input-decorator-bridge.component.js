"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

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

var _input = _interopRequireDefault(require("../../../utils/decorators/input/input"));

var _inputLabel = _interopRequireDefault(require("../../../utils/decorators/input-label/input-label"));

var _inputValidation = _interopRequireDefault(require("../../../utils/decorators/input-validation/input-validation"));

var _inputIcon = _interopRequireDefault(require("../../../utils/decorators/input-icon/input-icon"));

var _ether = require("../../../utils/ether/ether");

var _tags = _interopRequireDefault(require("../../../utils/helpers/tags"));

var _textbox = _interopRequireDefault(require("../textbox"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// This component creates a bridge between the new Textbox component and the old decorator classes.
// As we remove the decorators, this bridge will become less useful and can be removed.
var InputDecoratorBridge = (0, _input.default)((0, _inputLabel.default)((0, _inputValidation.default)((0, _inputIcon.default)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputDecoratorBridge, _React$Component);

  function InputDecoratorBridge() {
    _classCallCheck(this, InputDecoratorBridge);

    return _possibleConstructorReturn(this, _getPrototypeOf(InputDecoratorBridge).apply(this, arguments));
  }

  _createClass(InputDecoratorBridge, [{
    key: "classes",
    value: function classes() {
      var classes = this.mainClasses;
      if (!this.props.inputIcon) classes = classes.replace('common-input--with-icon', '');
      return classes;
    } // data attributes used for automation

  }, {
    key: "dataAttributes",
    value: function dataAttributes() {
      return (0, _tags.default)(this.props['data-component'], this.props);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$inputProps = this.inputProps,
          className = _this$inputProps.className,
          inputProps = _objectWithoutProperties(_this$inputProps, ["className"]);

      inputProps.inputRef = this.props.inputRef;
      delete inputProps.ref; // ref is added by decorator, but we would like to move away from needing it

      delete inputProps['data-component']; // only apply to wrapper

      if (typeof this.props.formattedValue === 'string') inputProps.value = this.props.formattedValue;
      return _react.default.createElement("div", _extends({}, this.dataAttributes(), {
        className: this.classes()
      }), this.labelHTML, _react.default.createElement("div", this.fieldProps, _react.default.createElement(_textbox.default, _extends({}, inputProps, {
        leftChildren: this.props.leftChildren
      }), this.props.children), this.props.inputIcon && this.inputIconHTML(this.props.inputIcon)), this.validationHTML, this.fieldHelpHTML);
    }
  }, {
    key: "inputProps",
    get: function get() {
      return (0, _ether.validProps)(this);
    }
  }]);

  return InputDecoratorBridge;
}(_react.default.Component), _defineProperty(_class, "propTypes", {
  children: _propTypes.default.node,
  // optional: will add additional child elements after the input (eg. icons)
  leftChildren: _propTypes.default.node,
  // optional: will add additional child elements before the input
  inputIcon: _propTypes.default.string,
  // optional: hooks into the InputIcon decorator to add a button to the input
  formattedValue: _propTypes.default.string,
  // optional: will display this in the input instead value
  inputRef: _propTypes.default.func,
  // optional: a callback to retrieve the input reference
  'data-component': _propTypes.default.string // optional: helpful for automation
  // this method is required as part of the InputDecorator API

}), _temp)))));
var _default = InputDecoratorBridge;
exports.default = _default;