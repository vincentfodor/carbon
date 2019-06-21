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
Object.defineProperty(exports, "ConfigurableItemRow", {
  enumerable: true,
  get: function get() {
    return _configurableItemRow.default;
  }
});
exports.ConfigurableItems = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _i18nJs = _interopRequireDefault(require("i18n-js"));

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

var _dragAndDrop = require("../drag-and-drop");

var _button = _interopRequireDefault(require("../button"));

var _configurableItemRow = _interopRequireDefault(require("./configurable-item-row"));

var _form = _interopRequireDefault(require("../form"));

require("./configurable-items.scss");

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

var ConfigurableItems =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ConfigurableItems, _React$Component);

  function ConfigurableItems() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ConfigurableItems);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ConfigurableItems)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onReset", function (event) {
      event.preventDefault();

      _this.props.onReset();
    });

    _defineProperty(_assertThisInitialized(_this), "additionalActions", function () {
      if (!_this.props.onReset) {
        return null;
      }

      return _react.default.createElement(_button.default, {
        onClick: _this.onReset,
        className: "carbon-button--reset"
      }, _i18nJs.default.t('actions.reset', {
        defaultValue: 'Reset'
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "rows", function () {
      return _react.default.createElement("ol", {
        className: "carbon-configurable-items__items-wrapper"
      }, _this.props.children);
    });

    return _this;
  }

  _createClass(ConfigurableItems, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", _extends({
        className: this.classes
      }, (0, _tags.default)('configurable-items', this.props)), _react.default.createElement(_dragAndDrop.DraggableContext, {
        onDrag: this.props.onDrag
      }, _react.default.createElement(_form.default, {
        leftAlignedActions: this.additionalActions(),
        onSubmit: this.props.onSave,
        onCancel: this.props.onCancel
      }, this.rows())));
    }
  }, {
    key: "classes",
    get: function get() {
      return (0, _classnames.default)('carbon-configurable-items', this.props.className);
    }
  }]);

  return ConfigurableItems;
}(_react.default.Component);

exports.ConfigurableItems = ConfigurableItems;

_defineProperty(ConfigurableItems, "propTypes", {
  /**
   * Children elements.
   *
   * @property children
   * @type {Node}
   */
  children: _propTypes.default.node,

  /**
   * A custom class name for the component.
   *
   * @property className
   * @type {String}
   */
  className: _propTypes.default.string,

  /**
   * Callback triggered when the form is canceled.
   *
   * @property onCancel
   * @type {Function}
   */
  onCancel: _propTypes.default.func.isRequired,

  /**
   * Callback triggered when an item is dragged.
   *
   * @property onDrag
   * @type {Function}
   */
  onDrag: _propTypes.default.func.isRequired,

  /**
   * Callback triggered when when the reset button is pressed.
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
  onSave: _propTypes.default.func.isRequired
});