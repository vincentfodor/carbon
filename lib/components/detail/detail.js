"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

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

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

var _icon = _interopRequireDefault(require("../icon"));

require("./detail.scss");

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

var Detail =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Detail, _React$Component);

  function Detail() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Detail);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Detail)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "icon", function () {
      if (!_this.props.icon) {
        return null;
      }

      return _react.default.createElement(_icon.default, {
        className: "carbon-detail__icon",
        type: _this.props.icon,
        "data-element": "icon"
      });
    });

    _defineProperty(_assertThisInitialized(_this), "footnote", function () {
      if (!_this.props.footnote) {
        return null;
      }

      return _react.default.createElement("div", {
        className: "carbon-detail__footnote",
        "data-element": "footnote"
      }, _this.props.footnote);
    });

    return _this;
  }

  _createClass(Detail, [{
    key: "render",

    /**
     * @method render
     * @return {Object} JSX
     */
    value: function render() {
      return _react.default.createElement("div", _extends({
        className: this.classes
      }, (0, _tags.default)('detail', this.props)), this.icon(), _react.default.createElement("div", {
        className: "carbon-detail__content"
      }, this.props.children), this.footnote());
    }
  }, {
    key: "classes",
    get: function get() {
      return (0, _classnames.default)('carbon-detail', this.props.className, {
        'carbon-detail--has-icon': this.props.icon
      });
    }
    /**
     * Returns the markup for the icon if one if specified.
     *
     * @method icon
     * @return {Object} JSX
     */

  }]);

  return Detail;
}(_react.default.Component);

_defineProperty(Detail, "propTypes", {
  /**
   * Custom className
   *
   * @property className
   * @type {String}
   */
  className: _propTypes.default.string,

  /**
   * The type of icon to use.
   *
   * @property icon
   * @type {Object}
   */
  icon: _propTypes.default.string,

  /**
   * A small detail to display under the main content.
   *
   * @property footnote
   * @type {String}
   */
  footnote: _propTypes.default.string,

  /**
   * The rendered children of the component.
   *
   * @property children
   * @type {Node}
   */
  children: _propTypes.default.node
  /**
   * Returns the classes for the component.
   *
   * @method classes
   * @return {String}
   */

});

var _default = Detail;
exports.default = _default;