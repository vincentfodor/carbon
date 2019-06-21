"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.number.constructor");

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

require("./content.scss");

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
 * Renders content with a title and body text.
 *
 * @class Content
 * @constructor
 */
var Content =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Content, _React$Component);

  function Content(args) {
    var _this;

    _classCallCheck(this, Content);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Content).call(this, args));
    _this.titleStyle = _this.titleStyle.bind(_assertThisInitialized(_this));
    _this.bodyStyle = _this.bodyStyle.bind(_assertThisInitialized(_this));
    _this.classes = _this.classes.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Returns the HTML classes for the component.
   *
   * @method
   * @return {String}
   */


  _createClass(Content, [{
    key: "classes",
    value: function classes() {
      return (0, _classnames.default)('carbon-content', this.props.className, "carbon-content--".concat(this.props.as), "carbon-content--align-".concat(this.props.align), {
        'carbon-content--inline': this.props.inline,
        'carbon-content--body-full-width': this.props.bodyFullWidth
      });
    }
    /**
     * Returns styling for the title element.
     *
     * @method titleStyle
     * @return {Object}
     */

  }, {
    key: "titleStyle",
    value: function titleStyle() {
      var style = {};

      if (this.props.titleWidth) {
        style.width = "calc(".concat(this.props.titleWidth, "% - 30px)");
      }

      return style;
    }
    /**
     * Returns styling for the body element.
     *
     * @method bodyStyle
     * @return {Object}
     */

  }, {
    key: "bodyStyle",
    value: function bodyStyle() {
      var style = {};

      if (this.props.titleWidth) {
        style.width = "".concat(100 - Number(this.props.titleWidth), "%");
      }

      if (this.props.bodyFullWidth) {
        style.width = '100%';
      }

      return style;
    }
    /**
     * @method render
     * @return {Object} JSX
     */

  }, {
    key: "render",
    value: function render() {
      if (this.props.children) {
        return _react.default.createElement("div", _extends({
          className: this.classes()
        }, (0, _tags.default)('content', this.props)), _react.default.createElement("div", {
          className: "carbon-content__title",
          "data-element": "title",
          style: this.titleStyle()
        }, this.props.title), _react.default.createElement("div", {
          className: "carbon-content__body",
          "data-element": "body",
          style: this.bodyStyle()
        }, this.props.children));
      }

      return null;
    }
  }]);

  return Content;
}(_react.default.Component);

_defineProperty(Content, "propTypes", {
  /**
   * The body of the content component.
   *
   * @property children
   * @type {Object}
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
   * The title of the content component.
   *
   * @property title
   * @type {String}
   */
  title: _propTypes.default.string,

  /**
   * Applies a theme to the Content
   * Value: primary, secondary
   *
   * @property as
   * @type {String}
   * @default primary
   */
  as: _propTypes.default.string,

  /**
   * Displays the content inline with it's title.
   *
   * @property inline
   * @type {Boolean}
   * @default false
   */
  inline: _propTypes.default.bool,

  /**
   * Aligns the content (left, center or right).
   *
   * @property align
   * @type {String}
   * @default left
   */
  align: _propTypes.default.string,

  /**
   * Sets a custom width for the title element.
   *
   * @property titleWidth
   * @type {String}
   */
  titleWidth: _propTypes.default.string,

  /**
   * Over-rides the calculation of body width based on titleWidth
   * Sometimes we need the body to be full width while keeping a title width similar to other widths
   *
   * @property bodyFullWidth
   * @type {Boolean}
   * @default false
   */
  bodyFullWidth: _propTypes.default.bool
});

_defineProperty(Content, "defaultProps", {
  align: 'left',
  as: 'primary',
  bodyFullWidth: false,
  inline: false
});

var _default = Content;
exports.default = _default;