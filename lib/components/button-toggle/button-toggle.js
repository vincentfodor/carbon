"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

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

var _classnames = _interopRequireDefault(require("classnames"));

var _icon = _interopRequireDefault(require("../icon"));

var _input = _interopRequireDefault(require("../../utils/decorators/input"));

var _ether = require("../../utils/ether");

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

require("./button-toggle.scss");

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

var ButtonToggle = (0, _input.default)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ButtonToggle, _React$Component);

  function ButtonToggle() {
    _classCallCheck(this, ButtonToggle);

    return _possibleConstructorReturn(this, _getPrototypeOf(ButtonToggle).apply(this, arguments));
  }

  _createClass(ButtonToggle, [{
    key: "render",

    /**
     * @method render
     * @return {Object} JSX
     */
    value: function render() {
      return _react.default.createElement("div", _extends({
        className: this.mainClasses
      }, (0, _tags.default)('button-toggle', this.props)), this.inputHTML);
    }
  }, {
    key: "mainClasses",
    get: function get() {
      return (0, _classnames.default)('carbon-button-toggle', "carbon-button-toggle--".concat(this.props.size), {
        'carbon-button-toggle--grouped': this.props.grouped
      });
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
      return (0, _classnames.default)('carbon-button-toggle__input');
    }
    /**
     * Returns the markup for the buttonIcon.
     *
     * @method buttonIcon
     * @return {Object} JSX
     */

  }, {
    key: "buttonIcon",
    get: function get() {
      if (!this.props.buttonIcon) {
        return null;
      }

      var classes = (0, _classnames.default)('carbon-button-toggle__button-icon', {
        'carbon-button-toggle__button-icon--large': this.props.buttonIconSize === 'large'
      });
      return _react.default.createElement("div", {
        className: classes,
        "data-element": "icon"
      }, _react.default.createElement(_icon.default, {
        type: this.props.buttonIcon
      }));
    }
    /**
     * A getter that combines props passed down from the input decorator with
     * textbox specific props.
     *
     * @method inputProps
     * @return {Object} props for the input
     */

  }, {
    key: "inputProps",
    get: function get() {
      var _validProps = (0, _ether.validProps)(this),
          props = Object.assign({}, _validProps);

      delete props.children;
      props.className = 'carbon-button-toggle__input';
      props.type = 'radio';

      if (!props.id) {
        props.id = this._guid;
      }

      return props;
    }
    /**
     * Returns additional content to sit inline with the input.
     *
     * @method additionalInputContent
     * @return {Object} JSX
     */

  }, {
    key: "additionalInputContent",
    get: function get() {
      var classes = (0, _classnames.default)('carbon-button-toggle__label', {
        'carbon-button-toggle__label--disabled': this.props.disabled
      });
      return _react.default.createElement("label", {
        htmlFor: this.inputProps.id,
        className: classes,
        "data-element": "label"
      }, this.buttonIcon, this.props.children);
    }
  }]);

  return ButtonToggle;
}(_react.default.Component), _defineProperty(_class, "propTypes", {
  /**
   * Which buttonIcon the button should render.
   *
   * @property buttonIcon
   * @type {String}
   */
  buttonIcon: _propTypes.default.string,

  /**
   * Sets the size of the buttonIcon (eg. large)
   *
   * @property buttonIconSize
   * @type {String}
   */
  buttonIconSize: _propTypes.default.string,

  /**
   * Sets the size of the button (eg. large)
   *
   * @property size
   * @type {String}
   */
  size: _propTypes.default.string,

  /**
   * remove spacing from inbetween buttons
   *
   * @property grouped
   * @type {boolean}
   */
  grouped: _propTypes.default.bool,

  /**
   * Disable all user interaction.
   *
   * @property disabled
   * @type {boolean}
   */
  disabled: _propTypes.default.bool,

  /**
   * A required prop. This is what the button will display.
   *
   * @property children
   * @type {Multiple}
   */
  children: _propTypes.default.node.isRequired
}), _defineProperty(_class, "safeProps", ['name']), _defineProperty(_class, "defaultProps", {
  size: 'large'
  /**
   * Main Class getter
   *
   * @method mainClasses
   * @return {void}
   */

}), _temp));
var _default = ButtonToggle;
exports.default = _default;