"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _definition = _interopRequireDefault(require("./../../../../demo/utils/definition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('custom-drag-layer', _.default, {
  props: ['className'],
  propTypes: {
    className: 'String'
  },
  propDescriptions: {
    className: 'Custom classes to apply to the component'
  }
});
var _default = definition;
exports.default = _default;