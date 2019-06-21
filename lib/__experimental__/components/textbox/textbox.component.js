"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.object.keys");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _input = require("../input");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// This component is a working example of what a Textbox might look like
// using only the new input componentry. It is still under development with
// subject to change as we continue to remove the decorator classes.
var Textbox = function Textbox(_ref) {
  var children = _ref.children,
      leftChildren = _ref.leftChildren,
      props = _objectWithoutProperties(_ref, ["children", "leftChildren"]);

  return _react.default.createElement(_input.InputPresentation, null, leftChildren, _react.default.createElement(_input.Input, props), children);
};

Textbox.propTypes = {
  children: _propTypes.default.node,
  leftChildren: _propTypes.default.node
};
var _default = Textbox;
exports.default = _default;