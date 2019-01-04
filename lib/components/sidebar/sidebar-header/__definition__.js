"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _definition = _interopRequireDefault(require("./../../../../demo/utils/definition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('sidebar-header', _.default, {
  description: '[content needed] Basic example of the component',
  designerNotes: '[content needed] Basic designs description for the component',
  propTypes: {
    children: "Node"
  },
  propDescriptions: {
    children: "This component supports children."
  }
});
var _default = definition;
exports.default = _default;