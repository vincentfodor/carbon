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

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

require("./help.scss");

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
 * A Help widget.
 *
 * == How to use a Help in a component:
 *
 * In your file
 *
 *   import Help from 'carbon-react/lib/components/help';
 *
 * To render a help component:
 *
 *   <Help>{ this.props.helpMessage }</Help>
 *
 *  You can also pass additional props of tooltipPosition and tooltipAlign.
 *
 * @class Help
 * @constructor
 */
var Help =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Help, _React$Component);

  function Help() {
    _classCallCheck(this, Help);

    return _possibleConstructorReturn(this, _getPrototypeOf(Help).apply(this, arguments));
  }

  _createClass(Help, [{
    key: "render",

    /**
     * Renders the component.
     *
     * @method render
     * @return {Object} JSX
     */
    value: function render() {
      return _react.default.createElement("a", _extends({
        className: this.mainClasses,
        href: this.props.href,
        target: "_blank",
        rel: "noopener noreferrer"
      }, (0, _tags.default)('help', this.props)), _react.default.createElement(_icon.default, {
        type: "help",
        tooltipMessage: this.props.children,
        tooltipPosition: this.props.tooltipPosition,
        tooltipAlign: this.props.tooltipAlign
      }));
    }
  }, {
    key: "mainClasses",
    get: function get() {
      return (0, _classnames.default)('carbon-help', {
        'carbon-help__href': this.props.href
      }, this.props.className);
    }
  }]);

  return Help;
}(_react.default.Component);

_defineProperty(Help, "propTypes", {
  /**
   * A custom class name for the component.
   *
   * @property className
   * @type {String}
   */
  className: _propTypes.default.string,

  /**
   * Message to display in tooltip
   *
   * @property children
   * @type {String}
   */
  children: _propTypes.default.string,

  /**
   * Position of tooltip relative to target
   *
   * @property tooltipPosition
   * @type {String} Options: { top, bottom, right, left }
   * @default top
   */
  tooltipPosition: _propTypes.default.string,

  /**
   * Aligment of pointer
   *
   * @property tooltipAlign
   * @type {String} Options: { top, bottom, right, left, center }
   * @default center
   */
  tooltipAlign: _propTypes.default.string,

  /**
   * A path for the anchor
   *
   * @property href
   * @type {String}
   */
  href: _propTypes.default.string
});

_defineProperty(Help, "defaultProps", {
  tooltipPosition: 'top',
  tooltipAlign: 'center'
  /**
   * Return component classes
   *
   * @method mainClasses
   * @return {String} classes
   */

});

var _default = Help;
exports.default = _default;