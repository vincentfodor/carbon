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

var _heading = _interopRequireDefault(require("../heading"));

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

require("./settings-row.scss");

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
 * UI for a settings page row
 *
 * SettingsRow implements our UX design for settings pages. It accepts a `title` string to be displayed at the top left
 * of the row. The `description` property accepts a string or JSX object to support flexible layout of elements
 * (e.g. Links, bolded text, paragraphs) in the header column under the title. The default divider line at the bottom
 * of the row may be disabled by setting `divider={ false }`. All children are rendered in the input column to the
 * right of the header column.
 *
 *
 * == How to use a SettingsRow in a component:
 *
 * In your file:
 *
 *    import SettingsRow from 'carbon-react/lib/components/settings-row';
 *
 * To render the SettingsRow:
 *
 *    <SettingsRow title='My Setting' description='My description'>
 *      <Checkbox label='Enable my setting' />
 *      <span>Other content to go with input</span>
 *    </SettingsRow>
 *
 * @class SettingsRow
 * @constructor
 */
var SettingsRow =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SettingsRow, _React$Component);

  function SettingsRow() {
    _classCallCheck(this, SettingsRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(SettingsRow).apply(this, arguments));
  }

  _createClass(SettingsRow, [{
    key: "render",

    /**
     * Render settings page row
     *
     * @method  render
     * @return  {Object}  JSX
     */
    value: function render() {
      return _react.default.createElement("div", _extends({
        className: this.classes
      }, (0, _tags.default)('settings-row', this.props)), _react.default.createElement("div", {
        className: "carbon-settings-row__header"
      }, this.heading), _react.default.createElement("div", {
        className: "carbon-settings-row__input"
      }, this.props.children));
    }
  }, {
    key: "classes",

    /**
     * Return class names
     *
     * @method  classes
     * @return  {String}
     */
    get: function get() {
      return (0, _classnames.default)('carbon-settings-row', {
        'carbon-settings-row--has-divider': this.props.divider
      }, this.props.className);
    }
    /**
     * Return heading
     *
     * @method  heading
     * @return  {Object}  JSX
     */

  }, {
    key: "heading",
    get: function get() {
      if (!this.props.title) return null;
      return _react.default.createElement(_heading.default, {
        title: this.props.title,
        subheader: this.props.description,
        separator: this.props.description !== undefined,
        divider: false
      });
    }
  }]);

  return SettingsRow;
}(_react.default.Component);

_defineProperty(SettingsRow, "propTypes", {
  /**
   * Component children
   *
   * @property  children
   * @type      {Object}
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
   * Heading title
   *
   * @property  title
   * @type      {String}
   */
  title: _propTypes.default.string,

  /**
   * Heading description
   *
   * @property  description
   * @type      {Node}
   */
  description: _propTypes.default.node,

  /**
   * Row divider
   *
   * @property  divider
   * @type      {Boolean}
   * @default   true
   */
  divider: _propTypes.default.bool
});

_defineProperty(SettingsRow, "defaultProps", {
  divider: true
});

var _default = SettingsRow;
exports.default = _default;