"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = require("./");

var _definition = _interopRequireDefault(require("./../../../demo/utils/definition"));

var _definition__ = _interopRequireDefault(require("./configurable-item-row/__definition__"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('configurable-items', _.ConfigurableItems, {
  associatedDefinition: [_definition__.default],
  dataVariable: 'configurableItemsData',
  description: "Allow a list of items to be checked/unchecked and re-ordered.",
  designerNotes: "\n* Designed to be used in tandem with the onConfigure prop in the table component so that columns can be enabled/disabled and re-ordered.\n  ",
  hiddenProps: ['children'],
  js: "\n    function rows(data) {\n      return (\n        data.map((column, rowIndex) => {\n          return (\n            <ConfigurableItemRow\n              enabled={column.get('enabled')}\n              key={rowIndex}\n              locked={column.get('locked')}\n              name={column.get('name')}\n              rowIndex={rowIndex}\n              onChange={onChange(rowIndex)}\n            />\n          );\n        })\n      );\n    }\n\n    function onChange(rowIndex) {\n      return (event) => {\n        updateConfigurableItem(rowIndex)\n      }\n    }\n  ",
  propValues: {
    children: "{ rows(configurableItemsData) }",
    onCancel: "() => {}",
    onDrag: "updateConfigurableItemsData",
    onReset: "resetConfigurableItemsData",
    onSave: "() => {}"
  },
  propTypes: {
    children: 'Node',
    className: 'String',
    onCancel: 'Function',
    onDrag: 'Function',
    onReset: 'Function',
    onSave: 'Function'
  },
  propDescriptions: {
    children: 'This component supports children',
    className: 'Classes to apply to the component.',
    onCancel: 'Callback triggered when the form is canceled.',
    onDrag: 'Callback triggered when an item is dragged.',
    onReset: 'Callback triggered when the reset button is pressed',
    onSave: 'Callback triggered when the form is saved.'
  },
  relatedComponentsNotes: "\n* [Table component](/components/table)\n* [ConfigurableItemsPattern](/patterns/configurable-items-pattern)\n ",
  requiredProps: ['onCancel', 'onDrag', 'onSave', 'title']
});
var _default = definition;
exports.default = _default;