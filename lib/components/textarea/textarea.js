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

var _classnames = _interopRequireDefault(require("classnames"));

var _i18nJs = _interopRequireDefault(require("i18n-js"));

var _input = _interopRequireDefault(require("../../utils/decorators/input"));

var _inputLabel = _interopRequireDefault(require("../../utils/decorators/input-label"));

var _inputValidation = _interopRequireDefault(require("../../utils/decorators/input-validation"));

var _ether = require("../../utils/ether");

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

require("./textarea.scss");

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
 * A textarea widget.
 *
 * == How to use a Textarea in a component:
 *
 * In your file:
 *
 *   import Textarea from 'carbon-react/lib/components/textarea';
 *
 * To render a Textarea:
 *
 *   <Textarea name='myTextarea' />
 *
 * @class Textarea
 * @constructor
 * @decorators {Input,InputLabel,InputValidation}
 */
var Textarea = (0, _input.default)((0, _inputLabel.default)((0, _inputValidation.default)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Textarea, _React$Component);

  function Textarea() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Textarea);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Textarea)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "minHeight", 0);

    _defineProperty(_assertThisInitialized(_this), "expandTextarea", function () {
      var textarea = _this._input;

      if (textarea.scrollHeight > _this.minHeight) {
        // Reset height to zero - IE specific
        textarea.style.height = '0px'; // Set the height so all content is shown

        textarea.style.height = "".concat(Math.max(textarea.scrollHeight, _this.minHeight), "px");
      }
    });

    return _this;
  }

  _createClass(Textarea, [{
    key: "componentDidMount",

    /**
     * A lifecycle method that is called after initial render.
     * Allows access to refs and DOM to set expandable variables
     *
     * @method componentDidMount
     * @return {void}
     */
    value: function componentDidMount() {
      if (this.props.expandable) {
        window.addEventListener('resize', this.expandTextarea); // Set the min height to the initially rendered height.
        // Without minHeight expandable textareas will only have
        // one line when no content is present.

        this.minHeight = this._input.clientHeight;
        this.expandTextarea();
      }
    }
    /**
     * A lifecycle method that is called before the component is
     * unmounted from the DOM
     *
     * @method componentWillUnmount
     * @return {void}
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.expandable) {
        window.removeEventListener('resize', this.expandTextarea);
      }
    }
    /**
     * A lifecycle method to update the component after it is re-rendered
     * Resizes the textarea based on update if it can expand
     *
     * @method componentDidUpdate
     * @return {void}
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.expandable) {
        this.expandTextarea();
      }
    }
    /**
     * Expands the textarea based on the current input
     * so that width is fixed but height changes to show
     * all content.
     *
     * @method expandTextarea
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
      return _react.default.createElement("div", _extends({
        className: this.mainClasses
      }, (0, _tags.default)('textarea', this.props)), this.labelHTML, this.inputHTML, this.validationHTML, this.fieldHelpHTML, this.characterCount);
    }
  }, {
    key: "mainClasses",

    /**
     * Uses the mainClasses method provided by the decorator to add additional classes
     *
     * @method mainClasses
     * @return {String} main className
     */
    get: function get() {
      return 'carbon-textarea';
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
      return (0, _classnames.default)('carbon-textarea__input', {
        'carbon-textarea__input--disable-scroll': this.props.expandable
      });
    }
    /**
     * Uses the textAreaClasses method to add additional classes.
     *
     * @method textAreaClasses
     * @return {String} textarea className
     */

  }, {
    key: "textAreaClasses",
    get: function get() {
      return (0, _classnames.default)('carbon-textarea__character-limit', {
        'over-limit': this.props.warnOverLimit && this.overLimit
      });
    }
    /**
     * Returns if the character count exceeds the max
     *
     * @method overLimit
     * @return {Boolean}
     */

  }, {
    key: "overLimit",
    get: function get() {
      var value = this.props.value || '';
      return value.length > parseInt(this.props.characterLimit, 10);
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

      props.className = this.inputClasses;
      props.rows = this.props.rows;
      props.cols = this.props.cols;

      if (this.props.characterLimit && this.props.enforceCharacterLimit) {
        props.maxLength = this.props.characterLimit;
      }

      return props;
    }
    /**
     * I18n options for character count number
     *
     * @method i18nNumberOpts
     * @return {Object}
     */

  }, {
    key: "i18nNumberOpts",
    get: function get() {
      return {
        precision: 0
      };
    }
    /**
     * Defines a custom input type for this component.
     *
     * @method inputType
     * @return {String} the input type
     */

  }, {
    key: "inputType",
    get: function get() {
      return 'textarea';
    }
    /**
     * Returns character count jsx if limit is set
     *
     * @method characterCount
     * @return {JSX}
     */

  }, {
    key: "characterCount",
    get: function get() {
      var value = this.props.value || '';

      if (!this.props.characterLimit) {
        return null;
      }

      return _react.default.createElement("div", {
        className: this.textAreaClasses,
        "data-element": "character-limit"
      }, _i18nJs.default.t('textarea.limit.prefix', {
        defaultValue: 'You have used '
      }), _react.default.createElement("span", {
        className: "carbon-textarea__limit-used"
      }, _i18nJs.default.toNumber(value.length, this.i18nNumberOpts)), _i18nJs.default.t('textarea.limit.middle', {
        defaultValue: ' of '
      }), _react.default.createElement("span", {
        className: "carbon-textarea__limit-max"
      }, _i18nJs.default.toNumber(this.props.characterLimit, this.i18nNumberOpts)), _i18nJs.default.t('textarea.limit.suffix', {
        defaultValue: ' characters'
      }));
    }
  }]);

  return Textarea;
}(_react.default.Component), _defineProperty(_class, "propTypes", {
  /**
   * Character limit of the textarea
   *
   * @property characterLimit
   * @type {String}
   */
  characterLimit: _propTypes.default.string,

  /**
   * The visible width of the text control, in average character widths.
   *
   * @property cols
   * @type {Integer}
   */
  cols: _propTypes.default.number,

  /**
   * Stop the user typing over the characterLimit
   *
   * @property enforceCharacterLimit
   * @type {Boolean}
   * @default true
   */
  enforceCharacterLimit: _propTypes.default.bool,

  /**
   * Allows the Textareas Height to change based on user input
   * Width of the textarea will remain static
   *
   * @property expandable
   * @type {Boolean}
   * @default false
   */
  expandable: _propTypes.default.bool,

  /**
   * The number of visible text lines for the control.
   *
   * @property rows
   * @type {Integer}
   */
  rows: _propTypes.default.number,

  /**
   * The value of the Textarea
   *
   * @property value
   * @type {String}
   */
  value: _propTypes.default.string,

  /**
   * Whether to display the character count message in red
   *
   * @property warnOverLimit
   * @type {Boolean}
   * @default false
   */
  warnOverLimit: _propTypes.default.bool
}), _defineProperty(_class, "defaultProps", {
  expandable: false,
  enforceCharacterLimit: true,
  warnOverLimit: false // Minimum height of the textarea

}), _temp))));
var _default = Textarea;
exports.default = _default;