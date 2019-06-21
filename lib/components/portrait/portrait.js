"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

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

var _md = _interopRequireDefault(require("crypto-js/md5"));

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

var _browser = _interopRequireDefault(require("../../utils/helpers/browser"));

var _icon = _interopRequireDefault(require("../icon"));

require("./portrait.scss");

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
 * A Portrait Widget.
 *
 * == How to use a Portrait in a component
 *
 * In your file
 *
 *   import Portrait from 'carbon-react/lib/components/portrait';
 *
 * To render the Portrait
 *
 *   <Portrait src='/my-image' alt='my image' />
 *
 * To render a gravatar portrait
 *
 *   <Portrait gravatar='mygrav@email.com' />
 *
 * You can pass a 'size' property to adjust the size of the portrait
 *    The default is lmed
 *    options: small, smed, lmed, large
 *
 * For additional properties specific to this component, see propTypes.
 */
var Portrait =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Portrait, _React$Component);

  function Portrait() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Portrait);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Portrait)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "memoizeInitials", null);

    _defineProperty(_assertThisInitialized(_this), "applyBackground", function (context, size) {
      var color = _this.props.darkBackground ? '#8A8E95' : '#D8D9DC';
      context.fillStyle = color;
      context.fillRect(0, 0, size, size);
      return context;
    });

    _defineProperty(_assertThisInitialized(_this), "applyText", function (context, size) {
      var letters = _this.props.initials ? _this.props.initials.slice(0, 3) : '';
      context.fillStyle = _this.props.darkBackground ? '#FFFFFF' : '#636872';
      context.fillText(letters.toUpperCase(), size / 2, size / 1.5);
      return context;
    });

    return _this;
  }

  _createClass(Portrait, [{
    key: "componentWillReceiveProps",

    /**
     * @method componentWillReceiveProps
     * @param {Object}
     * @return {Void}
     */
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.initials !== nextProps.initials || this.props.size !== nextProps.size) {
        this.memoizeInitials = null;
      }
    }
    /**
     * Cache the initials graphic.
     *
     * @param memoizeInitials
     * @type {String}
     */

  }, {
    key: "render",

    /**
     * Renders the component.
     *
     * @method render
     * @return {Object} JSX
     */
    value: function render() {
      return _react.default.createElement("div", _extends({
        className: this.mainClasses
      }, (0, _tags.default)('portrait', this.props)), this.initialsImage, this.avatarImage);
    }
  }, {
    key: "imgSrc",

    /**
     * Props for the HTML Img
     *
     * @method imgSrc
     * @return {String}
     */
    get: function get() {
      if (this.props.gravatar) {
        return this.gravatarSrc;
      }

      return this.props.src;
    }
    /**
     * Gets src url based on passed gravatar email
     *
     * @method gravatarSrc
     * @return {String}
     */

  }, {
    key: "gravatarSrc",
    get: function get() {
      var base = 'https://www.gravatar.com/avatar/';
      var hash = (0, _md.default)(this.props.gravatar.toLowerCase());
      var size = this.numericSizes[this.props.size];
      return "".concat(base).concat(hash, "?s=").concat(size, "&d=blank");
    }
    /**
     * Generates a graphic with initials.
     *
     * @method generateInitials
     * @return {String}
     */

  }, {
    key: "generateInitials",
    get: function get() {
      if (this.memoizeInitials) {
        return this.memoizeInitials;
      }

      var size = this.numericSizes[this.props.size];

      var canvas = _browser.default.getDocument().createElement('canvas');

      var context = canvas.getContext('2d'); // Set canvas with & height

      canvas.width = size;
      canvas.height = size; // Select a font family to support different language characters
      // like Arial

      context.font = "".concat(Math.round(canvas.width / 2.4), "px Lato, Arial");
      context.textAlign = 'center'; // Setup background and front color

      context = this.applyBackground(context, size);
      context = this.applyText(context, size); // Set image representation in default format (png)

      var dataURI = canvas.toDataURL(); // Dispose canvas element

      canvas = null;
      this.memoizeInitials = dataURI;
      return this.memoizeInitials;
    }
    /**
     * Applies background to canvas.
     *
     * @method applyBackground
     * @return {Object}
     */

  }, {
    key: "numericSizes",

    /**
     * Maps size to width/height value
     *
     * @method numericSizes
     * @return {Object}
     */
    get: function get() {
      return {
        'extra-small': '25',
        small: '30',
        'medium-small': '40',
        medium: '60',
        'medium-large': '70',
        large: '100',
        'extra-large': '120'
      };
    }
    /**
     * Main Class getter
     *
     * @method mainClasses
     * @return {String} Main className
     */

  }, {
    key: "mainClasses",
    get: function get() {
      return (0, _classnames.default)('carbon-portrait', 'carbon-portrait--image', "carbon-portrait--".concat(this.props.size), "carbon-portrait--".concat(this.props.shape), this.props.className, {
        'carbon-portrait--dark-background': this.props.darkBackground
      });
    }
    /**
     * Return the html for the initials image.
     *
     * @method initialsImage
     * @return {Object}
     */

  }, {
    key: "initialsImage",
    get: function get() {
      // if not using src, generate initials for potential fallback
      if (this.props.src) {
        return null;
      }

      if (!this.props.initials) {
        return this.sansInitialsImage;
      }

      return _react.default.createElement("img", {
        "data-element": "initials",
        className: "carbon-portrait__img carbon-portrait__initials",
        src: this.generateInitials,
        alt: this.props.alt
      });
    }
    /**
     * Return the html for the avatar image.
     *
     * @method avatarImage
     * @return {Object}
     */

  }, {
    key: "avatarImage",
    get: function get() {
      return _react.default.createElement("img", {
        "data-element": "user-image",
        className: "carbon-portrait__img carbon-portrait__avatar",
        src: this.imgSrc,
        alt: this.props.alt
      });
    }
    /**
     *
     * Return the html for the Icon displayed in the event that both the image and initials are missing
     *
     * @method sansInitialsImage
     * @return {Object}
     */

  }, {
    key: "sansInitialsImage",
    get: function get() {
      return _react.default.createElement(_icon.default, {
        className: "carbon-portrait__img carbon-portrait__sans-initials",
        type: "individual"
      });
    }
  }]);

  return Portrait;
}(_react.default.Component);

_defineProperty(Portrait, "propTypes", {
  /**
   * A custom class name for the component.
   *
   * @property className
   * @type {String}
   */
  className: _propTypes.default.string,

  /**
   * Size of the img
   * Options: small, smed, lmed, large
   *
   * @property size
   * @type {String}
   */
  size: _propTypes.default.string,

  /**
   * Source of the image
   *
   * @property src
   * @type {String}
   */
  src: function src(props) {
    if (!props.gravatar && !props.src) {
      throw new Error('Portrait requires a prop of "src" OR a prop of "gravatar"');
    } else if (props.gravatar && props.src) {
      throw new Error('Portrait requires a prop of "src" OR a prop of "gravatar" but not both');
    }
  },

  /**
   * Gravatar email
   *
   * @property src
   * @type {String}
   */
  gravatar: _propTypes.default.string,

  /**
   * Alternate text for image
   *
   * @property src
   * @type {String}
   */
  alt: _propTypes.default.string,

  /**
   * Shape of the portrait
   * Options - standard, circle, leaf
   *
   * @property shape
   * @type {String}
   */
  shape: _propTypes.default.string,

  /**
   * Initials to display as image
   *
   * @property initials
   * @type {String}
   * @default 'U'
   */
  initials: _propTypes.default.string,

  /**
   * If to use a dark background instead of a light background.
   *
   * @property darkBackground
   * @type {Boolean}
   * @default false
   */
  darkBackground: _propTypes.default.bool
});

_defineProperty(Portrait, "defaultProps", {
  alt: '',
  size: 'medium',
  shape: 'standard'
});

var _default = Portrait;
exports.default = _default;