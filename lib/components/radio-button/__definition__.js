"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _definition = _interopRequireDefault(require("./../../../demo/utils/definition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('radio-button', _.default, {
  description: "Selects one option from a longer list.",
  designerNotes: "\n* Consider \u2018smart default\u2019 selections, based on what your user is likely to choose. But, users may well leave the defaults in place, so make sure any consequences are easy to undo, and not harmful.\n* Useful to show less than about 10 options.\n* Disabled or read-only radio buttons might be difficult for a user to distinguish visually, so try to avoid this.\n  ",
  relatedComponentsNotes: "\n* Choosing one option from a very long list? [Try Dropdown](/components/dropdown).\n* Choosing more than one option? [Try Checkbox](/components/checkbox).\n* Choosing one option from a highly visible small range? [Try Button Toggle](/components/button-toggle).\n ",
  type: 'form',
  numberOfExamples: 2,
  propTypes: {
    className: "String",
    reverse: 'Boolean'
  },
  propValues: {
    name: "example"
  },
  propDescriptions: {
    className: "Classes to apply to the component.",
    reverse: 'Flips the input and label render order'
  }
});
definition.isAnInput();
var _default = definition;
exports.default = _default;