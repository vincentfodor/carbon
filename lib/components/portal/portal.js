"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-own-property-descriptor");

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

var _reactDom = _interopRequireWildcard(require("react-dom"));

var _guid = _interopRequireDefault(require("../../utils/helpers/guid"));

var _browser = _interopRequireDefault(require("../../utils/helpers/browser"));

var _scrollableParent = _interopRequireDefault(require("../../utils/helpers/scrollable-parent"));

require("./portal.scss");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var Portal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Portal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Portal)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.guid = (0, _guid.default)();
    return _this;
  }

  _createClass(Portal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.onReposition) {
        this.props.onReposition();
        /* eslint-disable */

        this.scrollParent = _scrollableParent.default.searchForScrollableParent(_reactDom.default.findDOMNode(this));
        /* eslint-enable */

        if (this.scrollParent) {
          this.scrollParent.addEventListener('scroll', this.props.onReposition);
        }

        _browser.default.getWindow().addEventListener('resize', this.props.onReposition);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.onReposition) {
        _browser.default.getWindow().removeEventListener('resize', this.props.onReposition);

        if (this.scrollParent) {
          this.scrollParent.removeEventListener('scroll', this.props.onReposition);
        }
      }

      _browser.default.getDocument().body.removeChild(this.defaultNode);

      this.defaultNode = null;
      this.scrollParent = null;
    }
  }, {
    key: "getPortalDiv",
    value: function getPortalDiv() {
      if (!this.defaultNode) {
        this.defaultNode = _browser.default.getDocument().createElement('div');
        this.defaultNode.classList.add('carbon-portal');
        this.defaultNode.setAttribute('data-portal-exit', this.guid);

        _browser.default.getDocument().body.appendChild(this.defaultNode);
      }

      return this.defaultNode;
    }
  }, {
    key: "render",
    value: function render() {
      if (!_browser.default.isDomAvailable()) {
        return null;
      }

      return _react.default.createElement("span", {
        "data-portal-entrance": this.guid
      }, (0, _reactDom.createPortal)(this.props.children, this.getPortalDiv()));
    }
  }]);

  return Portal;
}(_react.default.Component);

_defineProperty(Portal, "propTypes", {
  /**
   * The content of the portal.
   *
   * @property children
   * @type {Node}
   */
  children: _propTypes.default.node,

  /**
   * Callback function triggered when parent element is scrolled or window resized.
   *
   * @property onReposition
   * @type {Node}
   */
  onReposition: _propTypes.default.func
});

var _default = Portal;
exports.default = _default;