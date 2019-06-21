"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.match");

require("core-js/modules/es.string.replace");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = require("lodash");

var _reactRouter = require("react-router");

var _icon = _interopRequireDefault(require("../icon"));

var _ether = require("../../utils/ether");

var _events = _interopRequireDefault(require("../../utils/helpers/events"));

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

require("./link.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
 * A link widget.
 *
 * == How to use a Link in a component:
 *
 * In your file:
 *
 *   import Link from 'carbon-react/lib/components/link';
 *
 * To render the Link:
 *
 *  <Link href='foo'>Main Page</Link>
 *
 * For additional properties specific to this component, see propTypes.
 *
 * @class Link
 * @constructor
 */
var _Link =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_Link, _React$Component);

  function _Link() {
    var _this;

    _classCallCheck(this, _Link);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_Link).call(this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Triggers the onClick event for the enter key
   *
   * @method onKeyDown
   * @param {Object} ev
   */


  _createClass(_Link, [{
    key: "onKeyDown",
    value: function onKeyDown(ev) {
      if (this.props.onKeyDown) {
        this.props.onKeyDown(ev);
      } // return early if there is no onClick or there is a href prop


      if (!this.props.onClick || this.props.href) {
        return;
      } // return early if the event is not an enter key


      if (!_events.default.isEnterKey(ev)) {
        return;
      }

      this.props.onClick(ev);
    }
    /**
     * Getter for componet classes.
     *
     * @method componentClasses
     * @return {String} class names
     */

  }, {
    key: "render",

    /**
     * Renders the component.
     *
     * @method render
     */
    value: function render() {
      return _react.default.createElement(this.linkType.component, this.componentProps, _react.default.createElement("span", null, this.iconLeft, _react.default.createElement("span", {
        className: "carbon-link__content"
      }, this.props.children), this.iconRight));
    }
  }, {
    key: "componentClasses",
    get: function get() {
      return (0, _classnames.default)('carbon-link__anchor', this.props.className, {
        'carbon-link__anchor--disabled': this.props.disabled
      });
    }
    /**
     * Returns the icon if enabled and aligned to the left.
     *
     * @method iconLeft
     * @return {Object} JSX
     */

  }, {
    key: "iconLeft",
    get: function get() {
      if (!this.props.icon || this.props.iconAlign !== 'left') {
        return null;
      }

      return this.icon;
    }
    /**
     * Returns the icon if enabled and aligned to the right.
     *
     * @method iconRight
     * @return {Object} JSX
     */

  }, {
    key: "iconRight",
    get: function get() {
      if (!this.props.icon || this.props.iconAlign !== 'right') {
        return null;
      }

      return this.icon;
    }
    /**
     * Returns the markup for the icon.
     *
     * @method icon
     * @return {Object} JSX
     */

  }, {
    key: "icon",
    get: function get() {
      var classes = (0, _classnames.default)('carbon-link__icon', "carbon-link__icon--align-".concat(this.props.iconAlign));
      return _react.default.createElement(_icon.default, {
        type: this.props.icon,
        className: classes,
        tooltipMessage: this.props.tooltipMessage,
        tooltipAlign: this.props.tooltipAlign,
        tooltipPosition: this.props.tooltipPosition
      });
    }
    /**
     * Returns 0 or -1 for tabindex
     *
     * @method tabIndex
     * @return {String} 0 or -1
     */

  }, {
    key: "tabIndex",
    get: function get() {
      return this.props.tabbable && !this.props.disabled ? '0' : '-1';
    }
    /**
     * Regex for finding 'href:' or 'to:',
     *
     * @method typeRegex
     * @return {Regex}
     */

  }, {
    key: "typeRegex",
    get: function get() {
      return /^href:|^to:/;
    }
    /**
     * A hash of the different link types.
     *
     * @method linkTypes
     * @return {Object}
     */

  }, {
    key: "linkTypes",
    get: function get() {
      return {
        to: {
          prop: 'to',
          component: _reactRouter.Link
        },
        href: {
          prop: 'href',
          component: 'a'
        }
      };
    }
    /**
     * Returns the correct link type based on the given props.
     *
     * @method linkType
     * @return {Object}
     */

  }, {
    key: "linkType",
    get: function get() {
      var url = this.props.href || this.props.to;
      var type = 'href';

      if (url) {
        var match = url.match(this.typeRegex);

        if (match) {
          type = match[0].substr(0, match[0].length - 1);
        } else if (this.props.href) {
          type = 'href';
        } else {
          type = 'to';
        }
      }

      return this.linkTypes[type];
    }
    /**
     * Returns the parsed URL for the link.
     *
     * @method url
     * @return {String}
     */

  }, {
    key: "url",
    get: function get() {
      var url = this.props.href || this.props.to;

      if (!url) {
        return null;
      }

      return url.replace(this.typeRegex, '');
    }
    /**
     * Getter for component properties.
     *
     * @method componentProps
     * @return {Object} props
     */

  }, {
    key: "componentProps",
    get: function get() {
      var _validProps = (0, _ether.validProps)(this),
          props = Object.assign({}, _validProps);

      props.tabIndex = this.tabIndex;
      props = (0, _lodash.assign)({}, props, (0, _tags.default)('link', this.props));
      delete props.href;
      delete props.tabbable;
      delete props.to;
      props.className = this.componentClasses;
      props[this.linkType.prop] = this.url;
      props.onKeyDown = this.onKeyDown;
      return props;
    }
  }]);

  return _Link;
}(_react.default.Component);

_defineProperty(_Link, "propTypes", {
  /**
   * Children elements
   *
   * @property children
   * @type {Node}
   */
  children: _propTypes.default.node,

  /**
   * Custom className
   *
   * @property className
   * @type {String}
   */
  className: _propTypes.default.string,

  /**
   * Gives the link a disabled state.
   *
   * @property disabled
   * @type {Boolean}
   * @default undefined
   */
  disabled: _propTypes.default.bool,

  /**
   * Use `href` to use a generic anchor. You can also prefix your value
   * with `to:` or `href:` to override the prop type.
   *
   * @property href
   * @type {String}
   * @default undefined
   */
  href: _propTypes.default.string,

  /**
   * Renders an icon inline with the link.
   *
   * @property icon
   * @type {String}
   * @default undefined
   */
  icon: _propTypes.default.string,

  /**
   * Configures the alignment of the icon (left or right).
   *
   * @property iconAlign
   * @type {String}
   * @default left
   */
  iconAlign: _propTypes.default.string,

  /**
   * Function called when the mouse is clicked.
   *
   * @property onClick
   * @type {Function}
   */
  onClick: _propTypes.default.func,

  /**
   * Function called when a key is pressed.
   *
   * @property onKeyDown
   * @type {Function}
   */
  onKeyDown: _propTypes.default.func,

  /**
   * Allows the <a> tag to be set in or out of the tab order of the page
   * Boolean is used as tabindex > 0 is not really necessary, HTML order should
   * take precedence
   *
   * @property tabbable
   * @type {Boolean}
   * @default true
   */
  tabbable: _propTypes.default.bool,

  /**
   * Use `to` to use the React Router link. You can also prefix your value
   * with `to:` or `href:` to override the prop type.
   *
   * @property to
   * @type {String}
   * @default undefined
   */
  to: _propTypes.default.string,

  /**
   * The message for this tooltip
   *
   * @property
   * @type {String}
   */
  tooltipMessage: _propTypes.default.string,

  /**
   * The position of this tooltip: top, bottom, left or right
   *
   * @property
   * @default top
   * @type {String}
   */
  tooltipPosition: _propTypes.default.string,

  /**
   * The alignment of this tooltip: left, right or center
   *
   * @property
   * @default center
   * @type {String}
   */
  tooltipAlign: _propTypes.default.string
});

_defineProperty(_Link, "defaultProps", {
  iconAlign: 'left',
  tabbable: true
});

_defineProperty(_Link, "safeProps", ['onClick']);

var _default = _Link;
exports.default = _default;