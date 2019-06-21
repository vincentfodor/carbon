"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.get");

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

var _splitButton = _interopRequireDefault(require("../split-button"));

require("./multi-action-button.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A MultiActionButton widget.
 *
 * == How to use a MultiActionButton in a component:
 *
 * In your file
 *
 *   import MultiActionButton from 'carbon-react/lib/components/multi-action-button';
 *
 * To render a MultiActionButton (developer can add any buttons to dropdown):
 *
 *   <MultiActionButton text="Main Text">
 *     <Button onClick="buttonClickHandler1">Button name 1</Button>
 *     <Button onClick="buttonClickHandler2">Button name 2</Button>
 *   </MultiActionButton>
 *
 * @class MultiActionButton
 * @constructor
 */
var MultiActionButton =
/*#__PURE__*/
function (_SplitButton) {
  _inherits(MultiActionButton, _SplitButton);

  function MultiActionButton() {
    _classCallCheck(this, MultiActionButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(MultiActionButton).apply(this, arguments));
  }

  _createClass(MultiActionButton, [{
    key: "componentTags",
    value: function componentTags() {
      return {
        'data-component': 'multi-action-button',
        'data-element': this.props['data-element'],
        'data-role': this.props['data-role']
      };
    }
  }, {
    key: "mainClasses",
    get: function get() {
      return (0, _classnames.default)(_get(_getPrototypeOf(MultiActionButton.prototype), "mainClasses", this), 'carbon-multi-action-button', {
        'carbon-multi-action-button--open': this.state.showAdditionalButtons,
        'carbon-multi-action-button--align-right': this.props.align === 'right'
      });
    }
    /**
     * Returns classes for the additional actions.
     * @override
     *
     * @method mainClasses
     * @return {String} Main className
     */

  }, {
    key: "additionalButtonsClasses",
    get: function get() {
      return "".concat(_get(_getPrototypeOf(MultiActionButton.prototype), "additionalButtonsClasses", this), " carbon-multi-action-button__additional-buttons") + " carbon-multi-action-button__additional-buttons--".concat(this.props.as);
    }
    /**
     * Returns classes for the main button.
     * @override
     *
     * @method mainClasses
     * @return {String} Main className
     */

  }, {
    key: "toggleButtonClasses",
    get: function get() {
      return "".concat(_get(_getPrototypeOf(MultiActionButton.prototype), "toggleButtonClasses", this), " carbon-multi-action-button__toggle") + " carbon-multi-action-button__toggle--".concat(this.props.as);
    }
    /**
     * Returns the HTML for the main button.
     * @override
     *
     * @method renderMainButton
     * @return {Object}
     */

  }, {
    key: "renderMainButton",
    get: function get() {
      return _react.default.createElement(_button.default, _extends({}, this.toggleButtonProps, {
        "data-element": "main-button"
      }), this.props.text, _react.default.createElement(_icon.default, {
        type: "dropdown"
      }));
    }
  }]);

  return MultiActionButton;
}(_splitButton.default);

_defineProperty(MultiActionButton, "propTypes", {
  /**
   * Customizes the appearance, can be set to 'primary', 'secondary' or 'transparent'.
   *
   * @property as
   * @type {String}
   * @default 'secondary'
   */
  as: _propTypes.default.string,

  /**
   * The text to be displayed in the SplitButton.
   *
   * @property text
   * @type {String}
   */
  text: _propTypes.default.string.isRequired,

  /**
   * Gives the button a disabled state.
   *
   * @property boolean
   * @type {Boolean}
   * @default false
   */
  disabled: _propTypes.default.bool,

  /**
   * Aligns the button's options, can be set to `right`.
   *
   * @property align
   * @type {String}
   */
  align: _propTypes.default.string
  /**
   * Returns classes for the component.
   * @override
   *
   * @method mainClasses
   * @return {String} Main className
   */

});

var _default = MultiActionButton;
exports.default = _default;