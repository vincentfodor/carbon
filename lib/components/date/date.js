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

var _i18nJs = _interopRequireDefault(require("i18n-js"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDayPicker = _interopRequireDefault(require("react-day-picker"));

var _moment = _interopRequireDefault(require("react-day-picker/moment"));

require("react-day-picker/lib/style.css");

require("./date.scss");

var _navbar = _interopRequireDefault(require("./navbar"));

var _portal = _interopRequireDefault(require("../portal"));

var _browser = _interopRequireDefault(require("../../utils/helpers/browser"));

var _input = _interopRequireDefault(require("../../utils/decorators/input"));

var _inputLabel = _interopRequireDefault(require("../../utils/decorators/input-label"));

var _inputValidation = _interopRequireDefault(require("../../utils/decorators/input-validation"));

var _inputIcon = _interopRequireDefault(require("../../utils/decorators/input-icon"));

var _events = _interopRequireDefault(require("../../utils/helpers/events"));

var _date2 = _interopRequireDefault(require("../../utils/helpers/date"));

var _date3 = _interopRequireDefault(require("../../utils/validations/date"));

var _chainFunctions = _interopRequireDefault(require("../../utils/helpers/chain-functions"));

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
 * Stores a reference to the current date in the given format,
 * which can be used for default values.
 *
 * @property _today
 * @type {string}
 */
var today = _date2.default.todayFormatted('YYYY-MM-DD');
/**
 * A Date widget.
 *
 * == How to use a Date in a component:
 *
 * In your file
 *
 *   import Date from 'carbon-react/lib/components/Date';
 *
 * To render the Date:
 *
 *   <Date name="myDate" />
 *
 * @class Date
 * @constructor
 * @decorators {Input,InputIcon,InputLabel,InputValidation}
 */


var Date = (0, _input.default)((0, _inputIcon.default)((0, _inputLabel.default)((0, _inputValidation.default)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Date, _React$Component);

  // Required for validProps function
  function Date(args) {
    var _this;

    _classCallCheck(this, Date);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Date).call(this, args));

    _defineProperty(_assertThisInitialized(_this), "_document", document);

    _defineProperty(_assertThisInitialized(_this), "state", {
      /**
       * Sets open state of the datepicker
       *
       * @property open
       * @type {Boolean}
       * @default false
       */
      open: false,

      /**
       * Keeps track of hidden value
       *
       * @property datePickerValue
       * @type {String}
       * @default null
       */
      datePickerValue: null,

      /**
       * Sets the default value of the decimal field
       *
       * @property visibleValue
       * @type {String}
       * @default value
       */
      visibleValue: _this.formatVisibleValue(_this.props.value)
    });

    _defineProperty(_assertThisInitialized(_this), "datePickerValueChanged", function (prevProps) {
      return _this.blockBlur && _this.props.value && prevProps.value !== _this.props.value;
    });

    _defineProperty(_assertThisInitialized(_this), "emitOnChangeCallback", function (val) {
      var hiddenField = _this.hidden;

      var isValid = _date2.default.isValidDate(val, {
        sanitize: typeof val === 'string'
      });

      hiddenField.value = isValid ? _date2.default.formatDateString(val, _this.hiddenFormat()) : val;

      _this._handleOnChange({
        target: hiddenField
      });
    });

    _defineProperty(_assertThisInitialized(_this), "openDatePicker", function () {
      _this._document.addEventListener('click', _this.closeDatePicker);

      _this.setState({
        open: true
      });

      if (_date2.default.isValidDate(_this.props.value)) {
        _this.setState({
          datePickerValue: _date2.default.stringToDate(_this.props.value)
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "closeDatePicker", function () {
      _this._document.removeEventListener('click', _this.closeDatePicker);

      _this.setState({
        open: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateVisibleValue", function () {
      var date = _this.formatVisibleValue(_this.props.value);

      _this.setState({
        visibleValue: date
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleVisibleInputChange", function (ev) {
      var input = _date2.default.sanitizeDateInput(ev.target.value),
          validDate = _date2.default.isValidDate(input),
          newState = {
        visibleValue: ev.target.value
      }; // Updates the hidden value after first formatting to default hidden format


      if (validDate) {
        var hiddenValue = _date2.default.formatValue(input, _this.hiddenFormat());

        newState.datePickerValue = _date2.default.stringToDate(hiddenValue);

        if (_this.datepicker && _this.monthOrYearHasChanged(newState.datePickerValue)) {
          _this.datepicker.showMonth(newState.datePickerValue);
        }

        _this.emitOnChangeCallback(hiddenValue);
      } else {
        _this.emitOnChangeCallback(ev.target.value);
      }

      _this.setState(newState);
    });

    _defineProperty(_assertThisInitialized(_this), "monthOrYearHasChanged", function (newDate) {
      var currentDate = _this.datepicker.state.currentMonth;
      return currentDate.getMonth() !== newDate.getMonth() || currentDate.getYear() !== newDate.getYear();
    });

    _defineProperty(_assertThisInitialized(_this), "handleWidgetClick", function (ev) {
      ev.nativeEvent.stopImmediatePropagation();
    });

    _defineProperty(_assertThisInitialized(_this), "handleDateSelect", function (val, modifiers) {
      if (modifiers.disabled) {
        return;
      }

      _this.blockBlur = true;

      _this.closeDatePicker();

      _this._handleContentChange();

      _this.emitOnChangeCallback(val);

      _this.updateVisibleValue();
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function () {
      _this.updateVisibleValue();

      if (_this.props.onBlur) {
        _this.props.onBlur();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function () {
      if (_this.blockFocus) {
        _this.blockFocus = false;
      } else {
        _this.openDatePicker();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (ev) {
      if (_events.default.isTabKey(ev)) {
        _this.closeDatePicker();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateDatePickerPosition", function () {
      _this.setState({
        containerStyle: _this.containerStyle
      });
    });

    _this.window = _browser.default.getWindow();
    return _this;
  }
  /**
   * Manually focus if autoFocus is applied - allows us to prevent the list from opening.
   *
   * @method componentDidMount
   */


  _createClass(Date, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoFocus) {
        this.blockFocus = true;

        this._input.focus();
      }
    }
    /**
     * A lifecycle method to update the visible value with a formatted version,
     * only when the field is not the active element.
     *
     * @method componentWillReceiveProps
     * @param {Object} nextProps The new props passed down to the component
     * @return {void}
     */

  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this._document.activeElement !== this._input) {
        var date = this.formatVisibleValue(nextProps.value);
        this.setState({
          visibleValue: date
        });
      }
    }
    /**
     * A lifecycle method to check whether the component has been updated
     *
     * @method componentDidUpdate
     * @param {Object} prevProps The previous props passed down to the component
     * @return {void}
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.datePickerValueChanged(prevProps)) {
        this.blockBlur = false;

        this._handleBlur();
      }
    }
    /**
     *  Checks that the datepicker selected value has changed
     *
     * @method datePickerValueChanged
     * @param {Object} prevProps The previous props passed down to the component
     * @return {Boolean}
     */

  }, {
    key: "disabledDays",

    /**
    * Returns the disabled array of days specified by props maxDate and minDate
    *
    * @method disabledDays
    * @return {Array}
    */
    value: function disabledDays() {
      if (!this.props.minDate && !this.props.maxDate) {
        return null;
      }

      var days = [];

      if (this.props.minDate) {
        days.push({
          before: _date2.default.stringToDate(this.props.minDate)
        });
      }

      if (this.props.maxDate) {
        days.push({
          after: _date2.default.stringToDate(this.props.maxDate)
        });
      }

      return days;
    }
    /**
    * A getter that returns datepicker specific props
    *
    * @method datePickerProps
    * @return {Object}
    */

  }, {
    key: "getInputBoundingRect",

    /**
     * Returns the bounding rect for the input
     *
     * @method getInputBoundingRect
     * @return {Object}
     */
    value: function getInputBoundingRect() {
      return this._input.getBoundingClientRect();
    }
    /**
     * Returns the style for the DayPicker container
     *
     * @method containerStyle
     * @return {Object}
     */

  }, {
    key: "renderDatePicker",

    /**
     * Returns the DayPicker component
     *
     * @method renderDatePicker
     * @return {Object} JSX
     */
    value: function renderDatePicker() {
      return this.state.open && _react.default.createElement(_portal.default, {
        onReposition: this.updateDatePickerPosition
      }, _react.default.createElement(_reactDayPicker.default, _extends({}, this.datePickerProps, {
        containerProps: this.containerProps
      })));
    }
  }, {
    key: "renderHiddenInput",
    value: function renderHiddenInput() {
      var _this2 = this;

      return _react.default.createElement("input", _extends({}, this.hiddenInputProps, {
        ref: function ref(node) {
          _this2.hidden = node;
        }
      }));
    }
    /**
     * Renders the component.
     *
     * @method render
     * @return {Object} JSX
     */

  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", _extends({
        className: this.mainClasses,
        onClick: this.handleWidgetClick
      }, (0, _tags.default)('date', this.props)), this.labelHTML, this.inputHTML, this.renderHiddenInput(), this.renderDatePicker(), this.fieldHelpHTML);
    }
    /**
    * Formats the visible date using i18n
    *
    * @method visibleFormat
    * @return {String} formatted date string
    */

  }, {
    key: "visibleFormat",
    value: function visibleFormat() {
      return _i18nJs.default.t('date.formats.javascript', {
        defaultValue: 'DD/MM/YYYY'
      }).toUpperCase();
    }
    /**
     * Sets the hidden format
     *
     * @method hiddenFormat
     * @return {String} formatted date string
     */

  }, {
    key: "hiddenFormat",
    value: function hiddenFormat() {
      return 'YYYY-MM-DD';
    }
    /**
     * Adds delimiters to the value
     *
     * @method formatVisibleValue
     * @param {String} value Unformatted Value
     * @return {String} formatted visible value
     */

  }, {
    key: "formatVisibleValue",
    value: function formatVisibleValue(value) {
      // Don't sanitize so it accepts the hidden format (with dash separators)
      return _date2.default.formatValue(value || today, this.visibleFormat(), {
        formats: this.hiddenFormat(),
        sanitize: false
      });
    }
  }, {
    key: "inputProps",

    /**
     * A getter that combines props passed down from the input decorator with
     * date specific props.
     *
     * @method inputProps
     * @return {Object} props for the visible input
     */
    get: function get() {
      var _validProps = (0, _ether.validProps)(this),
          props = Object.assign({}, _validProps);

      props.className = this.inputClasses;
      props.onChange = this.handleVisibleInputChange;
      props.onBlur = this.handleBlur;
      props.value = this.state.visibleValue;
      props.onKeyDown = this.handleKeyDown;
      props.disabled = this.props.disabled;
      props.readOnly = this.props.readOnly;
      delete props.autoFocus;
      delete props.internalValidations;

      if (!this.props.readOnly && !this.props.disabled) {
        props.onFocus = (0, _chainFunctions.default)(this.handleFocus, props.onFocus);
      }

      return props;
    }
    /**
     * A getter for hidden input props.
     *
     * @method hiddenInputProps
     * @return {Object} props for the hidden input
     */

  }, {
    key: "hiddenInputProps",
    get: function get() {
      var props = {
        ref: 'hidden',
        type: 'hidden',
        readOnly: true,
        'data-element': 'hidden-input',
        value: _date2.default.formatValue(this.props.value, this.hiddenFormat())
      };
      return props;
    }
    /**
     * Uses the mainClasses method provided by the decorator to add additional classes
     *
     * @method mainClasses
     * @return {String} Main className
     */

  }, {
    key: "mainClasses",
    get: function get() {
      return 'carbon-date';
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
      return 'carbon-date__input';
    }
    /**
     * Extends the input content to include the input icon.
     *
     * @method additionalInputContent
     * @return {Object} JSX additional content inline with input
     */

  }, {
    key: "additionalInputContent",
    get: function get() {
      if (!this.state.valid) {
        return this.inputIconHTML('error');
      }

      if (this.state.warning) {
        return this.inputIconHTML('warning');
      }

      if (this.state.info) {
        return this.inputIconHTML('info');
      }

      return this.inputIconHTML('calendar');
    }
  }, {
    key: "datePickerProps",
    get: function get() {
      var _this3 = this;

      var date = this.state.datePickerValue;

      if (!date) {
        date = this.props.value;
      }

      return {
        disabledDays: this.disabledDays(),
        enableOutsideDays: true,
        fixedWeeks: true,
        initialMonth: this.state.datePickerValue || _date2.default.stringToDate(date),
        inline: true,
        locale: _i18nJs.default.locale,
        localeUtils: _moment.default,
        navbarElement: _react.default.createElement(_navbar.default, null),
        onDayClick: this.handleDateSelect,
        ref: function ref(input) {
          _this3.datepicker = input;
        },
        selectedDays: [this.state.datePickerValue]
      };
    }
    /**
     * Updates the containerStyle state
     *
     * @method updateDatePickerPosition
     * @return {Void}
     */

  }, {
    key: "containerStyle",
    get: function get() {
      var inputRect = this.getInputBoundingRect();
      var offsetY = window.pageYOffset;
      return {
        left: inputRect.left,
        top: inputRect.bottom + offsetY
      };
    }
    /**
     * Returns the props for the DayPicker container
     *
     * @method containerProps
     * @return {Object}
     */

  }, {
    key: "containerProps",
    get: function get() {
      return {
        style: this.state.containerStyle,
        onClick: this.handleWidgetClick
      };
    }
  }]);

  return Date;
}(_react.default.Component), _defineProperty(_class, "propTypes", {
  /**
   * Automatically focus on component mount
   *
   * @property autoFocus
   * @type {Boolean}
  */
  autoFocus: _propTypes.default.bool,

  /**
   * Disable all user interaction.
   *
   * @property disabled
   * @type {boolean}
   */
  disabled: _propTypes.default.bool,

  /**
   * Used to provide additional validations on composed components.
   *
   * @property internalValidations
   * @type {Array}
   */
  internalValidations: _propTypes.default.array,

  /**
   * Minimum possible date
   *
   * @property minDate
   * @type {String}
   */
  minDate: _propTypes.default.string,

  /**
   * Maximum possible date
   *
   * @property maxDate
   * @type {String}
   */
  maxDate: _propTypes.default.string,

  /**
   * Specify a callback triggered on blur
   *
   * @property onBlur
   * @type {Function}
   */
  onBlur: _propTypes.default.func,

  /**
   * Display the currently selected value without displaying the input
   *
   * @property readOnly
   * @type {Boolean}
   */
  readOnly: _propTypes.default.bool,

  /**
   * The current date
   *
   * @property value
   * @type {String}
   */
  value: _propTypes.default.string
}), _defineProperty(_class, "defaultProps", {
  /**
   * Sets the default value of the date field
   *
   * @property value
   * @type {String}
   * @default Today's date
   */
  value: today,

  /**
  * Sets validations that should always be found on the component
  *
  * @property internalValidations
  * @type {Array}
  * @default DateValidator
  */
  internalValidations: [new _date3.default()]
  /**
   * Stores the document - allows us to override it different contexts, such as
   * when running tests.
   *
   * @property _document
   * @type {document}
   */

}), _temp)))));
var _default = Date;
exports.default = _default;