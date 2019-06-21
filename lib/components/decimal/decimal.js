"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.function.name");

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

var _i18n = _interopRequireDefault(require("../../utils/helpers/i18n"));

var _input = _interopRequireDefault(require("../../utils/decorators/input"));

var _inputLabel = _interopRequireDefault(require("../../utils/decorators/input-label"));

var _inputValidation = _interopRequireDefault(require("../../utils/decorators/input-validation"));

var _ether = require("../../utils/ether");

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

var _logger = _interopRequireDefault(require("../../utils/logger"));

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
 * A decimal widget.
 *
 * == How to use a Decimal in a component:
 *
 * In your file
 *
 *   import Decimal from 'carbon-react/lib/components/decimal';
 *
 * To render the Decimal:
 *
 *   <Decimal name='myDecimal' />
 *
 * @class Decimal
 * @constructor
 * @decorators {Input,InputLabel,InputValidation}
 */
var Decimal = (0, _input.default)((0, _inputLabel.default)((0, _inputValidation.default)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Decimal, _React$Component);

  function Decimal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Decimal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Decimal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "_document", document);

    _defineProperty(_assertThisInitialized(_this), "highlighted", false);

    _defineProperty(_assertThisInitialized(_this), "verifiedPrecision", function (precision) {
      if (precision > 20) {
        _logger.default.warn('Decimal precision must not be greater than 20.');

        return 20;
      }

      return precision;
    });

    _defineProperty(_assertThisInitialized(_this), "state", {
      /**
       * The formatted value for display
       *
       * @property visibleValue
       * @type {String}
       */
      visibleValue: _i18n.default.formatDecimal(_this.value, _this.verifiedPrecision(_this.props.precision))
    });

    _defineProperty(_assertThisInitialized(_this), "emitOnChangeCallback", function (val) {
      var hiddenField = _this._hiddenInput;
      hiddenField.value = val;

      _this._handleOnChange({
        target: hiddenField
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isValidDecimal", function (value, precision) {
      var format = _i18n.default.format();

      var del = "\\".concat(format.delimiter);
      var sep = "\\".concat(format.separator);
      var regex;

      if (precision > 0) {
        regex = new RegExp("^[-]?\\d*(?:".concat(del, "?\\d?)*").concat(sep, "?\\d{0,").concat(precision, "}$"));
      } else {
        regex = new RegExp("^[-]?\\d*(?:".concat(del, "?\\d?)*$"));
      }

      return regex.test(value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleVisibleInputChange", function (ev) {
      if (_this.isValidDecimal(ev.target.value, _this.verifiedPrecision(_this.props.precision))) {
        _this.setState({
          visibleValue: ev.target.value
        });

        _this.emitOnChangeCallback(_i18n.default.unformatDecimal(ev.target.value));
      } else {
        // reset the value
        ev.target.value = _this.state.visibleValue; // reset the selection range

        ev.target.setSelectionRange(_this.selectionStart, _this.selectionEnd);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function () {
      var currentValue;

      if (canConvertToBigNumber(_this.value)) {
        currentValue = _i18n.default.formatDecimal(_this.value, _this.verifiedPrecision(_this.props.precision));
      } else {
        currentValue = _this.value;
      }

      _this.setState({
        visibleValue: currentValue
      });

      _this.highlighted = false;

      if (_this.value === '') {
        _this.emitOnChangeCallback('0');
      }

      if (_this.props.onBlur) {
        _this.props.onBlur();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnClick", function () {
      // if value is already highlighted then don't re-highlight it
      if (_this.highlighted) {
        _this.highlighted = false;
        return;
      }

      var input = _this._input; // only do it if the selection is not within the value

      if (input.selectionStart === 0 && input.selectionEnd === 0) {
        input.setSelectionRange(0, input.value.length);
        _this.highlighted = true;
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

  _createClass(Decimal, [{
    key: "componentWillReceiveProps",

    /**
     * A lifecycle method to update the visible value with a formatted version,
     * only when the field is not the active element.
     *
     * @method componentWillReceiveProps
     * @param {Object} newProps The new props passed down to the component
     * @return {void}
     */
    value: function componentWillReceiveProps(newProps) {
      if (this._document.activeElement !== this._input) {
        var value = newProps.value || 0.00;

        if (canConvertToBigNumber(value)) {
          value = _i18n.default.formatDecimal(value, this.verifiedPrecision(newProps.precision));
        }

        this.setState({
          visibleValue: value
        });
      }
    }
    /**
     * Callback to update the hidden field on change.
     *
     * @method emitOnChangeCallback
     * @param {String} val The unformatted decimal value
     * @return {void}
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
      var _this2 = this;

      return _react.default.createElement("div", _extends({
        className: this.mainClasses
      }, (0, _tags.default)('decimal', this.props)), this.labelHTML, this.inputHTML, _react.default.createElement("input", _extends({
        ref: function ref(h) {
          _this2._hiddenInput = h;
        }
      }, this.hiddenInputProps)), this.validationHTML, this.fieldHelpHTML);
    }
  }, {
    key: "value",

    /**
     * Returns the current value or default value.
     *
     * @method value
     * @return {String}
     */
    get: function get() {
      return this.props.value || getDefaultValue(this);
    }
    /**
     * A getter that combines props passed down from the input decorator with
     * textbox specific props.
     *
     * @method inputProps
     * @return {Object} props to apply to input field
     */

  }, {
    key: "inputProps",
    get: function get() {
      var _validProps = (0, _ether.validProps)(this),
          props = Object.assign({}, _validProps);

      props.className = this.inputClasses;
      props.name = null;
      props.onBlur = this.handleBlur;
      props.onChange = this.handleVisibleInputChange;
      props.onClick = this.handleOnClick;
      props.onKeyDown = this.handleKeyDown;
      props.value = this.state.visibleValue;
      return props;
    }
    /**
     * A getter for hidden input props.
     *
     * @method hiddenInputProps
     * @return {Object} props to apply to hidden field
     */

  }, {
    key: "hiddenInputProps",
    get: function get() {
      return {
        name: this.props.name,
        readOnly: true,
        type: 'hidden',
        value: this.props.value,
        'data-element': 'hidden-input'
      };
    }
    /**
     * Uses the mainClasses method provided by the decorator to add additional classes.
     *
     * @method mainClasses
     * @return {String} Main className
     */

  }, {
    key: "mainClasses",
    get: function get() {
      return 'carbon-decimal';
    }
    /**
     * Uses the inputClasses method provided by the decorator to add additional classes.
     *
     * @method inputClasses
     * @return {String} Input className
     */

  }, {
    key: "inputClasses",
    get: function get() {
      return 'carbon-decimal__input';
    }
  }]);

  return Decimal;
}(_react.default.Component), _defineProperty(_class, "propTypes", {
  // NB align is used in the Input decorator. Removing the prop from here
  // causes an 'uknown prop align on input tag' error, so the
  // react/no-unused-prop-types has been disabled for this prop

  /**
   * Sets the default value alignment
   *
   * @property align
   * @type {String}
   * @default 'right'
   */
  align: _propTypes.default.string,
  // eslint-disable-line react/no-unused-prop-types

  /**
   * Callback function for when the decimal input
   * field blur event fires.
   *
   * @property onBlur
   * @type {Void}
   */
  onBlur: _propTypes.default.func,

  /**
   * Callback to handle keyDown events.
   *
   * @property onKeyDown
   * @type {Void}
   */
  onKeyDown: _propTypes.default.func,

  /**
   * Sets the precision of the field
   *
   * @property precision
   * @type {Integer}
   * @default 2
   */
  precision: _propTypes.default.number,

  /**
   * The value of the Number input element
   *
   * @property value
   * @type {String}
   */
  value: _propTypes.default.string,

  /**
   * The name of the hidden input element
   *
   * @property name
   * @type {String}
   */
  name: _propTypes.default.string
}), _defineProperty(_class, "defaultProps", {
  align: 'right',
  precision: 2
}), _temp)))); // Private Methods

/**
 * Returns defaultValue for specified scope,
 *
 * @method getDefaultValue
 * @private
 * @param {Object} scope used to get default value of current scope
 * @return {String} default Value
 */

function getDefaultValue(scope) {
  if (typeof scope._hiddenInput !== 'undefined') {
    return scope._hiddenInput.value;
  }

  return scope.props.defaultValue;
}
/**
 * Returns defaultValue for specified scope,
 *
 * @method canConvertToBigNumber
 * @private
 * @param {string} string need to be coverted to BigNumber
 * @return {Boolean}
 */


function canConvertToBigNumber(value) {
  // single `-` sign will raise an exception during formatDecimal()
  // as it cannot be convert to BigNumber()
  return /^-?(\d+(\.\d+)?|\.\d+|\d+\.)$/.test(value);
}

var _default = Decimal;
exports.default = _default;