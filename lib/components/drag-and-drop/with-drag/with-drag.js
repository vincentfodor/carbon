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

var _reactDnd = require("react-dnd");

var _itemTypes = _interopRequireDefault(require("../../../utils/helpers/dnd/item-types"));

var _browser = _interopRequireDefault(require("../../../utils/helpers/browser"));

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

var WithDrag =
/*#__PURE__*/
function (_React$Component) {
  _inherits(WithDrag, _React$Component);

  function WithDrag() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, WithDrag);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WithDrag)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "allowTextSelection", function (event) {
      var allowedElements = ['INPUT', 'TEXTAREA', 'SELECT'];
      var nonInputElement = event.target instanceof HTMLElement && allowedElements.indexOf(event.target.tagName) < 0;

      if (nonInputElement || _this.dragging) {
        event.preventDefault();
        return false;
      }

      return true;
    });

    return _this;
  }

  _createClass(WithDrag, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _browser.default.getWindow().addEventListener('selectstart', this.allowTextSelection);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _browser.default.getWindow().removeEventListener('selectstart', this.allowTextSelection);
    } // In Safari it changes the mouse cursor when dragging because it thinks text is being selected
    // We test if the target is an html element (not text) or if we already know the user is dragging

  }, {
    key: "render",
    value: function render() {
      // this.props.connectDragSource comes from react-dnd DragSource higher
      // order component, so disable the react/prop-types ESLint rule on the line
      // below
      return this.props.connectDragSource(this.props.children, {
        // eslint-disable-line react/prop-types
        dropEffect: 'copy'
      });
    }
  }]);

  return WithDrag;
}(_react.default.Component);

_defineProperty(WithDrag, "propTypes", {
  /**
   * The component that will have drag enabled
   *
   * @property children
   * @type {Object}
   */
  children: _propTypes.default.node.isRequired,

  /**
   * A function that returns the dom node being dragged.
   * It not used in this compnent but is passed to CustomDragLayer via the DragLayer higher order component
   * You cannot pass a ref directly as the prop because it is undefined until mounted.
   *
   * @property draggableNode
   * @type {Function}
   */

  /* eslint-disable react/no-unused-prop-types */
  draggableNode: _propTypes.default.func,

  /* eslint-enable react/no-unused-prop-types */
  // The following prop types are required by react-dnd,
  // and aren't used in this component directly. Therefore
  // disable the ESLint rule react/no-unused-prop-types

  /* eslint-disable react/no-unused-prop-types */
  identifier: _propTypes.default.string,
  // identifies an association between WithDrag and WithDrop
  canDrag: _propTypes.default.func,
  // an optional callback to determine if this item can be dragged
  beginDrag: _propTypes.default.func,
  // an optional callback to trigger when dragging begins
  endDrag: _propTypes.default.func // an optional callback to trigger when dragging ends

  /* eslint-enable react/no-unused-prop-types */

});

_defineProperty(WithDrag, "contextTypes", {
  dragAndDropBeginDrag: _propTypes.default.func,
  dragAndDropEndDrag: _propTypes.default.func
});

var ItemSource = {
  canDrag: function canDrag(props, monitor) {
    return props.canDrag ? props.canDrag(props, monitor) : true;
  },
  beginDrag: function beginDrag(props, monitor, component) {
    component.dragging = true;
    var beginDrag = props.beginDrag || component.context.dragAndDropBeginDrag;
    return beginDrag(props, monitor, component);
  },
  endDrag: function endDrag(props, monitor, component) {
    component.dragging = false;
    var endDrag = props.endDrag || component.context.dragAndDropEndDrag;
    return endDrag(props, monitor, component);
  }
};
WithDrag = (0, _reactDnd.DragSource)( // eslint-disable-line no-class-assign
_itemTypes.default.getItemType, ItemSource, function (connect) {
  return {
    connectDragSource: connect.dragSource()
  };
})(WithDrag);
var _default = WithDrag;
exports.default = _default;