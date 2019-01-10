"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _definition = _interopRequireDefault(require("./../../../demo/utils/definition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('preview', _.default, {
  description: "Applies a preview loading state animation",
  type: 'miscellaneous',
  propTypes: {
    children: 'Node',
    className: 'String',
    height: 'String',
    lines: 'Number',
    loading: 'Boolean',
    width: 'String'
  },
  propDescriptions: {
    children: 'Child content to render in the component.',
    className: 'Classes to be applied to the component.',
    height: 'A custom height',
    lines: 'The number of lines to render',
    loading: 'Provides more control over when in a loading state.',
    width: 'A custom width'
  }
});
var _default = definition;
exports.default = _default;