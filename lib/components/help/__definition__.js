"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _definition = _interopRequireDefault(require("./../../../demo/utils/definition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('help', _.default, {
  description: "User assistance or clarification presented by hovering on a question mark icon.",
  designerNotes: "\n  ",
  relatedComponentsNotes: "\n* Tooltip hovering on any Carbon icon? [Try Icon](/components/icon).\n* Tooltip hovering on any component? [Try Tooltip](/components/tooltip).\n ",
  hiddenProps: ['tooltipMessage'],
  propOptions: {
    tooltipPosition: _optionsHelper.default.positions,
    tooltipAlign: _optionsHelper.default.alignAroundEdges
  },
  propRequires: {
    tooltipAlign: 'children',
    tooltipPosition: 'children'
  },
  propValues: {
    children: 'This is an example of help.'
  },
  propTypes: {
    children: "Node",
    className: "String",
    href: "String",
    tooltipAlign: "String",
    tooltipPosition: "String",
    tooltipMessage: "N/A"
  },
  propDescriptions: {
    children: "This component supports children.",
    className: "Classes to apply to the component.",
    href: "Set's a href to link this help icon to.",
    tooltipAlign: "Aligns the tooltip.",
    tooltipPosition: "Positions the tooltip with the icon.",
    tooltipMessage: "N/A"
  }
});
var _default = definition;
exports.default = _default;