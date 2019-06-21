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

var _button = _interopRequireDefault(require("../button"));

var _ether = require("../../utils/ether");

require("./split-button.scss");

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
 * A SplitButton widget.
 *
 * == How to use a SplitButton in a component:
 *
 * In your file
 *
 *   import SplitButton from 'react-carbon/lib/components/split-button';
 *
 * To render a SplitButton (developer can add any buttons to dropdown):
 *
 *   <SplitButton text="Main Button" onClick={clickHandler}>
 *     <Button onClick="buttonClickHandler1">Button name 1</Button>
 *     <Button onClick="buttonClickHandler2">Button name 2</Button>
 *   </SplitButton>
 *
 * @class SplitButton
 * @constructor
 */
var SplitButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SplitButton, _React$Component);

  function SplitButton(args) {
    var _this;

    _classCallCheck(this, SplitButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SplitButton).call(this, args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      /**
       * Tracks whether the additional buttons should be visible.
       *
       * @property showAdditionalButtons
       * @type {Boolean}
       * @default false
       */
      showAdditionalButtons: false
      /**
       * Shows the additional buttons.
       *
       * @method showButtons
       */

    });

    _defineProperty(_assertThisInitialized(_this), "showButtons", function () {
      _this.setState({
        showAdditionalButtons: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hideButtons", function () {
      _this.setState({
        showAdditionalButtons: false
      });
    });

    _this.componentTags = _this.componentTags.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SplitButton, [{
    key: "componentTags",

    /**
     * Returns the data tags for the component.
     *
     * @method componentTags
     * @return {Object}
     */
    value: function componentTags() {
      return {
        'data-component': 'split-button',
        'data-element': this.props['data-element'],
        'data-role': this.props['data-role']
      };
    }
    /**
     * Returns the HTML for the main button.
     *
     * @method renderMainButton
     * @return {Object}
     */

  }, {
    key: "render",

    /**
     * @method render
     * @return {Object}
     */
    value: function render() {
      return _react.default.createElement("div", _extends({
        className: this.mainClasses,
        onMouseLeave: this.hideButtons
      }, this.componentTags()), this.renderMainButton, this.renderAdditionalButtons);
    }
  }, {
    key: "mainClasses",

    /**
     * Returns classes for the component.
     *
     * @method mainClasses
     * @return {String} Main className
     */
    get: function get() {
      return (0, _classnames.default)('carbon-split-button', this.props.className, {
        'carbon-split-button--open': this.state.showAdditionalButtons
      });
    }
    /**
     * Returns classes for the additional actions.
     *
     * @method mainClasses
     * @return {String} Main className
     */

  }, {
    key: "additionalButtonsClasses",
    get: function get() {
      return (0, _classnames.default)('carbon-split-button__additional-buttons', {
        'carbon-split-button__additional-buttons--hidden': !this.state.showAdditionalButtons
      });
    }
    /**
     * Returns classes for toggle button.
     *
     * @method mainClasses
     * @return {String} Main className
     */

  }, {
    key: "toggleButtonClasses",
    get: function get() {
      return 'carbon-split-button__toggle';
    }
    /**
     * Returns props for the main button.
     *
     * @method mainButtonProps
     * @return {Object}
     */

  }, {
    key: "mainButtonProps",
    get: function get() {
      var _validProps = (0, _ether.validProps)(this),
          props = Object.assign({}, _validProps);

      props.onMouseEnter = this.hideButtons;
      props.className = 'carbon-split-button__main-button';
      return props;
    }
    /**
     * Returns props for the toggle.
     *
     * @method toggleButtonProps
     * @return {Object}
     */

  }, {
    key: "toggleButtonProps",
    get: function get() {
      var opts = {
        disabled: this.props.disabled,
        as: this.props.as,
        onClick: function onClick(ev) {
          ev.preventDefault();
        },
        className: this.toggleButtonClasses
      };

      if (!this.props.disabled) {
        opts.onMouseEnter = this.showButtons;
      }

      return opts;
    }
  }, {
    key: "renderMainButton",
    get: function get() {
      return _react.default.createElement("div", null, _react.default.createElement(_button.default, _extends({}, this.mainButtonProps, {
        "data-element": "main-button"
      }), this.props.text), _react.default.createElement(_button.default, _extends({}, this.toggleButtonProps, {
        "data-element": "open"
      }), _react.default.createElement(_icon.default, {
        type: "dropdown"
      })));
    }
    /**
     * Returns the HTML for the additional buttons.
     *
     * @method renderAdditionalButtons
     * @return {Object}
     */

  }, {
    key: "renderAdditionalButtons",
    get: function get() {
      return _react.default.createElement("div", {
        className: this.additionalButtonsClasses,
        "data-element": "additional-buttons"
      }, this.props.children);
    }
  }]);

  return SplitButton;
}(_react.default.Component);

_defineProperty(SplitButton, "propTypes", {
  /**
   * Customizes the appearance, can be set to 'primary' or 'secondary'.
   *
   * @property as
   * @type {String}
   * @default 'secondary'
   */
  as: _propTypes.default.string,

  /**
   * A custom value for the data-element attribute
   *
   * @property data-element
   * @type {String}
   */
  'data-element': _propTypes.default.string,

  /**
   * A custom value for the data-element attribute
   *
   * @property data-role
   * @type {String}
   */
  'data-role': _propTypes.default.string,

  /**
   * The additional button to display.
   *
   * @property children
   * @type {Multiple}
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Custom className
   *
   * @property className
   * @type {String}
   */
  className: _propTypes.default.string,

  /**
   * Gives the button a disabled state.
   *
   * @property boolean
   * @type {Boolean}
   * @default false
   */
  disabled: _propTypes.default.bool,

  /**
   * The text to be displayed in the SplitButton.
   *
   * @property text
   * @type {String}
   */
  text: _propTypes.default.string.isRequired
});

_defineProperty(SplitButton, "defaultProps", {
  as: 'secondary',
  disabled: false
});

_defineProperty(SplitButton, "safeProps", ['disabled', 'as']);

var _default = SplitButton;
exports.default = _default;