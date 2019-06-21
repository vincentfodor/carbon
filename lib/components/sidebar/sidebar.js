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
Object.defineProperty(exports, "SidebarHeader", {
  enumerable: true,
  get: function get() {
    return _sidebarHeader.default;
  }
});
exports.Sidebar = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _sidebarHeader = _interopRequireDefault(require("./sidebar-header"));

var _icon = _interopRequireDefault(require("../icon"));

var _modal = _interopRequireDefault(require("../modal"));

require("./sidebar.scss");

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
 * A Sidebar widget.
 *
 * == How to use a Sidebar in a component:
 *
 * In your file
 *
 *   import { Sidebar } from 'carbon-react/lib/components/sidebar';
 *
 * To render the Sidebar:
 *
 *   <Sidebar
 *     onCancel={ closeSidebar }
 *     open={ true }
 *   />
 *
 * Side bar is positioned on the right hand screen of the window by default.
 * To position the sidebar on the left hand side pass `position='left'` to the component.
 *
 * The background behind the sidebar is disabled by default. To allow the user to interact
 * with all the UI pass `enableBackgroundUI={ true}` to the component
 *
 * @class Sidebar
 * @constructor
 */
var Sidebar =
/*#__PURE__*/
function (_Modal) {
  _inherits(Sidebar, _Modal);

  function Sidebar() {
    _classCallCheck(this, Sidebar);

    return _possibleConstructorReturn(this, _getPrototypeOf(Sidebar).apply(this, arguments));
  }

  _createClass(Sidebar, [{
    key: "componentTags",
    value: function componentTags(props) {
      return {
        'data-component': 'sidebar',
        'data-element': props['data-element'],
        'data-role': props['data-role']
      };
    }
    /**
     * Returns the computed HTML for the sidebar.
     *
     * @method sidebarHTML
     * @return {Object} JSX for sidebar
     */

  }, {
    key: "mainClasses",
    get: function get() {
      return (0, _classnames.default)('carbon-sidebar', this.props.className);
    }
    /**
     * Returns classes for the sidebar.
     *
     * @method sidebarClasses
     * @return {String} sidebar className
     */

  }, {
    key: "sidebarClasses",
    get: function get() {
      return (0, _classnames.default)('carbon-sidebar__sidebar', "carbon-sidebar__sidebar--".concat(this.props.position), "carbon-sidebar__sidebar--".concat(this.props.size));
    }
    /**
     * Returns the markup for the close icon.
     *
     * @method closeButton
     * @return {Object} JSX
     */

  }, {
    key: "closeButton",
    get: function get() {
      if (this.props.onCancel) {
        return _react.default.createElement("span", {
          className: "carbon-sidebar__close"
        }, _react.default.createElement(_icon.default, {
          className: "carbon-sidebar__close-icon",
          "data-element": "close",
          onClick: this.props.onCancel,
          type: "close"
        }));
      }

      return null;
    }
  }, {
    key: "modalHTML",
    get: function get() {
      return _react.default.createElement("div", _extends({
        className: this.sidebarClasses
      }, this.componentTags(this.props)), this.closeButton, this.props.children);
    }
  }, {
    key: "transitionName",
    get: function get() {
      return "sidebar--".concat(this.props.position);
    }
  }]);

  return Sidebar;
}(_modal.default);

exports.Sidebar = Sidebar;

_defineProperty(Sidebar, "propTypes", {
  /**
   * A custom close event handler
   *
   * @property onCancel
   * @type {Function}
   */
  onCancel: _propTypes.default.func,

  /**
   * Sets the open state of the sidebar
   *
   * @property open
   * @type {Boolean}
   * @default false
   */
  open: _propTypes.default.bool,

  /**
   * Determines if the user can interact with
   * the background ui when the sidebar is open
   *
   * @property enableBackgroundUI
   * @type {Boolean}
   * @default false
   */
  enableBackgroundUI: _propTypes.default.bool,

  /**
   * Determines the position of the sidebar
   * 'left' or 'right'
   *
   * @property position
   * @type {String}
   * @default 'right'
   */
  position: _propTypes.default.string,

  /**
   * Size of dialog, default size is 450px
   *
   * @property size
   * @type {String}
   * @default medium
   */
  size: _propTypes.default.string
});

_defineProperty(Sidebar, "defaultProps", {
  position: 'right',
  size: 'medium'
  /**
   * Returns classes for the component.
   *
   * @method mainClasses
   * @return {String} Main className
   */

});