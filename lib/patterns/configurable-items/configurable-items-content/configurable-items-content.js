"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _configurableItems = require("../../../components/configurable-items");

var _tags = _interopRequireDefault(require("../../../utils/helpers/tags"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ConfigurableItemsContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ConfigurableItemsContent, _React$Component);

  function ConfigurableItemsContent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ConfigurableItemsContent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ConfigurableItemsContent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onChange", function (rowId) {
      return function () {
        _this.props.onChange(rowId);
      };
    });

    _defineProperty(_assertThisInitialized(_this), "rows", function (itemsData) {
      return itemsData.map(function (item, rowIndex) {
        return _react.default.createElement(_configurableItems.ConfigurableItemRow, {
          enabled: item.get('enabled'),
          key: rowIndex,
          locked: item.get('locked'),
          name: item.get('name'),
          rowIndex: rowIndex,
          onChange: _this.onChange(rowIndex)
        });
      });
    });

    return _this;
  }

  _createClass(ConfigurableItemsContent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          itemsData = _this$props.itemsData,
          configurableItemsProps = _objectWithoutProperties(_this$props, ["itemsData"]);

      return _react.default.createElement(_configurableItems.ConfigurableItems, _extends({}, configurableItemsProps, (0, _tags.default)('configurable-items-content', this.props)), this.rows(itemsData));
    }
  }]);

  return ConfigurableItemsContent;
}(_react.default.Component);

_defineProperty(ConfigurableItemsContent, "propTypes", {
  /**
   * The configurable item data.
   *
   * @property itemsData
   * @type {Object}
   */
  itemsData: _propTypes.default.object,

  /**
   * Callback triggered when the form is canceled.
   *
   * @property onCancel
   * @type {Function}
   */
  onCancel: _propTypes.default.func.isRequired,

  /**
   * Callback triggered when the checkbox checked value is updated.
   *
   * @property onChange
   * @type {Function}
   */
  onChange: _propTypes.default.func.isRequired,

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

var _default = ConfigurableItemsContent;
exports.default = _default;