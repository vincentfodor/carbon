"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDnd = require("react-dnd");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDndTouchBackend = _interopRequireDefault(require("react-dnd-touch-backend"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _itemTarget = _interopRequireDefault(require("../../../utils/helpers/dnd/item-target"));

var _customDragLayer = _interopRequireDefault(require("../custom-drag-layer"));

var _browser = _interopRequireDefault(require("../../../utils/helpers/browser"));

var _scrollableParent = _interopRequireDefault(require("../../../utils/helpers/scrollable-parent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
 * A draggable context component
 *
 * == How to use a draggable context in a component:
 *
 * In your file
 *
 *   import { DraggableContext, WithDrop, WithDrag } from 'carbon-react/lib/components/drag-and-drop'
 *
 * A draggable context is used to define an area in the page where drag and drop can be used on
 * one or more elements (you also need to use WithDrop and WithDrag):
 *
 *   <DraggableContext onDrag={ onItemMoved }>
 *     <ol>
 *       {
 *         items.map((item, index) => {
 *           return (
 *             <WithDrop index={ index }>
 *               <li>
 *                 <WithDrag><span>{ item.content }</span></WithDrag>
 *               </li>
 *             </WithDrop>
 *           );
 *         })
 *       }
 *     </ol>
 *   </DraggableContext>
 *
 * @class DraggableContext
 * @constructor
 */
var DraggableContext =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DraggableContext, _React$Component);

  function DraggableContext(_props) {
    var _this;

    _classCallCheck(this, DraggableContext);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DraggableContext).call(this, _props)); // Default speed of auto scrolling

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeIndex: null // {Number} tracks the currently dragged index

    });

    _defineProperty(_assertThisInitialized(_this), "handleHover", _itemTarget.default.onHoverUpDown);

    _defineProperty(_assertThisInitialized(_this), "checkAutoScroll", function (event) {
      if (_this.state.activeIndex === null) {
        return;
      } // constant for the position of the mouse pointer
      // on the y axis


      var clientY = event.clientY;

      var _Browser$getWindow = _browser.default.getWindow(),
          innerHeight = _Browser$getWindow.innerHeight; // constant for the threshold where the auto scroll begins


      var threshold = Math.max(140, innerHeight / 4);
      var speed = 0;

      if (clientY < threshold) {
        // -1 to 0 as we move from 0 to threshold
        speed = -1 + clientY / threshold;
      } else if (clientY > innerHeight - threshold) {
        // 0 to 1 as we move from (innerHeight - threshold) to innerHeight
        speed = 1 - (innerHeight - clientY) / threshold;
      }

      var shouldScroll = _this.speed === 0 && speed !== 0;
      _this.speed = speed;
      if (shouldScroll) _this.startScrolling();
    });

    _defineProperty(_assertThisInitialized(_this), "startScrolling", function () {
      if (!_this.frame) {
        _this.frame = _browser.default.getWindow().requestAnimationFrame(_this.tick);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "tick", function () {
      if (!_this.speed) {
        _this.frame = null;
        return;
      }

      var window = _browser.default.getWindow();

      if (!_this.element) {
        var node = _reactDom.default.findDOMNode(_assertThisInitialized(_this)); // eslint-disable-line  react/no-find-dom-node


        _this.element = _scrollableParent.default.searchForScrollableParent(node);
      } else {
        _this.element.scrollTop += _this.speed * 10;
      }

      window.scrollTo(0, window.scrollY + _this.speed * 10);
      _this.frame = window.requestAnimationFrame(_this.tick);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDrag", function (originalIndex, hoverIndex) {
      _this.setState({
        activeIndex: hoverIndex
      });

      if (typeof originalIndex !== 'undefined') {
        _this.props.onDrag(originalIndex, hoverIndex);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBeginDrag", function (props) {
      return _objectSpread({
        index: props.index
      }, props);
    });

    _defineProperty(_assertThisInitialized(_this), "handleEndDrag", function () {
      // dragging has ended so remove the active index
      _this.setState({
        activeIndex: null
      });

      _this.speed = 0;
    });

    _this.speed = 0; // Frame callback ref

    _this.frame = null; // Document element to scroll if any

    _this.element = null;
    return _this;
  }
  /**
   * Returns this draggable context properties to child components.
   *
   * @method getChildContext
   * @return {void}
   */


  _createClass(DraggableContext, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        dragAndDropActiveIndex: this.state.activeIndex,
        dragAndDropBeginDrag: this.handleBeginDrag,
        dragAndDropEndDrag: this.handleEndDrag,
        dragAndDropHover: this.handleHover,
        dragAndDropOnDrag: this.handleDrag
      };
    }
    /**
     * A callback for when hover is triggered
     *
     * @method handleHover
     * @return {Void}
     */

  }, {
    key: "render",

    /**
     * Renders the component
     */
    value: function render() {
      return _react.default.createElement("div", {
        className: "carbon-draggable-context",
        onMouseMove: this.props.autoScroll && this.state.activeIndex !== null ? this.checkAutoScroll : undefined
      }, this.props.children, this.props.customDragLayer);
    }
  }]);

  return DraggableContext;
}(_react.default.Component);

_defineProperty(DraggableContext, "propTypes", {
  /**
   * The element(s) where you want to apply drag
   * and drop functionality
   *
   * @property children
   * @type {Object}
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Optional CustomDragLayer to use for the ghost row when dragging & dropping
   *
   * @property customDragLayer
   * @type {Object}
   */
  customDragLayer: _propTypes.default.node,

  /**
   * Callback function for when an item has been dragged
   * e.g. to update data in a store
   */
  onDrag: _propTypes.default.func.isRequired,

  /**
   * Prop to enable/disable auto scroll on drag
   *
   * @property autoScroll
   * @type {Bool}
   */
  autoScroll: _propTypes.default.bool
  /**
   * Defines a context object for child components of the draggable context component.
   * https://facebook.github.io/react/docs/context.html
   *
   * @property childContextTypes
   * @type {Object}
   */

});

_defineProperty(DraggableContext, "childContextTypes", {
  dragAndDropActiveIndex: _propTypes.default.number,
  // Tracks the currently dragged index
  dragAndDropBeginDrag: _propTypes.default.func,
  // Callback for when dragging begins
  dragAndDropEndDrag: _propTypes.default.func,
  // Callback for when dragging ends
  dragAndDropHover: _propTypes.default.func,
  // Callback for when a hover is triggered
  dragAndDropOnDrag: _propTypes.default.func // Callback for when order is changed

});

_defineProperty(DraggableContext, "defaultProps", {
  customDragLayer: _react.default.createElement(_customDragLayer.default, null),
  autoScroll: false
});

var _default = (0, _reactDnd.DragDropContext)((0, _reactDndTouchBackend.default)({
  enableMouseEvents: true
}))(DraggableContext);

exports.default = _default;