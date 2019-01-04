"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _definition = _interopRequireDefault(require("./../../../../demo/utils/definition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('page', _.default, {
  props: ['children', 'title'],
  propTypes: {
    title: 'Node',
    children: 'Node'
  },
  propDescriptions: {
    title: 'The title for the page, normally a Heading component.',
    children: 'This component supports children.'
  }
});
var _default = definition;
exports.default = _default;