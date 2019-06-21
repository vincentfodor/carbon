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

var _tags = _interopRequireDefault(require("../../../utils/helpers/tags"));

require("./sidebar-header.scss");

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
 * A Sidebar Header widget.
 *
 * Sidebar header can be used as a first child of the Sidebar component
 *
 * == How to use a Sidebar Header in a component:
 *
 * In your file
 *
 *   import { Sidebar, SidebarHeader } from 'carbon-react/lib/components/sidebar';
 *
 * To render the Sidebar Header:
 *
 *   <Sidebar
 *     onClose={ closeSidebar }
 *     open={ true }
 *   >
 *   <SidebarHeader />
 *   </Sidebar>
 *
 * @class SidebarHeader
 * @constructor
 */
var SidebarHeader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SidebarHeader, _React$Component);

  function SidebarHeader() {
    _classCallCheck(this, SidebarHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(SidebarHeader).apply(this, arguments));
  }

  _createClass(SidebarHeader, [{
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
      }, (0, _tags.default)('sidebar-header', this.props)), this.props.children);
    }
  }, {
    key: "mainClasses",
    get: function get() {
      return (0, _classnames.default)('carbon-sidebar-header', this.props.className);
    }
  }]);

  return SidebarHeader;
}(_react.default.Component);

_defineProperty(SidebarHeader, "propTypes", {
  /**
   * Required prop which will be the content
   * of the sidebar header
   *
   * @property children
   * @type {Multiple}
   */
  children: _propTypes.default.node,

  /**
   * Custom className
   *
   * @property className
   * @type {String}
   */
  className: _propTypes.default.string
});

_defineProperty(SidebarHeader, "defaultProps", {
  children: null,
  className: ''
  /**
   * Returns classes for the component.
   *
   * @method mainClasses
   * @return {String} Main className
   */

});

var _default = SidebarHeader;
exports.default = _default;