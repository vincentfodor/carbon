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

var _input = _interopRequireDefault(require("../../utils/decorators/input"));

var _inputLabel = _interopRequireDefault(require("../../utils/decorators/input-label"));

var _inputValidation = _interopRequireDefault(require("../../utils/decorators/input-validation"));

var _ether = require("../../utils/ether");

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

require("./radio-button.scss");

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
 * A radiobutton widget.
 *
 * == How to use a RadioButton in a component:
 *
 * In your file:
 *
 *   import RadioButton from 'carbon-react/lib/components/radio-button';
 *
 * To render the radiobutton:
 *
 *  <RadioButton name='frequency' value='weekly' label='Weekly'/>
 *  <RadioButton name='frequency' value='2weekly' label='2 Weekly' />
 *  <RadioButton name='frequency' value='4weekly' label='4 Weekly'/>
 *  <RadioButton name='frequency' value='monthly' label='Monthly' />
 *
 * For additional properties specific to this component, see propTypes.
 *
 * @class RadioButton
 * @constructor
 * @decorators {Input, InputLabel, InputValidation}
 */
var RadioButton = (0, _input.default)((0, _inputLabel.default)((0, _inputValidation.default)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RadioButton, _React$Component);

  function RadioButton() {
    _classCallCheck(this, RadioButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(RadioButton).apply(this, arguments));
  }

  _createClass(RadioButton, [{
    key: "render",

    /**
     * Renders the component with props.
     *
     * @method render
     * @return {Object} JSX
     */
    value: function render() {
      return _react.default.createElement("div", _extends({
        className: this.mainClasses
      }, (0, _tags.default)('radio-button', this.props)), this.inputHTML, this.labelHTML, this.fieldHelpHTML, this.validationHTML);
    }
  }, {
    key: "mainClasses",
    get: function get() {
      return (0, _classnames.default)('carbon-radio-button', this.props.className);
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
      return 'carbon-radio-button__input';
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
      return (0, _classnames.default)('carbon-radio-button__help-text', {
        'carbon-radio-button__help-text--inline': this.props.fieldHelpInline
      });
    }
    /**
     * A getter that combines props passed down from the input decorator with
     * radiobutton specific props.
     *
     * @method inputProps
     * @return {Object} Props to be applied to the input
     */

  }, {
    key: "inputProps",
    get: function get() {
      var _validProps = (0, _ether.validProps)(this),
          props = Object.assign({}, _validProps);

      props.className = this.inputClasses;
      props.type = 'radio';
      return props;
    }
    /**
     * Return the svg image for the radiobutton
     * Amended the svg contsruction to account for an issue in React
     * @return {Object} JSX svg
     */

  }, {
    key: "radiobuttonSprite",
    get: function get() {
      var svg = '';
      svg += '<svg width="15" height="15" viewBox="0 0 15 15">';
      svg += '  <g stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">';
      svg += '    <g transform="translate(-69.000000, -293.000000)">';
      svg += '      <g transform="translate(69.000000, 268.000000)">';
      svg += '        <g transform="translate(0.000000, 25.000000)">';
      svg += '          <circle class="radio-button-fill" fill="#FFFFFF" cx="7.5" cy="7.5" r="7.5"></circle>';
      svg += '          <path class="radio-button-outline" d="M7.5,15 C11.6421356,15 15,11.6421356 15,';
      svg += '            7.5 C15,3.35786438 11.6421356,0 7.5,0 C3.35786438,0 0,3.35786438 0,7.5 C0,';
      svg += '            11.6421356 3.35786438,15 7.5,15 Z M7.5,14 C11.0898509,14 14,11.0898509 14,';
      svg += '            7.5 C14,3.91014913 11.0898509,1 7.5,1 C3.91014913,1 1,3.91014913 1,7.5 C1,';
      svg += '            11.0898509 3.91014913,14 7.5,14 Z" fill="#AFAFAF"></path>';
      svg += '          <circle fill="#FFFFFF" cx="7.5" cy="7.5" r="3.5" class="radio-button-check"></circle>';
      svg += '        </g>';
      svg += '      </g>';
      svg += '    </g>';
      svg += '  </g>';
      svg += '</svg>';
      return svg;
    }
    /**
     * Extends the input content to include the radiobutton sprite
     *
     * @method additionalInputContent
     * @return {Object} JSX additional content inline with input
     */

  }, {
    key: "additionalInputContent",
    get: function get() {
      return _react.default.createElement("div", {
        className: "carbon-radio-button__sprite",
        dangerouslySetInnerHTML: {
          __html: this.radiobuttonSprite
        } // eslint-disable-line react/no-danger

      });
    }
  }]);

  return RadioButton;
}(_react.default.Component), _defineProperty(_class, "propTypes", {
  /**
   * A custom class name for the component.
   *
   * @property className
   * @type {String}
   */
  className: _propTypes.default.string,

  /**
   * Displays fieldHelp inline with the radio button.
   *
   * @property fieldHelpInline
   * @type {Boolean}
   */
  fieldHelpInline: _propTypes.default.bool
}), _defineProperty(_class, "defaultProp", {
  className: '',
  fieldHelpInline: false
  /**
   * Uses the mainClasses method provided by the decorator to add additional classes.
   *
   * @method mainClasses
   * @return {String} Main className
   */

}), _temp))));
var _default = RadioButton;
exports.default = _default;