"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

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

var _lodash = require("lodash");

var _link = _interopRequireDefault(require("../../link"));

var _tags = _interopRequireDefault(require("../../../utils/helpers/tags"));

require("./menu-item.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
 * Renders a menu item for the menu component.
 */
var MenuItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MenuItem, _React$Component);

  function MenuItem() {
    _classCallCheck(this, MenuItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuItem).apply(this, arguments));
  }

  _createClass(MenuItem, [{
    key: "render",

    /**
     * @method render
     */
    value: function render() {
      var component = this.props.submenu ? 'div' : _link.default;
      var props = {
        className: this.classes,
        href: this.props.href,
        to: this.props.to,
        target: this.props.target,
        onClick: this.props.onClick,
        icon: this.props.icon
      };
      props = (0, _lodash.assign)({}, props, (0, _tags.default)('menu-item', this.props));
      return _react.default.createElement(component, props, this.content);
    }
  }, {
    key: "content",
    get: function get() {
      // if does not have a submenu, just render the children
      if (!this.props.submenu) {
        return this.props.children;
      } // if it does have a submenu, render the following:


      var submenuClasses = (0, _classnames.default)('carbon-menu-item__submenu', "carbon-menu-item__submenu--".concat(this.props.submenuDirection));
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(MenuItem, {
        className: "carbon-menu-item__submenu-title",
        href: this.props.href,
        to: this.props.to
      }, this.props.submenu), _react.default.createElement("ul", {
        className: submenuClasses
      }, _react.default.Children.map(this.props.children, function (child) {
        return _react.default.createElement("li", {
          className: "carbon-menu-item__submenu-item"
        }, child);
      })));
    }
    /**
     * Returns the classes for the component.
     *
     * @method classes
     * @return {String}
     */

  }, {
    key: "classes",
    get: function get() {
      return (0, _classnames.default)('carbon-menu-item', this.props.className, {
        'carbon-menu-item--divide': this.props.divide,
        'carbon-menu-item--has-link': this.props.href || this.props.to || this.props.onClick,
        'carbon-menu-item--has-submenu': this.props.submenu,
        'carbon-menu-item--selected': this.props.selected
      });
    }
  }]);

  return MenuItem;
}(_react.default.Component);

_defineProperty(MenuItem, "propTypes", {
  /**
   * Children elements
   *
   * @property children
   * @type {Node}
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
   * onClick handler
   *
   * @property onClick
   * @type {Function}
   */
  onClick: _propTypes.default.func,

  /**
   * Adds an icon to the menu item.
   *
   * @property icon
   * @type {String}
   */
  icon: _propTypes.default.string,

  /**
   * Defines which direction the submenu will hang eg. left/right
   *
   * @property submenuDirection
   * @type {String}
   */
  submenuDirection: _propTypes.default.string,

  /**
   * Is the menu item the currently selected item.
   *
   * @property selected
   * @type {Boolean}
   */
  selected: _propTypes.default.bool,

  /**
   * (for submenus) renders with a divide between items.
   *
   * @property divide
   * @type {Boolean}
   */
  divide: _propTypes.default.bool,

  /**
   * A title for the menu item that has a submenu.
   *
   * @property submenu
   * @type {String | Object}
   */
  submenu: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),

  /**
   * The href to use for the menu item.
   *
   * @property href
   * @type {String}
   */
  href: _propTypes.default.string,

  /**
   * The to link to use for the menu item.
   *
   * @property to
   * @type {String}
   */
  to: _propTypes.default.string,

  /**
   * The target to use for the menu item.
   *
   * @property target
   * @type {String}
   */
  target: _propTypes.default.string
});

_defineProperty(MenuItem, "defaultProps", {
  submenuDirection: 'right'
  /**
   * Determines what content will be rendered for the menu item.
   *
   * @return {Object} JSX
   */

});

var _default = MenuItem;
exports.default = _default;