"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _definition__ = _interopRequireDefault(require("./../textbox/__definition__"));

var _definition__2 = _interopRequireDefault(require("./../decimal/__definition__"));

var _definition__3 = _interopRequireDefault(require("./../dropdown-filter-ajax/__definition__"));

var _definition = _interopRequireDefault(require("./../../../demo/utils/definition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('inline-inputs', _.default, {
  description: 'Edits a set of closely related inputs that are grouped together.',
  propTypes: {
    label: 'String',
    children: 'Node',
    className: 'String',
    htmlFor: 'String'
  },
  propValues: {
    label: 'Inline Inputs'
  },
  hiddenProps: ['className', 'htmlFor'],
  propDescriptions: {
    label: 'Label applied to set of inputs',
    htmlFor: 'label for property',
    className: 'Classes applied to the inline inputs component',
    children: 'Supports all inputs as children'
  }
});
var inputProps = {
  fieldHelp: null,
  label: null,
  labelHelp: null
};
definition.addChildByDefinition(_definition__.default, inputProps);
definition.addChildByDefinition(_definition__2.default, inputProps);
definition.addChildByDefinition(_definition__3.default, inputProps);
var _default = definition;
exports.default = _default;