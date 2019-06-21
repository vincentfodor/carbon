"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.starts-with");

require("core-js/modules/es.string.trim");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _lodash = require("lodash");

var _icon = _interopRequireDefault(require("../../icon"));

var _input = _interopRequireDefault(require("../../../utils/decorators/input"));

var _tags = _interopRequireDefault(require("../../../utils/helpers/tags"));

require("./color-option.scss");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A single square with a color, implemented as a radio button.
 */
var ColorOption = (0, _input.default)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ColorOption, _React$Component);

  function ColorOption() {
    _classCallCheck(this, ColorOption);

    return _possibleConstructorReturn(this, _getPrototypeOf(ColorOption).apply(this, arguments));
  }

  _createClass(ColorOption, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("li", _extends({
        className: this.mainClasses
      }, (0, _tags.default)('color-option', this.props)), this.inputHTML);
    }
  }, {
    key: "inputProps",
    get: function get() {
      return {
        className: this.inputClasses,
        onChange: this.props.onChange,
        checked: this.props.checked,
        name: this.props.name,
        type: 'radio',
        value: this.props.color
      };
    }
  }, {
    key: "additionalInputContent",
    get: function get() {
      return this.colorSampleBox;
    }
    /**
     * Uses the inputClasses method provided by the decorator to add additional classes.
     *
     * @method inputClasses
     * @return {String} input className
     */

  }, {
    key: "inputClasses",
    get: function get() {
      return 'carbon-color-option__radio-button-input';
    }
  }, {
    key: "mainClasses",
    get: function get() {
      return (0, _classnames.default)('carbon-color-option', this.props.className);
    }
  }, {
    key: "_colorSampleClasses",
    get: function get() {
      var color = (0, _lodash.trim)(this.props.color, '#');
      return (0, _classnames.default)('carbon-color-option__color-sample', "carbon-color-option__color-sample--".concat(color));
    }
  }, {
    key: "_tickedIcon",
    get: function get() {
      return _react.default.createElement(_icon.default, {
        type: "tick",
        className: "carbon-color-option__tick"
      });
    }
  }, {
    key: "_colorSampleStyle",
    get: function get() {
      return (0, _lodash.startsWith)(this.props.color, '#') ? {
        backgroundColor: this.props.color
      } : {};
    }
  }, {
    key: "colorSampleBox",
    get: function get() {
      return _react.default.createElement("div", {
        className: this._colorSampleClasses,
        style: this._colorSampleStyle
      }, this._tickedIcon);
    }
  }]);

  return ColorOption;
}(_react.default.Component), _defineProperty(_class, "propTypes", {
  /**
   * the value of the color that is represented by this ColorOption.
   *
   * @property color
   * @type {String}
   */
  color: _propTypes.default.string,

  /**
   * the input name.
   *
   * @property name
   * @type {String}
   */
  name: _propTypes.default.string,

  /**
   * called when the user selects or deselects this color option.
   *
   * @property onChange
   * @type {Function}
   */
  onChange: _propTypes.default.func,

  /**
   * determines if this color option is selected or unselected.
   *
   * @property checked
   * @type {Boolean}
   */
  checked: _propTypes.default.bool,

  /**
   * Custom className
   *
   * @property className
   * @type {String}
   */
  className: _propTypes.default.string
}), _defineProperty(_class, "defaultProps", {
  checked: false,
  className: '',
  color: '',
  name: '',
  onChange: null
  /**
   * The props used by the Input decorator when creating the input element.
   */

}), _temp));
var _default = ColorOption;
exports.default = _default;