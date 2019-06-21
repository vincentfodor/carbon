"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

var _events = _interopRequireDefault(require("../../utils/helpers/events"));

var _asScrollableListItem = _interopRequireDefault(require("./as-scrollable-list-item.wrapper"));

var _scrollableList = _interopRequireDefault(require("./scrollable-list.context"));

var _scrollableList2 = _interopRequireDefault(require("./scrollable-list.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ScrollableList =
/*#__PURE__*/
function (_Component) {
  _inherits(ScrollableList, _Component);

  function ScrollableList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ScrollableList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ScrollableList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      selectedItem: -1 // defaults to nothing being highlighted

    });

    _defineProperty(_assertThisInitialized(_this), "scrollBox", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "selectItem", function (itemIndex) {
      var selectedItem = _this.props.children[itemIndex];
      if (!_this.props.onSelect || !selectedItem) return;

      _this.props.onSelect(selectedItem.props.id);
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseOver", function (selectedItem) {
      return _this.setState({
        selectedItem: selectedItem
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function (_ref) {
      var _ref$target = _ref.target,
          scrollTop = _ref$target.scrollTop,
          scrollHeight = _ref$target.scrollHeight;
      if (!_this.props.onLazyLoad) return;
      if (scrollHeight - scrollTop < 300) _this.props.onLazyLoad();
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
      var selectedItem = _this.state.selectedItem;
      var newPos = selectedItem;

      if (_events.default.isUpKey(e)) {
        e.preventDefault();
        newPos = _this.nextSelectable('up', newPos);
      } else if (_events.default.isDownKey(e)) {
        e.preventDefault();
        newPos = _this.nextSelectable('down', newPos);
      } else if (_events.default.isEnterKey(e)) {
        e.preventDefault();

        _this.selectItem(selectedItem);

        return;
      } else if (_events.default.isTabKey(e)) {
        var index = _this.state.selectedItem;
        if (index > -1) _this.selectItem(index);
        return;
      } else {
        return;
      }

      _this.updateScroll(newPos);

      _this.setState({
        selectedItem: newPos
      });
    });

    return _this;
  }

  _createClass(ScrollableList, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      // if selected item is beyond the number of children then reset it (eg. through filtering)
      if (this.state.selectedItem + 1 > _react.default.Children.count(nextProps.children)) {
        var selectedItem = -1;
        if (nextProps.alwaysHighlight) selectedItem = this.nextSelectable('down', selectedItem);
        this.setState({
          selectedItem: selectedItem
        });
        this.scrollBox.current.scrollTop = 0;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.keyNavigation && !this.props.keyNavigation) {
        document.removeEventListener('keydown', this.handleKeyDown);
      } else if (!prevProps.keyNavigation && this.props.keyNavigation) {
        document.addEventListener('keydown', this.handleKeyDown);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.keyNavigation) {
        document.addEventListener('keydown', this.handleKeyDown);
      }

      if (this.props.alwaysHighlight) {
        var selectedItem = this.nextSelectable('down', -1);
        this.setState({
          selectedItem: selectedItem
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: "updateScroll",
    value: function updateScroll(item) {
      var list = this.scrollBox.current;
      if (!list) return;
      var listHeight = list.offsetHeight,
          children = list.children;
      if (!children[item]) return;
      var _children$item = children[item],
          itemTop = _children$item.offsetTop,
          itemHeight = _children$item.offsetHeight;

      if (itemTop + itemHeight > listHeight) {
        // set the bottom of the scroll box to the bottom of the selected item
        list.scrollTop = this.setScrollTop({
          item: item,
          children: children,
          listHeight: listHeight,
          itemHeight: itemHeight
        });
      } else {
        list.scrollTop = 0;
      }
    }
  }, {
    key: "setScrollTop",
    value: function setScrollTop(_ref2) {
      var item = _ref2.item,
          children = _ref2.children,
          listHeight = _ref2.listHeight,
          itemHeight = _ref2.itemHeight;

      // total height of list up to selected item
      var scrollPos = _toConsumableArray(children).slice(0, item).reduce(this.buildHeightReducer, 0);

      return scrollPos - listHeight + itemHeight;
    }
  }, {
    key: "buildHeightReducer",
    value: function buildHeightReducer(acc, _ref3) {
      var offsetHeight = _ref3.offsetHeight;
      return acc + offsetHeight;
    }
  }, {
    key: "nextSelectable",
    value: function nextSelectable(direction, position) {
      if (!this.props.children) return null;
      var limit = this.props.children.length;
      if (!limit) return null;
      var change = direction === 'down' ? 1 : -1,
          testIndex = position + change;
      if (testIndex <= -1) return this.nextSelectable(direction, limit);
      if (testIndex === limit) return this.nextSelectable(direction, -1);
      var testNode = this.props.children[testIndex];
      return this.isSelectable(testNode) ? testIndex : this.nextSelectable(direction, testIndex);
    }
  }, {
    key: "isSelectable",
    value: function isSelectable(node) {
      return node.props.isSelectable;
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(children) {
      var _this2 = this;

      return _react.default.Children.map(children, function (child, index) {
        if (!child.props.isSelectable) return child;
        var isSelected = index === _this2.state.selectedItem;
        return (0, _asScrollableListItem.default)(child, index, isSelected);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          onLazyLoad = _this$props.onLazyLoad,
          props = _objectWithoutProperties(_this$props, ["children", "onLazyLoad"]);

      return _react.default.createElement(_scrollableList2.default, _extends({
        ref: this.scrollBox,
        onScroll: this.handleScroll
      }, props, (0, _tags.default)('scrollable-list', props)), _react.default.createElement(_scrollableList.default.Provider, {
        value: {
          onMouseOver: this.handleMouseOver,
          onClick: this.selectItem
        }
      }, this.renderChildren(children)));
    }
  }]);

  return ScrollableList;
}(_react.Component);

_defineProperty(ScrollableList, "propTypes", {
  alwaysHighlight: _propTypes.default.bool,
  // ensures an item is always highlighted
  children: _propTypes.default.node,
  keyNavigation: _propTypes.default.bool,
  maxHeight: _propTypes.default.string,
  onLazyLoad: _propTypes.default.func,
  onSelect: _propTypes.default.func
});

var _default = ScrollableList;
exports.default = _default;