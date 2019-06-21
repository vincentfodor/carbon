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

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

require("./tooltip.scss");

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
* A Tooltip widget.
*
* == How to use a Tooltip in a component:
*
* In your file:
*
*   import Tooltip from 'carbon-react/lib/components/tooltip'
*
* To render the Tooltip:
*
*   <Tooltip isVisible={ toggleTooltipHandler }>
*     My tooltip content
*   </Tooltip>
*
* You must pass a prop of 'isVisible' which is toggled to true or false.
*
* You can pass a prop of 'align' to the component which shifts the alignment of the pointer.
* This defaults to 'center'.
* You can also pass a prop of 'position' to the component which shifts the position of the pointer.
* This defaults to 'bottom'
*
* @class Tooltip
* @constructor
*/
var Tooltip =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip() {
    _classCallCheck(this, Tooltip);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).apply(this, arguments));
  }

  _createClass(Tooltip, [{
    key: "render",

    /**
     * Renders the component.
     *
     * @method render
     */
    value: function render() {
      if (!this.props.isVisible) {
        return null;
      }

      return this.tooltipHTML;
    }
  }, {
    key: "mainClasses",

    /**
     * Main classes
     *
     * @method mainClasses
     * @return {String} classNames for tooltip
     */
    get: function get() {
      return (0, _classnames.default)('carbon-tooltip', "carbon-tooltip--position-".concat(this.props.position), "carbon-tooltip--pointer-align-".concat(this.props.align), this.props.className);
    }
    /**
     * Return HTML for tooltip
     *
     * @method tooltipHTML
     * @return {JSX}
     */

  }, {
    key: "tooltipHTML",
    get: function get() {
      var contents = [this.props.children, _react.default.createElement("span", {
        key: "pointer",
        className: "carbon-tooltip__pointer"
      })];
      var tooltipProps = {
        className: this.mainClasses,
        role: 'tooltip'
      };

      if (this.props.id) {
        tooltipProps.id = this.props.id;
      }

      if (this.props.onMouseEnter) {
        tooltipProps.onMouseEnter = this.props.onMouseEnter;
      }

      if (this.props.onMouseLeave) {
        tooltipProps.onMouseLeave = this.props.onMouseLeave;
      }

      return _react.default.createElement("div", _extends({}, tooltipProps, (0, _tags.default)('tooltip', this.props)), _react.default.createElement("div", {
        className: "carbon-tooltip__container"
      }, contents));
    }
  }]);

  return Tooltip;
}(_react.default.Component);

_defineProperty(Tooltip, "propTypes", {
  /**
   * Sets alignment of pointer on tooltip
   *
   * Options: top, bottom, center, right, left
   *
   * @property align
   * @type {String}
   * @default 'center'
   */
  align: _propTypes.default.string,

  /**
   * Custom className
   *
   * @property className
   * @type {String}
   */
  className: _propTypes.default.string,

  /**
   * Children elements
   *
   * @property children
   * @type {Node}
   */
  children: _propTypes.default.node,

  /**
   * The id attribute to use for the tooltip
   *
   * @property id
   * @type {String}
   */
  id: _propTypes.default.string,

  /**
  * Whether to to show the Tooltip
  *
  * @property isVisible
  * @type {Boolean}
  * @default false
  */
  isVisible: _propTypes.default.bool,

  /**
   * Sets position of the tooltip
   *
   *
   * Options: top, bottom, right, left
   *
   * @property position
   * @type {String}
   * @default 'bottom'
   */
  position: _propTypes.default.string,

  /**
   * Sets a onMouseEnter function
   *
   * @property onMouseEnter
   * @type {Function}
   */
  onMouseEnter: _propTypes.default.func,

  /**
   * Sets a onMouseLeave function
   *
   * @property onMouseLeave
   * @type {Function}
   */
  onMouseLeave: _propTypes.default.func
});

_defineProperty(Tooltip, "defaultProps", {
  align: 'center',
  position: 'top',
  className: '',
  isVisible: false
});

var _default = Tooltip;
exports.default = _default;