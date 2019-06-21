"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

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
 * A Tab widget.
 *
 * == How to use a Tab Widget in a component:
 *  See Tabs component
 *
 * @class Tab
 * @constructor
 */
var Tab =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tab, _React$Component);

  function Tab() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tab);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tab)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "setValidity", function (valid) {
      _this.context.tabs.changeValidity(_this.props.tabId, valid);
    });

    _defineProperty(_assertThisInitialized(_this), "setWarning", function (warning) {
      _this.context.tabs.changeWarning(_this.props.tabId, warning);
    });

    return _this;
  }

  _createClass(Tab, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        tab: {
          setValidity: this.setValidity,
          setWarning: this.setWarning
        }
      };
    }
    /**
     * Classes to be applied to the single tab component
     *
     * @method mainClasses Main Class getter
     */

  }, {
    key: "render",

    /**
     * Renders the component.
     *
     * @method render
     */
    value: function render() {
      return _react.default.createElement("div", {
        "aria-labelledby": this.props['aria-labelledby'],
        className: this.mainClasses,
        role: this.props.role
      }, this.props.children);
    }
  }, {
    key: "mainClasses",
    get: function get() {
      return (0, _classnames.default)('carbon-tab', this.props.className);
    }
    /**
     * Sets valid state to passed param
     * It notifies the parent context of the change
     * and sets the current valid state to the new value
     *
     * @method setValidity
     * @param {Boolean} valid updates validity of this tab
     */

  }]);

  return Tab;
}(_react.default.Component);

_defineProperty(Tab, "propTypes", {
  /**
   * The id of the corresponding control that must be activated to show the tab
   *
   * @property aria-labelledby
   * @type {String}
   *
   */
  'aria-labelledby': _propTypes.default.string,

  /**
   * The role of the component
   *
   * @property role
   * @type {String}
   *
   */
  role: _propTypes.default.string,

  /**
   * Visible title in tabs header
   * Consumed within tabs component
   *
   * @property title
   * @type {String}
   *
   */
  title: _propTypes.default.string.isRequired,
  // eslint-disable-line react/no-unused-prop-types

  /**
   * id to identify the tab within the component
   * used when validating and switching tabs
   *
   * @property tabId
   * @type {String}
   */
  tabId: _propTypes.default.string.isRequired,

  /**
   * Custom className
   *
   * @property className
   * @type {String}
   */
  className: _propTypes.default.string,

  /**
   * Children elements
   *
   * @property children
   * @type {Node}
   */
  children: _propTypes.default.node
});

_defineProperty(Tab, "defaultProps", {
  className: '',
  children: null,
  role: 'tabPanel'
});

_defineProperty(Tab, "contextTypes", {
  /**
   * Defines what contexts are available to this tab componenet
   * https://facebook.github.io/react/docs/context.html
   *
   * @property tabs
   * @type {Object}
   */
  tabs: _propTypes.default.object
});

_defineProperty(Tab, "childContextTypes", {
  /**
   * Defines a context object for context children of this tab component.
   * https://facebook.github.io/react/docs/context.html
   *
   * @property tab
   * @type {Object}
   */
  tab: _propTypes.default.object
  /**
   * Returns tab object to context children.
   *
   * @method getChildContext
   */

});

var _default = Tab;
exports.default = _default;