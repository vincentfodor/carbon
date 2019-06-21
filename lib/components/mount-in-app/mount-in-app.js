"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

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

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
 * Can be used to integrate React components into
 * pre-existing user interfaces.
 *
 * == How to use a MountInApp component:
 *
 * Import the component:
 *
 *   import MountInApp from 'carbon-react/lib/components/mount-in-app';
 *
 * Imagine that your pre-existing user interface has
 * a <div id="put_carbon_component_here" /> inside
 * which you want to put your new React component.
 *
 * To do that create a new React component that renders:
 *
 *   <MountInApp targetId="put_carbon_component_here">
 *     <div>Hello</div>
 *     <div>I'm a react component rendered in an existing UI</div>
 *   </MountInApp>
 *
 */
var MountInApp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MountInApp, _React$Component);

  function MountInApp() {
    _classCallCheck(this, MountInApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MountInApp).apply(this, arguments));
  }

  _createClass(MountInApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.targetElement) {
        _reactDom.default.render(this.contentHtml, this.targetElement);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.targetElement.firstChild.remove();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }, {
    key: "contentHtml",
    get: function get() {
      return _react.default.createElement("div", {
        className: "carbon-mount-in-app"
      }, this.props.children);
    }
  }, {
    key: "targetElement",
    get: function get() {
      return document.getElementById(this.props.targetId);
    }
  }]);

  return MountInApp;
}(_react.default.Component);

_defineProperty(MountInApp, "propTypes", {
  /**
   * Children elements
   *
   * @property children
   * @type {Node}
   */
  children: _propTypes.default.node,

  /**
   * ID of the element in which the children components will be rendered.
   *
   * @property targetId
   * @type {String}
   */
  targetId: _propTypes.default.string
});

var _default = MountInApp;
exports.default = _default;