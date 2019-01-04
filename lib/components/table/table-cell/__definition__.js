"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _definition = _interopRequireDefault(require("./../../../../demo/utils/definition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('table-cell', _.default, {
  propTypes: {
    align: "String",
    action: "Boolean",
    children: "Node",
    className: "String"
  },
  propDescriptions: {
    align: "Aligns the text in the cell. Can be set to left, center or right.",
    action: "Defines if this cell is used for actions, such as the delete or select action (it makes the column more narrow).",
    children: "This component supports children.",
    className: "Classes to apply to the component."
  }
});
var _default = definition;
exports.default = _default;