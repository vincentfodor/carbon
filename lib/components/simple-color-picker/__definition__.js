"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _optionsHelper = _interopRequireDefault(require("./../../utils/helpers/options-helper"));

var _definition = _interopRequireDefault(require("./../../../demo/utils/definition"));

var _component = _interopRequireDefault(require("./../../../demo/actions/component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('simple-color-picker', _.default, {
  description: "A small number of pre-set colour options to select from.",
  designerNotes: "\n* Choose from a small palette of pre-set colours, with indication of a currently selected colour.\n  ",
  relatedComponentsNotes: "\n* [Colors](/style/colors).\n ",
  hiddenProps: ['availableColors', 'selectedColor', 'name'],
  propTypes: {
    availableColors: "Array",
    selectedColor: "String",
    name: "String",
    onChange: "Function"
  },
  propValues: {
    availableColors: "['#00DC00', '#255BC7', '#ED1C5F']",
    name: "color",
    onChange: _component.default.updateSimpleColorPickerSelected,
    selectedColor: "#00DC00"
  },
  propDescriptions: {
    availableColors: "An array of color choices to display.",
    selectedColor: "The currently selected color.",
    name: "The name to apply to the input.",
    onChange: "A callback triggered when a color is selected."
  }
});
var _default = definition;
exports.default = _default;