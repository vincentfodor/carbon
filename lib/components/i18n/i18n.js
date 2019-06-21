"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _i18nJs = _interopRequireDefault(require("i18n-js"));

var _marked2 = _interopRequireDefault(require("marked"));

var _lodash = require("lodash");

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
 * A widget for internationalisation of text.
 *
 * == How to use an I18n component:
 *
 * In your file:
 *
 *   import I18n from 'carbon-react/lib/components/i18n';
 *
 * To render the message:
 *
 *  <I18n scope='foo' />
 *
 * For additional properties specific to this component, see propTypes.
 *
 * @class I18n
 * @constructor
 */
var I18n =
/*#__PURE__*/
function (_React$Component) {
  _inherits(I18n, _React$Component);

  function I18n() {
    _classCallCheck(this, I18n);

    return _possibleConstructorReturn(this, _getPrototypeOf(I18n).apply(this, arguments));
  }

  _createClass(I18n, [{
    key: "marked",
    value: function marked(inline) {
      // Make sure that we sanitize html markup in the MD compiler
      _marked2.default.setOptions({
        sanitize: true
      });

      return inline ? function (str) {
        return _marked2.default.inlineLexer(str, []);
      } : _marked2.default;
    }
  }, {
    key: "renderMarkup",
    value: function renderMarkup(inline, props, translation) {
      var el = inline ? 'span' : 'div';
      return _react.default.createElement(el, props, translation);
    }
    /**
     * Renders the component.
     *
     * @method render
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          markdown = _this$props.markdown,
          inline = _this$props.inline,
          scope = _this$props.scope,
          options = _this$props.options,
          props = _objectWithoutProperties(_this$props, ["markdown", "inline", "scope", "options"]);

      var translation = _i18nJs.default.t(scope, options);

      if (markdown) {
        props.dangerouslySetInnerHTML = {
          __html: this.marked(inline)(translation)
        };
        translation = null;
      }

      var markupProps = (0, _lodash.assign)({}, props, (0, _tags.default)('i18n', this.props));
      return this.renderMarkup(inline, markupProps, translation);
    }
  }]);

  return I18n;
}(_react.default.Component);

_defineProperty(I18n, "propTypes", {
  /**
   * Whether to compile the value as markdown
   *
   * @property markdown
   * @type {Boolean}
   * @default false
   */
  markdown: _propTypes.default.bool,

  /**
   * Whether to enclose the text in a <span> or a <div>
   *
   * @property inline
   * @type {Boolean}
   * @default true
   */
  inline: _propTypes.default.bool,

  /**
   * The key to lookup for a localised value
   *
   * @property scope
   * @type {String}
   * @default undefined
   */
  scope: _propTypes.default.string.isRequired,

  /**
   * Additional options to pass to I18n
   *
   * @property options
   * @type {Object}
   * @default undefined
   */
  options: _propTypes.default.object
});

_defineProperty(I18n, "defaultProps", {
  inline: true
});

var _default = I18n;
exports.default = _default;