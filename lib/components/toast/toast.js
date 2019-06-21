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

var _classnames = _interopRequireDefault(require("classnames"));

var _CSSTransitionGroup = _interopRequireDefault(require("react-transition-group/CSSTransitionGroup"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _icon = _interopRequireDefault(require("../icon"));

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

var _portal = _interopRequireDefault(require("../portal"));

require("./toast.scss");

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
* A Toast widget.
*
* == How to use a Toast in a component:
*
* In your file:
*
*   import Toast from 'carbon-react/lib/components/toast'
*
* To render the Toast:
*
*   <Toast open={ true } onDismiss={ this.dismissHandler } as='info'>
*     My toast content
*   </Toast>
*
* Additionally you can pass optional props to the Toast component
*
*   as: Customizes the appearence of the toast changing the colour
*       (see the 'iconColorSets' for possible values).
*
* @class Toast
* @constructor
*/
var Toast =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Toast, _React$Component);

  function Toast() {
    _classCallCheck(this, Toast);

    return _possibleConstructorReturn(this, _getPrototypeOf(Toast).apply(this, arguments));
  }

  _createClass(Toast, [{
    key: "render",

    /**
     * Renders the component.
     *
     * @method render
     */
    value: function render() {
      return _react.default.createElement(_portal.default, null, _react.default.createElement(_CSSTransitionGroup.default, {
        component: "div",
        transitionAppear: true,
        transitionName: "toast",
        transitionAppearTimeout: 1600,
        transitionEnterTimeout: 1500,
        transitionLeaveTimeout: 500
      }, this.toastContent));
    }
  }, {
    key: "componentClasses",
    get: function get() {
      return (0, _classnames.default)('carbon-toast', this.props.className, "carbon-toast--".concat(this.props.as));
    }
    /**
     * Content rendered for dismiss X
     *
     * @method dismissIcon
     */

  }, {
    key: "dismissIcon",
    get: function get() {
      if (this.props.onDismiss) {
        return _react.default.createElement(_icon.default, {
          className: "carbon-toast__close",
          "data-element": "close",
          onClick: this.props.onDismiss,
          type: "close"
        });
      }

      return null;
    }
    /**
     * Content rendered for the toast.
     *
     * @method toastContent
     */

  }, {
    key: "toastContent",
    get: function get() {
      if (this.props.open) {
        return _react.default.createElement("div", _extends({
          className: this.componentClasses
        }, (0, _tags.default)('toast', this.props)), _react.default.createElement("div", {
          className: "carbon-toast__type"
        }, _react.default.createElement(_icon.default, {
          className: "carbon-toast__type-icon",
          type: this.props.as
        })), _react.default.createElement("div", {
          className: "carbon-toast__content"
        }, this.props.children), this.dismissIcon);
      }

      return null;
    }
  }]);

  return Toast;
}(_react.default.Component);

_defineProperty(Toast, "propTypes", {
  /**
   * Customizes the appearance through colour
   * (see the 'iconColorSets' for possible values)
   *
   * @property as
   * @type {String}
   * @default 'warning'
   */
  as: _propTypes.default.string,

  /**
   * Custom className
   *
   * @property className
   * @type {String}
   */
  className: _propTypes.default.string,

  /**
   * The rendered children of the component.
   *
   * @property children
   * @type {Node}
   */
  children: _propTypes.default.node,

  /**
   * Determines if the toast is open.
   *
   * @property open
   * @type {Boolean}
   * @default true
   */
  open: _propTypes.default.bool,

  /**
   * Callback for when dismissed.
   *
   * @property onDismiss
   * @type {Function}
   */
  onDismiss: _propTypes.default.func
});

_defineProperty(Toast, "defaultProps", {
  as: 'warning',
  className: '',
  onDismiss: null,
  open: true
  /**
   * Classes to be applied to the component.
   *
   * @method componentClasses
   */

});

var _default = Toast;
exports.default = _default;