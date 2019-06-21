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

var _flux = require("carbon-state-management/lib/flux");

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

var _dialog = _interopRequireDefault(require("../../components/dialog"));

var _store = _interopRequireDefault(require("./store"));

var _actions = _interopRequireDefault(require("./actions"));

var _configurableItemsContent = _interopRequireDefault(require("./configurable-items-content"));

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

var ConfigurableItemsPattern =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ConfigurableItemsPattern, _React$Component);

  function ConfigurableItemsPattern() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ConfigurableItemsPattern);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ConfigurableItemsPattern)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onCancel", function (event) {
      _actions.default.toggleDialogOpen();

      if (_this.props.onCancel) {
        _this.props.onCancel(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (rowIndex) {
      _actions.default.updateItem(rowIndex);
    });

    _defineProperty(_assertThisInitialized(_this), "onDrag", function (dragIndex, hoverIndex) {
      _actions.default.reorderItems(dragIndex, hoverIndex);
    });

    _defineProperty(_assertThisInitialized(_this), "onReset", function (event) {
      _actions.default.toggleDialogOpen();

      if (_this.props.onReset) {
        _this.props.onReset(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSave", function (event) {
      _this.props.onSave(event, _this.itemsData);
    });

    return _this;
  }

  _createClass(ConfigurableItemsPattern, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.itemsData && this.open && this.open !== prevState.configurableItemsStore.get('open')) {
        _actions.default.updateData(this.props.itemsData);
      }
    }
  }, {
    key: "content",
    value: function content() {
      if (this.itemsData.size === 0) {
        return null;
      }

      return _react.default.createElement(_configurableItemsContent.default, {
        itemsData: this.itemsData,
        onCancel: this.onCancel,
        onChange: this.onChange,
        onDrag: this.onDrag,
        onReset: this.onReset,
        onSave: this.onSave
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_dialog.default, _extends({}, (0, _tags.default)('configurable-items-pattern', this.props), {
        className: this.mainClasses,
        onCancel: this.onCancel,
        open: this.isDialogOpen,
        title: this.props.title,
        stickyFormFooter: true
      }), this.content());
    }
  }, {
    key: "itemsData",
    get: function get() {
      return this.state.configurableItemsStore.get('items_data');
    }
  }, {
    key: "open",
    get: function get() {
      return this.state.configurableItemsStore.get('open');
    }
    /**
     * Determines if the dialog is open
     *
     * The dialog is only considered open once the content has loaded. Otherwise the central
     * positioning of the dialog is based on incorrect content height.
     *
     * @method isDialogOpen
     * @return {Boolean}
     */

  }, {
    key: "isDialogOpen",
    get: function get() {
      return this.open && this.itemsData.size !== 0;
    }
  }, {
    key: "mainClasses",
    get: function get() {
      return (0, _classnames.default)('configurable-items-pattern', this.props.className);
    }
  }]);

  return ConfigurableItemsPattern;
}(_react.default.Component);

_defineProperty(ConfigurableItemsPattern, "propTypes", {
  /**
   * A custom class name for the component.
   *
   * @property className
   * @type {String}
   */
  className: _propTypes.default.string,

  /**
   * The configurable data.
   *
   * @property itemsData
   * @type {Object}
   */
  itemsData: _propTypes.default.object,

  /**
   * Callback triggered when the form is cancelled.
   *
   * @property onCancel
   * @type {Function}
   */
  onCancel: _propTypes.default.func,

  /**
   * Callback triggered when the form reset button is pressed.
   *
   * @property onReset
   * @type {Function}
   */
  onReset: _propTypes.default.func,

  /**
   * Callback triggered when the form is saved.
   *
   * @property onSave
   * @type {Function}
   */
  onSave: _propTypes.default.func.isRequired,

  /**
   * The title for the dialog.
   *
   * @property title
   * @type {Object}
   */
  title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
});

var _default = (0, _flux.connect)(ConfigurableItemsPattern, _store.default);

exports.default = _default;