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
exports.default = exports.collect = exports.UndecoratedCustomDragLayer = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactDnd = require("react-dnd");

require("./custom-drag-layer.scss");

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

var collect = function collect(monitor) {
  var item = monitor.getItem();
  return {
    currentOffset: monitor.getSourceClientOffset(),
    item: item,
    draggableNode: item ? item.draggableNode() : null,
    isDragging: monitor.isDragging()
  };
};

exports.collect = collect;

var CustomDragLayer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CustomDragLayer, _React$Component);

  function CustomDragLayer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CustomDragLayer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CustomDragLayer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getClassName", function (props) {
      return (0, _classnames.default)('custom-drag-layer', props.className);
    });

    _defineProperty(_assertThisInitialized(_this), "createClonedChild", function (props) {
      if (_this._container) {
        _this.width = props.draggableNode.getBoundingClientRect().width;
        _this.clonedChild = props.draggableNode.cloneNode(true);
        _this.clonedChild.style.pointerEvents = 'auto'; // allow the css to define the pointer style

        _this._container.appendChild(_this.clonedChild);
      }
    });

    return _this;
  }

  _createClass(CustomDragLayer, [{
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps) {
      if (nextProps.isDragging && nextProps.draggableNode && nextProps.draggableNode !== this.props.draggableNode) {
        this.setClonedChildWidth(nextProps);
      }

      if (nextProps.draggableNode && nextProps.isDragging && !this.clonedChild) {
        this.createClonedChild(nextProps);
      } else if (!nextProps.draggableNode && this.clonedChild) {
        this.removeClonedChild();
      }
    }
  }, {
    key: "getItemStyles",
    value: function getItemStyles(props) {
      var currentOffset = props.currentOffset;

      if (!currentOffset) {
        return {
          display: 'none'
        };
      }

      var x = currentOffset.x,
          y = currentOffset.y;
      var transform = "translate(".concat(x, "px, ").concat(y, "px)");
      return {
        transform: transform,
        WebkitTransform: transform,
        width: this.width
      };
    }
  }, {
    key: "setClonedChildWidth",
    value: function setClonedChildWidth(props) {
      this.width = props.draggableNode.getBoundingClientRect().width;
    }
  }, {
    key: "removeClonedChild",
    value: function removeClonedChild() {
      this._container.removeChild(this.clonedChild);

      this.clonedChild = null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", {
        className: this.getClassName(this.props)
      }, _react.default.createElement("div", {
        className: "custom-drag-layer__container",
        ref: function ref(node) {
          _this2._container = node;
        },
        style: this.getItemStyles(this.props)
      }));
    }
  }]);

  return CustomDragLayer;
}(_react.default.Component);

_defineProperty(CustomDragLayer, "propTypes", {
  /**
   * The dom node being dragged.
   *
   * @property draggableNode
   * @type {Node|Object}
   */
  draggableNode: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.node]),

  /**
   * Determine if the component is being dragged or not.
   *
   * @property isDragging
   * @type {Boolean}
   */

  /* ESLint is not detecting that the prop is called via nextProps */

  /* eslint-disable react/no-unused-prop-types */
  isDragging: _propTypes.default.bool.isRequired
  /* eslint-enable react/no-unused-prop-types */

});

var UndecoratedCustomDragLayer = CustomDragLayer;
exports.UndecoratedCustomDragLayer = UndecoratedCustomDragLayer;

var _default = (0, _reactDnd.DragLayer)(collect)(CustomDragLayer);

exports.default = _default;