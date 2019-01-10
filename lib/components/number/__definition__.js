"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _definition = _interopRequireDefault(require("./../../../demo/utils/definition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('number-input', _.default, {
  description: 'Captures a whole number (not a decimal or currency value).',
  designerNotes: "\n* Where it\u2019s clear a field only accepts numerals, you could disable entry of other characters. But, remember than for some regions, phone numbers and postcodes might contain dashes, and remember to cater for a minus sign if necessary.\n  ",
  relatedComponentsNotes: "\n* Entering a number including a decimal point? [Try Decimal](/components/decimal).\n* Entering numbers, symbols, and letters, or handling various formats? [Try Textbox](/components/textbox).\n ",
  hiddenProps: ['onKeyDown'],
  propDescriptions: {
    className: 'Classes to apply to the component.',
    onKeyDown: 'Callback function called in response to the keydown event',
    value: 'Controls the value of the NumberInput component'
  },
  propTypes: {
    className: 'String',
    onKeyDown: 'Function',
    value: 'String'
  },
  type: 'form',
  propValues: {
    value: ''
  }
});
definition.isAnInput();
var _default = definition;
exports.default = _default;