"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _checkbox = _interopRequireDefault(require("../checkbox"));

var _icon = _interopRequireDefault(require("../icon"));

require("./switch.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var switchClasses = function switchClasses(props) {
  var loadingClass = props.loading ? ' carbon-switch__loading' : '',
      reverseClass = props.reverse ? ' carbon-switch__reverse' : '';
  return (0, _classnames.default)('carbon-switch', props.className, loadingClass, reverseClass);
};
/**
 * A Switch widget.
 *
 * This widget extends Checkbox and adds a switch styling over the top.
 *
 * == How to use a Switch component:
 *
 * In your file:
 *
 *   import Switch from 'carbon-react/lib/components/switch';
 *   <Switch label='My switch component.' />
 */


var Switch = function Switch(props) {
  return _react.default.createElement(_checkbox.default, _extends({
    disabled: props.loading
  }, propsForCheckbox(props)), _react.default.createElement("div", {
    className: "carbon-switch__switch".concat(props.loading ? ' carbon-switch__switch__loading' : '')
  }, _react.default.createElement("span", {
    className: "carbon-switch__slider"
  }), _react.default.createElement("div", {
    className: "carbon-switch__on"
  }, renderIcon('tick', props.loading)), _react.default.createElement("div", {
    className: "carbon-switch__off"
  }, renderIcon('cross', props.loading))));
};

Switch.propTypes = _objectSpread({}, _checkbox.default.propTypes, {
  loading: _propTypes.default.bool // Display loading dots in place of icon and disable component during load.

});
Switch.defaultProps = _objectSpread({}, _checkbox.default.defaultProps, {
  reverse: true
});

function propsForCheckbox(props) {
  var loading = props.loading,
      checkboxProps = _objectWithoutProperties(props, ["loading"]);

  if (loading) {
    checkboxProps.readOnly = true;
  }

  checkboxProps.className = switchClasses(props);
  return checkboxProps;
}

function renderIcon(icon, loading) {
  if (loading) {
    return _react.default.createElement("div", {
      className: "carbon-loading-dots"
    }, _react.default.createElement("div", {
      className: "carbon-loading-dots__bounce carbon-loading-dots__bounce1"
    }), _react.default.createElement("div", {
      className: "carbon-loading-dots__bounce carbon-loading-dots__bounce2"
    }), _react.default.createElement("div", {
      className: "carbon-loading-dots__bounce carbon-loading-dots__bounce3"
    }));
  }

  return _react.default.createElement(_icon.default, {
    type: icon
  });
}

var _default = Switch;
exports.default = _default;