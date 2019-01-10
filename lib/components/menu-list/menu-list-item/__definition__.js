"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _definition = _interopRequireDefault(require("./../../../../demo/utils/definition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('menu-list-item', _.default, {
  propTypes: {
    children: "Node",
    className: "String"
  },
  propDescriptions: {
    children: "This component supports children.",
    className: "Classes for the component."
  }
});
var _default = definition;
exports.default = _default;