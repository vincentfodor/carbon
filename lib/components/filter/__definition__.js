"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _definition = _interopRequireDefault(require("./../../../demo/utils/definition"));

var _definition__ = _interopRequireDefault(require("./../textbox/__definition__"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('filter', _.default, {
  propOptions: {
    align: _optionsHelper.default.alignBinary
  },
  propTypes: {
    align: "String"
  },
  propDescriptions: {
    align: "Align the inputs within the filter."
  }
});
definition.addChildByDefinition(_definition__.default, {
  fieldHelp: null,
  labelHelp: null
});
definition.addChildByDefinition(_definition__.default, {
  fieldHelp: null,
  labelHelp: null
});
definition.addChildByDefinition(_definition__.default, {
  fieldHelp: null,
  labelHelp: null
});
var _default = definition;
exports.default = _default;