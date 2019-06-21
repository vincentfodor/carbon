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

require("./message.scss");

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
 * A Message widget.
 *
 * == How to use a Message in a component:
 *
 * In your file:
 *
 *   import Message from 'carbon-react/lib/components/message';
 *
 * To render the Message:
 *
 *   <Message title="This is a title" open={ true }>
 *     My message content
 *   </Message>
 *
 * Additionally you can pass optional props to the Message component
 *
 *   as: Customizes the appearence of the message changing the colour
 *       (see the 'iconColorSets' for possible values).
 *
 * @class Message
 * @constructor
 */
var Message =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Message, _React$Component);

  function Message() {
    _classCallCheck(this, Message);

    return _possibleConstructorReturn(this, _getPrototypeOf(Message).apply(this, arguments));
  }

  _createClass(Message, [{
    key: "render",
    value: function render() {
      return this.messageContent;
    }
  }, {
    key: "componentClasses",
    get: function get() {
      return (0, _classnames.default)('carbon-message', this.props.className, "carbon-message--".concat(this.props.as), {
        'carbon-message--rounded': this.props.roundedCorners,
        'carbon-message--border': this.props.border,
        'carbon-message--transparent': this.props.transparent,
        'carbon-message--dismissable': this.props.onDismiss
      });
    }
    /**
     * Content rendered for dismiss X
     *
     * @method dismissIcon
     */

  }, {
    key: "dismissIcon",
    get: function get() {
      var onDismiss = this.props.onDismiss;

      if (onDismiss) {
        return _react.default.createElement(_icon.default, {
          className: "carbon-message__close",
          "data-element": "dismiss",
          onClick: onDismiss,
          type: "close"
        });
      }

      return null;
    }
    /**
    * HTML for the title
    *
    * @method titleHTML
    */

  }, {
    key: "titleHTML",
    get: function get() {
      var title = this.props.title;

      if (title) {
        return _react.default.createElement("div", {
          className: "carbon-message__title",
          "data-element": "title"
        }, title);
      }

      return null;
    }
    /**
     * Classes to be applied to type background.
     *
     * @method componentClasses
     */

  }, {
    key: "typeClasses",
    get: function get() {
      return (0, _classnames.default)('carbon-message__type', {
        'carbon-message__type--rounded': this.props.roundedCorners
      });
    }
    /**
    * Content rendered for the message.
    *
    * @method messageContent
    */

  }, {
    key: "messageContent",
    get: function get() {
      var open = this.props.open;

      if (open) {
        return _react.default.createElement("div", _extends({
          className: this.componentClasses
        }, (0, _tags.default)('message', this.props)), _react.default.createElement("div", {
          className: this.typeClasses
        }, _react.default.createElement(_icon.default, {
          className: "carbon-message__type-icon",
          type: this.props.as
        })), _react.default.createElement("div", {
          className: "carbon-message__content"
        }, this.titleHTML, _react.default.createElement("div", {
          className: "carbon-message__body"
        }, this.props.children)), this.dismissIcon);
      }

      return null;
    }
  }]);

  return Message;
}(_react.default.Component);

_defineProperty(Message, "propTypes", {
  /**
   * Sets the theme for the component.
   * (see the 'iconColorSets' for possible values)
   *
   * @property as
   * @type {String}
   * @default 'info'
   */
  as: _propTypes.default.string,

  /**
   * Determines if a border is applied to the message
   *
   * @property border
   * @type {Boolean}
   * @default true
   */
  border: _propTypes.default.bool,

  /**
   * The body of the message content
   *
   * @property children
   * @type {Node}
   */
  children: _propTypes.default.node,

  /**
   * Add classes to the component.
   *
   * @property className
   * @type {String}
   */
  className: _propTypes.default.string,

  /**
   * Determines if the message is open.
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
  onDismiss: _propTypes.default.func,

  /**
   * Determines if the corners of the message are rounded
   *
   * @property roundedCorners
   * @type {Boolean}
   * @default true
   */
  roundedCorners: _propTypes.default.bool,

  /**
   * Add a title to this component
   *
   * @property title
   * @type {Node}
   */
  title: _propTypes.default.node,

  /**
   * Determines if the message background is transparent or filled defined by the as property.
   *
   * @property transparent
   * @type {Boolean}
   * @default false
   */
  transparent: _propTypes.default.bool
});

_defineProperty(Message, "defaultProps", {
  as: 'info',
  transparent: false,
  open: true,
  roundedCorners: true,
  border: true
  /**
   * Classes to be applied to the component.
   *
   * @method componentClasses
   */

});

var _default = Message;
exports.default = _default;