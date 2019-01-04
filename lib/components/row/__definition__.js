"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _optionsHelper = _interopRequireDefault(require("utils/helpers/options-helper"));

var _definition__ = _interopRequireDefault(require("./column/__definition__"));

var _definition = _interopRequireDefault(require("./../../../demo/utils/definition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('row', _.default, {
  description: "Sets up a basic column-based UI layout.",
  associatedDefinitions: [_definition__.default],
  designerNotes: "\n* Useful to organise the UI of a page into a simple column-based layout.\n* Configure the number of columns, the margin between them, and any separators.\n  ",
  relatedComponentsNotes: "\n* Need an overall container? [Try App Wrapper](/components/app-wrapper).\n* Need a container for your primary navigation? [Try Navigation Bar](/components/navigation-bar).\n* Need a layout with controls and guidance text? [Try Settings Row](/components/settings-row).\n ",
  hiddenProps: ['children'],
  propTypes: {
    className: "String",
    gutter: "String",
    columnDivide: "Boolean",
    columnClasses: "String",
    columns: "String"
  },
  propDescriptions: {
    className: "Classes to apply to the component.",
    gutter: "Define how wide the gutter between the rows and columns should be.",
    columnDivide: "Enable a divider between each column.",
    columnClasses: "Classes to apply to all column children",
    columns: "Define a certain amount of columns, instead of basing it on the number of children.",
    children: "This component supports children of type Column."
  },
  propOptions: {
    gutter: _optionsHelper.default.sizesFull
  }
});
definition.addChildByDefinition(_definition__.default, {
  children: "<div />"
});
definition.addChildByDefinition(_definition__.default, {
  children: "<div />"
});
definition.addChildByDefinition(_definition__.default, {
  children: "<div />"
});
definition.addChildByDefinition(_definition__.default, {
  children: "<div />"
});
definition.addChildByDefinition(_definition__.default, {
  children: "<div />"
});
definition.addChildByDefinition(_definition__.default, {
  children: "<div />"
});
var _default = definition;
exports.default = _default;