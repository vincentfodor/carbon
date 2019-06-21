"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.find");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.array.splice");

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

var _classnames = _interopRequireDefault(require("classnames"));

var _selectList = _interopRequireDefault(require("./select-list.component"));

var _inputDecoratorBridge = _interopRequireDefault(require("../input-decorator-bridge"));

var _pill = _interopRequireDefault(require("../../../components/pill"));

var _events = _interopRequireDefault(require("../../../utils/helpers/events"));

require("./select.style.scss");

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

/**
 * Basic example:
 *
 *   <Select>
 *     <Option text='Approve' />
 *     <Option text='Configure' />
 *     <Option text='Deny' />
 *   </Select>
 *
 * Custom JSX:
 *
 *   <Select>
 *     <Option text='Approve'><Icon type='tick' /></Option>
 *     <Option text='Configure'><Icon type='settings' /></Option>
 *     <Option text='Deny'><Icon type='cross' /></Option>
 *   </Select>
 */
var optionShape = _propTypes.default.shape({
  value: _propTypes.default.string.isRequired,
  text: _propTypes.default.string.isRequired
});

var Select =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Select)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      filter: undefined,
      open: false
    });

    _defineProperty(_assertThisInitialized(_this), "blurBlocked", false);

    _defineProperty(_assertThisInitialized(_this), "input", {});

    _defineProperty(_assertThisInitialized(_this), "bridge", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "assignInput", function (input) {
      _this.input = input;
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (ev) {
      if (_this.blurBlocked) return;

      _this.setState({
        filter: undefined,
        open: false
      });

      if (_this.props.onBlur) _this.props.onBlur(ev);
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (ev) {
      _this.openList();

      if (_this.props.onFocus) _this.props.onFocus(ev);
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseEnter", function () {
      return _this.blockBlur();
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseLeave", function () {
      return _this.unblockBlur();
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      return _this.openList();
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (newValue) {
      var updatedValue = newValue; // if the component is multi value then we need to push the new value into the array of values

      if (_this.isMultiValue(_this.props.value)) {
        // do not allow the same value twice
        if (_this.props.value.find(function (item) {
          return item.value === newValue.value;
        })) return;

        var value = _this.props.value.slice();

        value.push(newValue);
        updatedValue = value;
      }

      _this.triggerChange(updatedValue);
    });

    _defineProperty(_assertThisInitialized(_this), "handleFilter", function (ev) {
      var filter = ev.target.value;

      _this.setState({
        filter: filter
      });

      if (_this.props.onFilter) _this.props.onFilter(filter);
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (ev) {
      // order of event checking is important here!
      // if tab key then allow normal behaviour
      if (_events.default.isTabKey(ev)) {
        _this.unblockBlur();

        return;
      } // if the dropdown is not open then block regular activity and open it


      if (!_this.state.open) {
        ev.preventDefault();

        _this.openList();

        return;
      } // if esc key then close the dropdown


      if (_events.default.isEscKey(ev)) {
        _this.setState({
          open: false
        });

        return;
      } // if backspace key and multi value and no filter, remove the last item in the array


      if (_events.default.isBackspaceKey(ev)) {
        if (!_this.isMultiValue(_this.props.value) || _this.state.filter || !_this.props.value.length) return;

        _this.removeItem(_this.props.value.length - 1);
      }
    });

    return _this;
  }

  _createClass(Select, [{
    key: "blockBlur",
    value: function blockBlur() {
      this.blurBlocked = true;
      this.bridge.current.blockBlur = true; // this is to support the legacy behaviour in the bridge
    }
  }, {
    key: "unblockBlur",
    value: function unblockBlur() {
      this.blurBlocked = false;
      this.bridge.current.blockBlur = false; // this is to support the legacy behaviour in the bridge
    }
  }, {
    key: "openList",
    value: function openList() {
      if (this.state.open) return;
      this.setState({
        open: true
      });
      if (this.props.onOpen) this.props.onOpen();
    }
  }, {
    key: "triggerChange",
    value: function triggerChange(value) {
      var newState = {};

      if (!this.isMultiValue(value)) {
        // only closes the dropdown if not multi-value
        newState.open = false;
        this.unblockBlur();
      }

      newState.filter = undefined;
      this.setState(newState);

      this.bridge.current._handleContentChange(); // temporary - resets validation on the old bridge component


      if (this.props.onChange) this.props.onChange({
        target: {
          value: value
        }
      });
    }
  }, {
    key: "removeItem",
    value: function removeItem(index) {
      var newValue = this.props.value.slice(); // copies the array first to not mutate original value

      newValue.splice(index, 1);
      this.triggerChange(newValue);
    } // returns the human readable value for the user

  }, {
    key: "formattedValue",
    value: function formattedValue(filterValue, value) {
      var visibleValue = ''; // if not multi-value then fetch the text key on the value

      if (!this.isMultiValue(value) && value) visibleValue = value.text; // if there is a filter then return that over the selected visible value

      return typeof filterValue === 'string' ? filterValue : visibleValue;
    } // returns the correct value to feed into the textbox component

  }, {
    key: "value",
    value: function value(_value) {
      if (this.isMultiValue(_value)) return _value; // if multi value the returns the full array

      if (_value) return _value.value; // if single value then returns the id/value

      return undefined; // otherwise return undefined
    }
  }, {
    key: "renderMultiValues",
    value: function renderMultiValues(values) {
      var _this2 = this;

      var canDelete = !this.props.disabled && !this.props.readOnly;
      return values.map(function (value, index) {
        return _react.default.createElement("div", {
          key: value.value,
          className: "carbon-select__pill"
        }, _react.default.createElement(_pill.default, {
          onDelete: canDelete ? function () {
            return _this2.removeItem(index);
          } : undefined,
          title: value.text
        }, value.text));
      });
    }
  }, {
    key: "isMultiValue",
    value: function isMultiValue(value) {
      return Array.isArray(value);
    }
  }, {
    key: "className",
    value: function className(_className) {
      return (0, _classnames.default)('carbon-select', _className);
    }
  }, {
    key: "placeholder",
    value: function placeholder(_placeholder, value) {
      if (this.isMultiValue(value)) {
        // if multi-value then only show placeholder if nothing is currently selected
        return value.length ? null : _placeholder;
      }

      return _placeholder;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          customFilter = _this$props.customFilter,
          placeholder = _this$props.placeholder,
          value = _this$props.value,
          onLazyLoad = _this$props.onLazyLoad,
          onFilter = _this$props.onFilter,
          onOpen = _this$props.onOpen,
          props = _objectWithoutProperties(_this$props, ["children", "className", "customFilter", "placeholder", "value", "onLazyLoad", "onFilter", "onOpen"]);

      var events = {};

      if (!this.props.disabled && !this.props.readOnly) {
        events = {
          onBlur: this.handleBlur,
          onChange: this.handleFilter,
          onFocus: this.handleFocus,
          onKeyDown: this.handleKeyDown,
          onClick: this.handleClick
        };
      }

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_inputDecoratorBridge.default, _extends({}, props, {
        // this needs to send all of the original props
        "data-component": "carbon-select",
        className: this.className(className),
        formattedValue: this.formattedValue(this.state.filter, value),
        inputIcon: this.isMultiValue(value) ? undefined : 'dropdown',
        inputRef: this.assignInput,
        placeholder: this.placeholder(placeholder, value),
        ref: this.bridge,
        value: this.value(value),
        leftChildren: this.isMultiValue(value) && this.renderMultiValues(value)
      }, events), this.state.open && _react.default.createElement(_selectList.default, {
        alwaysHighlight: !!this.state.filter // only always ensure something is highlighted if filter
        ,
        customFilter: customFilter,
        filterValue: this.state.filter,
        onLazyLoad: onLazyLoad,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        onSelect: this.handleChange,
        open: this.state.open,
        target: this.input.current && this.input.current.parentElement
      }, children)));
    }
  }]);

  return Select;
}(_react.default.Component);

_defineProperty(Select, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  customFilter: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  label: _propTypes.default.string,
  onBlur: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  onOpen: _propTypes.default.func,
  onLazyLoad: _propTypes.default.func,
  onFilter: _propTypes.default.func,
  placeholder: _propTypes.default.string,
  readOnly: _propTypes.default.bool,
  value: _propTypes.default.oneOfType([optionShape, _propTypes.default.arrayOf(optionShape)])
});

var _default = Select;
exports.default = _default;