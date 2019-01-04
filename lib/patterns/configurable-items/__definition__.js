"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _actions = _interopRequireDefault(require("./actions"));

var _definition = _interopRequireDefault(require("./../../../demo/utils/definition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('configurable-items-pattern', _.default, {
  dataVariable: 'configurableItemsData',
  description: "A dialog that allows a list of items to be checked/unchecked and re-ordered.",
  designerNotes: "\n* Combines the ConfigurableItems and ConfigurableItemRow components.\n  ",
  hiddenProps: ['itemsData'],
  propValues: {
    itemsData: "configurableItemsData",
    onReset: "resetConfigurableItemsData",
    onSave: "configurableItemsOnSave",
    title: 'Configure Items'
  },
  propTypes: {
    className: 'String',
    itemsData: 'Object',
    onCancel: 'Function',
    onReset: 'Function',
    onSave: 'Function',
    title: 'String'
  },
  propDescriptions: {
    itemsData: 'Data to define the items that can be configured',
    className: 'Classes to apply to the component.',
    onCancel: 'Callback triggered when the form is cancelled.',
    onReset: 'Callback triggered when the reset button is pressed',
    onSave: 'Callback triggered when the form is saved.',
    title: 'Title to display as heading'
  },
  relatedComponentsNotes: "\n* [ConfigurableItems component](/components/configurable-items).\n* [ConfigurableItemRow component](/components/configurable-items/configurable-item-row).\n ",
  requiredProps: ['onSave', 'title']
});
definition.openPreview = true;

definition.onOpenPreview = function onOpenPreview() {
  _actions.default.toggleDialogOpen();
};

global.configurableItemsOnSave = function (event) {
  event.preventDefault();

  _actions.default.toggleDialogOpen();
};

var _default = definition;
exports.default = _default;