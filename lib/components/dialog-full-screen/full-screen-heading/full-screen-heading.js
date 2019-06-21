"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.keys");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _appWrapper = _interopRequireDefault(require("../../app-wrapper"));

var _tags = _interopRequireDefault(require("../../../utils/helpers/tags"));

require("./full-screen-heading.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var fullScreenHeadingClasses = function fullScreenHeadingClasses(props) {
  return (0, _classnames.default)('carbon-full-screen-heading', props.className);
};

var FullScreenHeading = function FullScreenHeading(props) {
  var children = props.children,
      otherProps = _objectWithoutProperties(props, ["children"]);

  return _react.default.createElement("div", _extends({}, otherProps, {
    className: fullScreenHeadingClasses(props)
  }, (0, _tags.default)('full-screen-heading', props)), _react.default.createElement(_appWrapper.default, null, children));
};

FullScreenHeading.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string
};
var _default = FullScreenHeading;
exports.default = _default;