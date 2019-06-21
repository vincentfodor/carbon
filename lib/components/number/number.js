"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.constructor");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _input = _interopRequireDefault(require("../../utils/decorators/input"));

var _inputLabel = _interopRequireDefault(require("../../utils/decorators/input-label"));

var _inputValidation = _interopRequireDefault(require("../../utils/decorators/input-validation"));

var _ether = require("../../utils/ether");

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A number widget. It only allows entering of a whole number with an
 * optional minus sign.
 *
 * == How to use a Number in a component:
 *
 * In your file
 *
 *   import Number from 'carbon-react/lib/components/number';
 *
 * To render a Number:
 *
 *   <Number name="myNumber" />
 *
 * @class Number
 * @constructor
 * @decorators {Input,InputLabel,InputValidation}
 */
var Number = (0, _input.default)((0, _inputLabel.default)((0, _inputValidation.default)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Number, _React$Component);

  function Number() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Number);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Number)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleOnChange", function (ev) {
      if (isValidNumber(ev.target.value)) {
        _this._handleOnChange(ev);
      } else {
        // reset the value
        ev.target.value = _this.props.value || null; // reset the selection range

        ev.target.setSelectionRange(_this.selectionStart, _this.selectionEnd);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (ev) {
      // track the selection start and end
      _this.selectionStart = ev.target.selectionStart;
      _this.selectionEnd = ev.target.selectionEnd;

      if (_this.props.onKeyDown) {
        // we also send the props so more information can be extracted by the action
        _this.props.onKeyDown(ev, _this.props);
      }
    });

    return _this;
  }

  _createClass(Number, [{
    key: "render",

    /**
     * Renders the component.
     *
     * @method render
     * @return {Object} JSX
     */
    value: function render() {
      return _react.default.createElement("div", _extends({
        className: this.mainClasses
      }, (0, _tags.default)('number', this.props)), this.labelHTML, this.inputHTML, this.validationHTML, this.fieldHelpHTML);
    }
  }, {
    key: "mainClasses",
    get: function get() {
      return (0, _classnames.default)('carbon-number', this.props.className);
    }
    /**
     * Input class getter
     *
     * @method inputClasses
     * @return {String} Input className
     */

  }, {
    key: "inputClasses",
    get: function get() {
      return 'carbon-number__input';
    }
    /**
     * Handles Change to input field
     *
     * @method handleOnChange
     * @param {Object} ev event
     * @return {void}
     */

  }, {
    key: "inputProps",

    /**
     * A getter that combines props passed down from the input decorator with
     * number specific props.
     *
     * @method inputProps
     * @return {Object} props for the input
     */
    get: function get() {
      var _validProps = (0, _ether.validProps)(this),
          props = Object.assign({}, _validProps);

      props.className = this.inputClasses;
      props.onChange = this.handleOnChange;
      props.onKeyDown = this.handleKeyDown;
      return props;
    }
  }]);

  return Number;
}(_react.default.Component), _defineProperty(_class, "propTypes", {
  /**
   * A custom class name for the component.
   *
   * @property className
   * @type {String}
   */
  className: _propTypes.default.string,

  /**
   * The value of the Number input element
   *
   * @property value
   * @type {String}
   */
  value: _propTypes.default.string,

  /**
   * Event handler for the keyDown event
   *
   * @property onKeyDown
   * @type {Function}
   */
  onKeyDown: _propTypes.default.func
  /**
   * Main Class getter
   *
   * @method mainClasses
   * @return {String} Main className
   */

}), _temp))));
/**
 * Checks that the given value is valid number.
 *
 * @method isValidNumber
 * @private
 * @param {String} value number to check validity
 * @return {Boolean} true if value is valid number
 */

function isValidNumber(value) {
  var regex = new RegExp('^[-]?[0-9]*$');
  var result = regex.test(value);
  return result;
}

var _default = Number;
exports.default = _default;