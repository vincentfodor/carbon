"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _definition = _interopRequireDefault(require("./../../../demo/utils/definition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('grouped-character', _.default, {
  hiddenProps: ["groups"],
  propTypes: {
    className: "String",
    groups: "Array",
    separator: "String",
    inputWidth: "String",
    value: "String"
  },
  propDescriptions: {
    className: "Classes to apply to the component.",
    groups: "Determine groups of characters e.g. [1, 2, 3] would create the following text in the input 'A-BC-DEF'",
    separator: "Separator to split the character groups. Defaulted to a dash '-'. Must be a non alpha-numeric character",
    inputWidth: "Inline style to set the width of the component. Used if you want the width to match the character length",
    value: "The value of the input"
  },
  propValues: {
    groups: '[2,4,4]'
  }
});
definition.isAnInput();
var _default = definition;
exports.default = _default;