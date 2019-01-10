"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _definition = _interopRequireDefault(require("./../../../../demo/utils/definition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('column', _.default, {
  type: 'layout',
  propTypes: {
    className: "String",
    columnOffset: "String",
    columnSpan: "String",
    columnAlign: "String",
    columnDivide: "Boolean",
    children: "Node"
  },
  propDescriptions: {
    className: "Classes to apply to the component.",
    columnOffset: "Offset this column by a certain number of columns.",
    columnSpan: "Span this column by a certain number of columns.",
    columnAlign: "Align the content of this column.",
    columnDivide: "Show a divide between columns. This is defined by the row component",
    children: "This component supports children."
  }
});
var _default = definition;
exports.default = _default;