"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

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

var _i18nJs = _interopRequireDefault(require("i18n-js"));

var _lodash = require("lodash");

var _classnames = _interopRequireDefault(require("classnames"));

var _date = _interopRequireDefault(require("../date"));

var _dateRange = _interopRequireDefault(require("../../utils/validations/date-range"));

var _date2 = _interopRequireDefault(require("../../utils/helpers/date"));

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

require("./date-range.scss");

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

var DateRange =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DateRange, _React$Component);

  function DateRange() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DateRange);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DateRange)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "_onChange", function (changedDate, ev) {
      var newValue = ev.target.value;

      if (changedDate === 'startDate') {
        _this.props.onChange([newValue, _this.endDate]);

        if (_date2.default.isValidDate(_this.endDate)) {
          // resets validations on opposing field. This is a code smell
          _this._endDate._handleContentChange();
        }
      }

      if (changedDate === 'endDate') {
        _this.props.onChange([_this.startDate, newValue]);

        if (_date2.default.isValidDate(_this.startDate)) {
          // resets validations on opposing field. This is a code smell
          _this._startDate._handleContentChange();
        }
      } // Triggers validations on both fields


      if (_date2.default.isValidDate(newValue)) {
        _this._startDate._handleBlur();

        _this._endDate._handleBlur();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "focusStart", function () {
      _this._endDate.closeDatePicker();
    });

    _defineProperty(_assertThisInitialized(_this), "focusEnd", function () {
      _this._startDate.closeDatePicker();
    });

    return _this;
  }

  _createClass(DateRange, [{
    key: "startDateProps",

    /**
     * The startDate props
     *
     * @method startDateProps
     * @return {Object} the props that are applied to the child start Date component
     */
    value: function startDateProps() {
      return this.dateProps('start', [new _dateRange.default({
        endDate: this.endDate,
        messageText: this.startMessage
      })]);
    }
    /**
     * The endDate props
     *
     * @method endDateProps
     * @return {Object} the props that are applied to the child end Date component
     */

  }, {
    key: "endDateProps",
    value: function endDateProps() {
      return this.dateProps('end', [new _dateRange.default({
        startDate: this.startDate,
        messageText: this.endMessage
      })]);
    }
    /**
     * The startDate/endDate props
     *
     * @method dateProps
     * @return {Object} the props that are applied to the child Date components
     */

  }, {
    key: "dateProps",
    value: function dateProps(propsKey, defaultValidations) {
      var _this2 = this;

      var dateProps = this.props["".concat(propsKey, "DateProps")] || {};
      var props = (0, _lodash.assign)({}, {
        label: this.props["".concat(propsKey, "Label")],
        labelInline: this.props.labelsInline,
        onChange: this._onChange.bind(null, "".concat(propsKey, "Date")),
        ref: function ref(c) {
          _this2["_".concat(propsKey, "Date")] = c;
        },
        value: this["".concat(propsKey, "Date")]
      }, dateProps);
      props.className = (0, _classnames.default)('carbon-date-range', "carbon-date-range__".concat(propsKey), dateProps.className);
      props.validations = defaultValidations.concat(dateProps.validations || []);
      return props;
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", (0, _tags.default)('date-range', this.props), _react.default.createElement(_date.default, _extends({}, this.startDateProps(), {
        onFocus: this.focusStart,
        "data-element": "start-date"
      })), _react.default.createElement(_date.default, _extends({}, this.endDateProps(), {
        onFocus: this.focusEnd,
        "data-element": "end-date"
      })));
    }
  }, {
    key: "startDate",

    /**
     * The startDate value
     *
     * @method startDate
     * @return {String} the value of the start date
     */
    get: function get() {
      if (this.props.startDateProps && this.props.startDateProps.value) {
        return this.props.startDateProps.value;
      }

      return this.props.value[0];
    }
    /**
     * The endDate value
     *
     * @method endDate
     * @return {String} the value of the end date
     */

  }, {
    key: "endDate",
    get: function get() {
      if (this.props.endDateProps && this.props.endDateProps.value) {
        return this.props.endDateProps.value;
      }

      return this.props.value[1];
    }
    /**
     * The error message for the start message.
     *
     * @method startMessage
     * @return {String}
     */

  }, {
    key: "startMessage",
    get: function get() {
      return this.props.startMessage || _i18nJs.default.t('errors.messages.date_range', {
        defaultValue: 'Start date must not be later than the end date'
      });
    }
    /**
     * The error message for the end message.
     *
     * @method endMessage
     * @return {String}
     */

  }, {
    key: "endMessage",
    get: function get() {
      return this.props.endMessage || _i18nJs.default.t('errors.messages.date_range', {
        defaultValue: 'End date cannot be earlier than the start date'
      });
    }
    /**
     * Handle focus on start date field
     *
     * @method focusStart
     * @return {Void}
     */

  }]);

  return DateRange;
}(_react.default.Component);

_defineProperty(DateRange, "propTypes", {
  /**
   * Optional label for endDate field
   * eslint is disabled because the prop is used to determine the label in the dateProps function
   *
   * @property endDate
   * @type {String}
   */
  endLabel: _propTypes.default.string,
  // eslint-disable-line react/no-unused-prop-types

  /**
   * Custom callback - receives array of startDate and endDate
   *
   * @property onChange
   * @type {Func}
   */
  onChange: _propTypes.default.func.isRequired,

  /**
   * An array containing the value of startDate and endDate
   *
   * @property value
   * @type {Array}
   */
  value: _propTypes.default.array.isRequired,

  /**
   * Optional label for startDate field
   * eslint is disabled because the prop is used to determine the label in the dateProps function
   *
   * @property startLabel
   * @type {String}
   */
  startLabel: _propTypes.default.string,
  // eslint-disable-line react/no-unused-prop-types

  /**
   * Custom message for startDate field
   *
   * @property startDate
   * @type {String}
   */
  startMessage: _propTypes.default.string,

  /**
   * Custom message for endDate field
   *
   * @property endDate
   * @type {String}
   */
  endMessage: _propTypes.default.string,

  /**
   * Display labels inline
   *
   * @property labelsInline
   * @type {Boolean}
   */
  labelsInline: _propTypes.default.bool,

  /**
   * Props for the child start Date component
   *
   * @property startDateProps
   * @type {Object}
   */
  startDateProps: _propTypes.default.object,

  /**
   * Props for the child end Date component
   *
   * @property endDateProps
   * @type {Object}
   */
  endDateProps: _propTypes.default.object
});

var _default = DateRange;
exports.default = _default;