"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorOption2 = _interopRequireDefault(require("./color-option"));

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

require("./simple-color-picker.scss");

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
 * A component that displays squares with color samples that
 * you can choose from.
 *
 * == How to use a SimpleColorPicker in a component:
 *
 *   import SimpleColorPicker from 'carbon-react/lib/components/simple-color-picker';
 *
 *   <SimpleColorPicker
 *     availableColors={ ['transparent', '#ff0102', '#34ff01'] }
 *     selectedColor='#34ff01'
 *     name='settings[color_of_something]'
 *   />
 *
 */
var SimpleColorPicker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SimpleColorPicker, _React$Component);

  function SimpleColorPicker() {
    _classCallCheck(this, SimpleColorPicker);

    return _possibleConstructorReturn(this, _getPrototypeOf(SimpleColorPicker).apply(this, arguments));
  }

  _createClass(SimpleColorPicker, [{
    key: "_isOptionChecked",
    value: function _isOptionChecked(color) {
      return this.props.selectedColor === color;
    }
    /**
     * Returns a ColorOption component for a given color.
     *
     * @method colorOption
     * @private
     * @return {Object} JSX
     */

  }, {
    key: "_colorOption",
    value: function _colorOption(color) {
      var isChecked = this._isOptionChecked(color);

      return _react.default.createElement(_colorOption2.default, {
        name: this.props.name,
        onChange: this.props.onChange,
        color: color,
        checked: isChecked,
        key: color
      });
    }
    /**
     * Returns ColorOption components for all available colors.
     *
     * @method colorOptions
     * @private
     * @return {Object} JSX
     */

  }, {
    key: "render",

    /**
     * Renders the component.
     *
     * @method render
     * @return {Object} JSX
     */
    value: function render() {
      return _react.default.createElement("div", _extends({
        className: "carbon-simple-color-picker"
      }, (0, _tags.default)('simple-color-picker', this.props)), _react.default.createElement("ul", {
        className: "carbon-simple-color-picker__color-options"
      }, this._colorOptions));
    }
  }, {
    key: "_colorOptions",
    get: function get() {
      var _this = this;

      return this.props.availableColors.map(function (color) {
        return _this._colorOption(color);
      });
    }
  }]);

  return SimpleColorPicker;
}(_react.default.Component);

_defineProperty(SimpleColorPicker, "propTypes", {
  /**
   * an array with all available colors that will be shown it the color picker.
   *
   * @property availableColors
   * @type {Array}
   */
  availableColors: _propTypes.default.array,

  /**
   * the value of the currently selected color.
   *
   * @property selectedColor
   * @type {String}
   */
  selectedColor: _propTypes.default.string,

  /**
   * the name of the input element.
   *
   * @property name
   * @type {String}
   */
  name: _propTypes.default.string,

  /**
   * a callback when the user changes the selected color.
   *
   * @property onChange
   * @type {Function}
   */
  onChange: _propTypes.default.func
});

_defineProperty(SimpleColorPicker, "defaultProps", {
  availableColors: [],
  selectedColor: '',
  name: '',
  onChange: null
  /**
   * Returns true if the color passed as argument is currently
   * checked.
   *
   * @method isOptionChecked
   * @private
   * @return {Boolean}
   */

});

var _default = SimpleColorPicker;
exports.default = _default;