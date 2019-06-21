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

var _tooltipDecorator = _interopRequireDefault(require("../../utils/decorators/tooltip-decorator"));

var _icons = _interopRequireDefault(require("./icons"));

var _ether = require("../../utils/ether");

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

require("./icon.scss");

var _class, _temp;

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
 * An Icon widget.
 *
 * == How to use an Icon in a component:
 *
 * In your file
 *
 *   import Icon from 'carbon-react/lib/components/icon';
 *
 * To render an Icon:
 *
 *   <Icon type='foo' />
 *
 * 'type' is a required prop
 *
 * This widget follows this pattern:
 * https://facebook.github.io/react/blog/2015/09/10/react-v0.14-rc1.html#stateless-function-components
 *
 * For information on how to use the Tooltip Decorator see the decorator docs.
 *
 * @class Icon
 * @constructor
 */
var Icon = (0, _tooltipDecorator.default)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Icon, _React$Component);

  function Icon() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Icon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Icon)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "iconSvgHTML", function () {
      var icon = _this.renderIcon;

      if (icon) {
        /* eslint-disable react/no-danger */
        return _react.default.createElement("span", {
          className: "carbon-icon__svg-icon",
          dangerouslySetInnerHTML: icon
        });
        /* eslint-enable react/no-danger */
      }

      return null;
    });

    return _this;
  }

  _createClass(Icon, [{
    key: "render",

    /**
     * Renders the component.
     *
     * @method render
     * @return {Object} JSX
     */
    value: function render() {
      var _this2 = this;

      return [_react.default.createElement("span", _extends({
        key: "icon",
        className: this.mainClasses
      }, this.componentProps, (0, _tags.default)('icon', this.props), {
        ref: function ref(comp) {
          _this2._target = comp;
        },
        "data-element": this.type
      }), this.iconSvgHTML()), this.tooltipHTML];
    }
  }, {
    key: "renderIcon",

    /**
     * Checks if we have an SVG available, otherwise will fall back
     * to using the icon font.
     *
     * @method renderIcon
     * @return {HTML}
     */
    get: function get() {
      return _icons.default[this.type];
    }
    /**
     * Return component props
     *
     * @method componentProps
     * @return {Object} props
     */

  }, {
    key: "componentProps",
    get: function get() {
      var _validProps = (0, _ether.validProps)(this),
          props = Object.assign({}, _validProps);

      delete props.className;
      delete props.bgSize;
      delete props.bgShape;
      delete props.bgTheme;
      return props;
    }
    /**
     * Return component classes
     *
     * @method mainClasses
     * @return {String} classes
     */

  }, {
    key: "mainClasses",
    get: function get() {
      var _classNames2;

      var icon = this.renderIcon;
      var hasShape = this.props.bgShape || this.props.bgTheme;
      var classes = (0, _classnames.default)('carbon-icon', this.props.className, _defineProperty({}, "icon-".concat(this.type), !icon), (_classNames2 = {
        'carbon-icon--shape': hasShape
      }, _defineProperty(_classNames2, "carbon-icon--".concat(this.props.bgSize), hasShape), _defineProperty(_classNames2, "carbon-icon--".concat(this.props.bgShape), this.props.bgShape), _defineProperty(_classNames2, "carbon-icon--".concat(this.props.bgTheme), this.props.bgTheme), _classNames2));
      return classes;
    }
    /**
     * Return Icon type with overrides
     *
     * @method type
     * @return {String} icon type
     */

  }, {
    key: "type",
    get: function get() {
      // switch tweaks icon names for actual icons in the set
      switch (this.props.type) {
        case 'help':
          return 'question';

        case 'maintenance':
          return 'settings';

        case 'new':
          return 'gift';

        case 'success':
          return 'tick';

        default:
          return this.props.type;
      }
    }
  }]);

  return Icon;
}(_react.default.Component), _defineProperty(_class, "propTypes", {
  /**
   * Add classes to this component
   *
   * @property className
   * @type {String}
   */
  className: _propTypes.default.string,

  /**
   * Icon type
   *
   * @property  type
   * @type      {String}
   */
  type: _propTypes.default.string.isRequired,

  /**
   * Background size
   *
   * @property  bgSize
   * @type      {String}
   * @default   'small'
   */
  bgSize: _propTypes.default.oneOf(['small', 'medium', 'large']),

  /**
   * Background shape
   *
   * @property  bgShape
   * @type      {String}
   */
  bgShape: _propTypes.default.oneOf(['square', 'rounded-rect', 'circle']),

  /**
   * Background color theme
   *
   * @property  bgTheme
   * @type      {String}
   */
  bgTheme: _propTypes.default.string
}), _defineProperty(_class, "defaultProps", {
  bgSize: 'small'
}), _temp));
var _default = Icon;
exports.default = _default;