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

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

var _ether = require("../../utils/ether");

require("./checkbox.scss");

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
 * A Checkbox widget.
 *
 * == How to use a Checkbox in a component:
 *
 * In your file:
 *
 *   import Checkbox from 'carbon-react/lib/components/checkbox';
 *
 * To render the Checkbox:
 *
 *   <Checkbox name='myCheckbox' />
 *
 * @class Checkbox
 * @constructor
 * @decorators {Input,InputLabel,InputValidation}
 */
var Checkbox = (0, _input.default)((0, _inputLabel.default)((0, _inputValidation.default)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Checkbox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleOnChange", function (ev) {
      // we handle the change event manually here, as we pass the checked param
      // instead of value
      _this._handleOnChange({
        target: {
          value: ev.target.checked
        }
      });
    });

    return _this;
  }

  _createClass(Checkbox, [{
    key: "render",

    /**
     * Renders the component with props.
     *
     * @method render
     * @return {Object} JSX
     */
    value: function render() {
      var labelRight,
          labelLeft,
          fieldHelpLeft,
          fieldHelpRight = this.fieldHelpHTML;

      if (this.props.reverse) {
        labelLeft = this.labelHTML;

        if (this.props.fieldHelpInline) {
          fieldHelpLeft = this.fieldHelpHTML;
          fieldHelpRight = null;
        }
      } else {
        labelRight = this.labelHTML;
      }

      return _react.default.createElement("div", _extends({
        className: this.mainClasses
      }, (0, _tags.default)('checkbox', this.props)), labelLeft, fieldHelpLeft, _react.default.createElement("input", this.hiddenInputProps), this.inputHTML, labelRight, fieldHelpRight, this.validationHTML);
    }
  }, {
    key: "mainClasses",

    /**
     * Uses the mainClasses method provided by the decorator to add additional classes.
     *
     * @method mainClasses
     * @return {String} Main className
     */
    get: function get() {
      return 'carbon-checkbox';
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
      return 'carbon-checkbox__input';
    }
    /**
     * A getter that combines props passed down from the input decorator with
     * checkbox specific props.
     *
     * @method inputProps
     * @return {Object} Props to be applied to the input
     */

  }, {
    key: "inputProps",
    get: function get() {
      var _validProps = (0, _ether.validProps)(this),
          props = Object.assign({}, _validProps); // React uses checked instead of value to define the state of a checkbox


      props.checked = this.props.checked !== undefined ? this.props.checked : this.props.value;
      props.className = this.inputClasses;
      props.onChange = this.handleOnChange;
      props.type = 'checkbox';
      props.value = '1';
      delete props.children;
      return props;
    }
    /**
     * A getter for hidden input props.
     *
     * @method hiddenInputProps
     * @return {Object} Props to be applied to the hidden input
     */

  }, {
    key: "hiddenInputProps",
    get: function get() {
      var props = {
        name: this.inputProps.name,
        readOnly: true,
        ref: 'hidden',
        type: 'hidden',
        value: '0',
        'data-element': 'hidden-input'
      };
      return props;
    }
    /**
     * Return the svg image for the checkbox
     *
     * @return {Object} JSX svg
     */

  }, {
    key: "checkboxSprite",
    get: function get() {
      return _react.default.createElement("svg", {
        width: "15",
        height: "15",
        viewBox: "0 0 15 15"
      }, _react.default.createElement("rect", {
        className: "checkbox-outline",
        fill: "#AFAFAF",
        x: "0",
        y: "0",
        width: "15",
        height: "15"
      }), _react.default.createElement("rect", {
        className: "checkbox-fill",
        fill: "#FFFFFF",
        x: "1",
        y: "1",
        width: "13",
        height: "13"
      }), _react.default.createElement("path", {
        d: 'M5.06079081,11.805307 L2.2548404,9.4508351 C1.95287351,9.19745479 1.91372172,' + '8.74748731 2.16708208,8.44554418 L3.08395978,7.35285189 C3.3376225,7.05054844 3.78738919,' + '7.01144632 4.08921714,7.26471004 L6.46118447,9.25502694 L11.4959248,3.25485701 C11.7492184,' + '2.95299356 12.1993451,2.91365198 12.5012882,3.16701234 L13.5939805,4.08389004 C13.896284,' + '4.33755276 13.9353536,4.78735811 13.6820499,5.08923375 L8.30934217,11.4921775 C8.28333213,' + '11.5485068 8.24949267,11.6023543 8.20769039,11.6521724 L7.2908127,12.7448647 C7.12011041,' + '12.9482997 6.86060017,13.032541 6.61713008,12.9887006 C6.48855215,12.9709764 6.36324771,' + '12.9179844 6.25647356,12.8283903 L5.16378128,11.9115126 C5.12512704,11.8790778 5.09077658,' + '11.8434362 5.06079081,11.805307 L5.06079081,11.805307 Z',
        className: "checkbox-check",
        fill: "#FFFFFF"
      }));
    }
    /**
     * Extends the input content to include the checkbox sprite
     *
     * @method additionalInputContent
     * @return {Object} JSX additional content inline with input
     */

  }, {
    key: "additionalInputContent",
    get: function get() {
      return this.props.children || this.checkboxSprite;
    }
    /**
     * Returns classes for field help.
     *
     * @method fieldHelpClasses
     * @return {String}
     */

  }, {
    key: "fieldHelpClasses",
    get: function get() {
      return (0, _classnames.default)('carbon-checkbox__help-text', {
        'carbon-checkbox__help-text--reverse': this.props.reverse,
        'carbon-checkbox__help-text--inline': this.props.fieldHelpInline
      });
    }
  }]);

  return Checkbox;
}(_react.default.Component), _defineProperty(_class, "propTypes", {
  /**
   * Set the value of the checkbox
   *
   * @property checked
   * @type {Boolean}
   */
  checked: _propTypes.default.bool,

  /**
   * When provided will replace the checkbox sprite.
   *
   * @property children
   * @type {Node}
   */
  children: _propTypes.default.node,

  /**
   * Displays fieldHelp inline with the checkbox
   *
   * @property fieldHelpInline
   * @type {Boolean}
   */
  fieldHelpInline: _propTypes.default.bool,

  /**
   * Reverses label and checkbox display
   *
   * @property reverse
   * @type {Boolean}
   * @default false
   */
  reverse: _propTypes.default.bool,

  /**
   * Set the value of the checkbox
   *
   * @property value
   * @type {Boolean}
   */
  value: _propTypes.default.bool
}), _defineProperty(_class, "defaultProps", {
  reverse: false
  /**
   * Sets the value of the checkbox [true | false]
   *
   * @method handleOnChange
   * @param {Object} ev event
   * @return {void}
   */

}), _temp))));
var _default = Checkbox;
exports.default = _default;