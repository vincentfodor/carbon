"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _definition = _interopRequireDefault(require("./../../../../demo/utils/definition"));

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _ = _interopRequireDefault(require("./"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('step-sequence-item', _.default, {
  description: "",
  designerNotes: "",
  relatedComponentsNotes: "",
  propDescriptions: {
    indicator: '',
    children: '',
    status: ''
  },
  propOptions: {
    status: _optionsHelper.default.steps
  },
  propTypes: {
    ariaLabel: 'String',
    ariaCompleteLabel: 'String',
    ariaCurrentLabel: 'String',
    indicator: 'String',
    children: 'node',
    status: 'String'
  },
  propValues: {
    ariaLabel: 'Step 1 of 5',
    ariaCompleteLabel: 'Complete',
    ariaCurrentLabel: 'Current',
    children: 'Step Label',
    indicator: '1',
    status: 'current'
  }
});
var _default = definition;
exports.default = _default;