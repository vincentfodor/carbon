"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _definition = _interopRequireDefault(require("./../../../demo/utils/definition"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _ = require("./");

var _definition__ = _interopRequireDefault(require("./step-sequence-item/__definition__"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('step-sequence', _.StepSequence, {
  description: "",
  designerNotes: "",
  relatedComponentsNotes: "",
  propDescriptions: {
    orientation: ''
  },
  propOptions: {
    orientation: _optionsHelper.default.orientation
  },
  propTypes: {
    orientation: 'String'
  },
  propValues: {
    orientation: 'horizontal'
  }
});
var _default = definition;
exports.default = _default;
definition.addChildByDefinition(_definition__.default, {
  ariaLabel: 'Step 1 of 5',
  children: 'Name',
  indicator: '1',
  status: 'complete'
});
definition.addChildByDefinition(_definition__.default, {
  ariaLabel: 'Step 2 of 5',
  children: 'Delivery Address',
  indicator: '2',
  status: 'complete'
});
definition.addChildByDefinition(_definition__.default, {
  ariaLabel: 'Step 3 of 5',
  children: 'Delivery Details',
  indicator: '3',
  status: 'current'
});
definition.addChildByDefinition(_definition__.default, {
  ariaLabel: 'Step 4 of 5',
  children: 'Payment',
  indicator: '4',
  status: 'incomplete'
});
definition.addChildByDefinition(_definition__.default, {
  ariaLabel: 'Step 5 of 5',
  children: 'Confirm',
  indicator: '5',
  status: 'incomplete'
});