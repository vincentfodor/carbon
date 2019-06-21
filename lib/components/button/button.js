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

var _lodash = require("lodash");

var _link = _interopRequireDefault(require("../link"));

var _ether = require("../../utils/ether");

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

require("./button.scss");

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
 * A button widget.
 *
 * == How to use a Button in a component:
 *
 * In your file:
 *
 *   import Button from 'carbon-react/lib/components/button';
 *
 * To render the Button:
 *
 *   <Button>Save</Button>
 *
 *  ### Themes
 *
 *  Currently available button themese are blue(default), green, red, magenta, grey & white.
 *
 * For additional properties specific to this component, see propTypes and defaultProps.
 *
 * @class Button
 * @constructor
 */
var Button =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Button)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.element = _this.element.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Creates the child object for the button
   *
   * @return {Object} JSX
   */


  _createClass(Button, [{
    key: "buildChildren",
    value: function buildChildren() {
      var children = this.props.children;

      if (this.props.subtext.length > 0 && this.props.size === 'large') {
        children = _react.default.createElement("span", {
          className: "carbon-button__internal-wrapper"
        }, _react.default.createElement("span", {
          className: "carbon-button__main-text",
          "data-element": "main-text",
          key: "children"
        }, this.props.children), _react.default.createElement("span", {
          className: "carbon-button__subtext",
          "data-element": "subtext",
          key: "subtext"
        }, this.props.subtext));
      }

      return children;
    }
    /**
     * Build the element to render.
     *
     * @method element
     * @return {Object} JSX
     */

  }, {
    key: "element",
    value: function element() {
      var _validProps = (0, _ether.validProps)(this),
          props = Object.assign({}, _validProps); // if props.href then render an anchor instead


      var el = props.href || props.to ? _link.default : 'button';
      props.className = (0, _classnames.default)('carbon-button', "carbon-button--".concat(this.props.as), "carbon-button--".concat(this.props.theme), "carbon-button--".concat(this.props.size), props.className, {
        'carbon-button--disabled': this.props.disabled,
        'carbon-button--subtext': this.props.subtext.length > 0
      });
      props = (0, _lodash.assign)({}, props, (0, _tags.default)('button', this.props));
      return _react.default.createElement(el, props, this.buildChildren());
    }
    /**
     * Renders the component with props.
     *
     * @method render
     * @return {Object} JSX
     */

  }, {
    key: "render",
    value: function render() {
      return this.element();
    }
  }]);

  return Button;
}(_react.default.Component);

_defineProperty(Button, "propTypes", {
  /**
   * Customizes the appearance, can be set to 'primary' or 'secondary'.
   *
   * @property as
   * @type {String|Array}
   * @default 'secondary'
   */
  as: _propTypes.default.string,

  /**
   * A required prop. This is what the button will display.
   *
   * @property children
   * @type {Multiple}
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Gives the button a disabled state.
   *
   * @property disabled
   * @type {Boolean}
   * @default false
   */
  disabled: _propTypes.default.bool,

  /**
   * Gives the button a color.
   *
   * @property theme
   * @type {String}
   * @default blue
   */
  theme: _propTypes.default.string,

  /**
   * Determines size of button.
   *
   * @property size
   * @type {String}
   * @default medium
   */
  size: _propTypes.default.string,

  /**
   * Sets a second bit of text under the main text, fainter and smaller.
   * Currently only available on a large button
   *
   * @property subtext
   * @type {String}
   */
  subtext: function subtext(props) {
    if (props.subtext.length > 0 && props.size !== 'large') {
      throw new Error('subtext prop has no effect unless the button is large');
    } else {
      return null;
    }
  }
});

_defineProperty(Button, "safeProps", ['disabled']);

_defineProperty(Button, "defaultProps", {
  as: 'secondary',
  size: 'medium',
  theme: 'blue',
  disabled: false,
  subtext: ''
});

var _default = Button;
exports.default = _default;