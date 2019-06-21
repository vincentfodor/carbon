"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.keys");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _icon = _interopRequireDefault(require("../../icon"));

require("./step-sequence-item.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var baseClass = 'carbon-step-sequence-item';

var classes = function classes(status) {
  return "".concat(baseClass, " ").concat(baseClass, "--").concat(status);
};

var stepMarker = function stepMarker(status, indicator) {
  return status === 'complete' ? _react.default.createElement(_icon.default, {
    type: "tick"
  }) : indicator;
};

var ariaRoleProp = function ariaRoleProp(status) {
  return status === 'current' ? {
    'aria-current': 'step'
  } : {};
};

var completeLabel = function completeLabel(label, status) {
  if (label && status === 'complete') {
    return _react.default.createElement("span", {
      className: "carbon-step-sequence-item__visually-hidden"
    }, label);
  }

  return null;
};

var currentLabel = function currentLabel(label, status) {
  if (label && status === 'current') {
    return _react.default.createElement("span", {
      className: "carbon-step-sequence-item__visually-hidden"
    }, label);
  }

  return null;
};

var StepSequenceItem = function StepSequenceItem(_ref) {
  var children = _ref.children,
      indicator = _ref.indicator,
      status = _ref.status,
      hiddenCompleteLabel = _ref.hiddenCompleteLabel,
      hiddenCurrentLabel = _ref.hiddenCurrentLabel,
      props = _objectWithoutProperties(_ref, ["children", "indicator", "status", "hiddenCompleteLabel", "hiddenCurrentLabel"]);

  return _react.default.createElement("li", _extends({
    className: classes(status)
  }, ariaRoleProp(status), props), completeLabel(hiddenCompleteLabel, status), currentLabel(hiddenCurrentLabel, status), _react.default.createElement("div", {
    className: "carbon-step-sequence-item__label"
  }, _react.default.createElement("span", {
    className: "carbon-step-sequence-item__indicator"
  }, stepMarker(status, indicator)), children));
};

StepSequenceItem.propTypes = {
  children: _propTypes.default.node.isRequired,
  indicator: _propTypes.default.string.isRequired,
  status: _propTypes.default.oneOf(['complete', 'current', 'incomplete']),
  hiddenCompleteLabel: _propTypes.default.string,
  hiddenCurrentLabel: _propTypes.default.string
};
StepSequenceItem.defaultProps = {
  status: 'incomplete'
};
var _default = StepSequenceItem;
exports.default = _default;