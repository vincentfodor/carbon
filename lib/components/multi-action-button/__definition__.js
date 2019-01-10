"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _definition = _interopRequireDefault(require("./../../../demo/utils/definition"));

var _definition__ = _interopRequireDefault(require("./../button/__definition__"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('multi-action-button', _.default, {
  description: "Related buttons of equal importance that are shown on hover.",
  designerNotes: "\n* Offers related actions to the user, but without taking up valuable space by showing them separately.\n* But, users may not always discover them, and could miss out.\n* Useful to show about 5 options or less.\n* Only use this component for commands that are related (e.g. Export PDF, Export CSV).\n* Don\u2019t use this component if one option is more generic or important than the others.\n* Carbon has a Transparent configuration, with subtle visual style, which could be useful to present less important or infrequently used options to the user, without calling attention to them.\n  ",
  relatedComponentsNotes: "\n* Performing a single action? [Try Button](/components/button).\n* Range of buttons where one is more important? [Try Split Button](/components/split-button).\n* Choosing one option from a highly visible range? [Try Button Toggle](/components/button-toggle).\n ",
  propOptions: {
    as: _optionsHelper.default.themesBinary,
    align: _optionsHelper.default.alignBinary
  },
  propTypes: {
    as: "String",
    text: "String",
    disabled: "Boolean",
    align: "String"
  },
  propValues: {
    text: "Example Multi Action Button"
  },
  propDescriptions: {
    as: "Primary or Secondary theme.",
    text: "Text for the main button.",
    disabled: "When enabled will disable the button.",
    align: "Aligns the buttons actions either to the left or right."
  }
});
definition.addChildByDefinition(_definition__.default);
definition.addChildByDefinition(_definition__.default);
definition.addChildByDefinition(_definition__.default);
var _default = definition;
exports.default = _default;