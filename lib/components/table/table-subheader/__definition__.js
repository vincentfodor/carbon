"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _definition = _interopRequireDefault(require("./../../../../demo/utils/definition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('table-subheader', _.default, {
  propTypes: {
    align: "String",
    children: "Node",
    className: "String",
    name: "String",
    sortable: "Boolean"
  },
  propDescriptions: {
    align: "Aligns the text in the cell. Can be set to left, center or right.",
    children: "This component supports children.",
    className: "Classes to apply to the component.",
    name: "This will normally match the key for data displayed in this column, it is used to identify the sort column in the table.",
    sortable: "Turn sortable on/off for this column."
  }
});
var _default = definition;
exports.default = _default;