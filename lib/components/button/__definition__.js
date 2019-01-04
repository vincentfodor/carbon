"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _definition = _interopRequireDefault(require("./../../../demo/utils/definition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('button', _.default, {
  description: "Performs an action.",
  designerNotes: "\n* Avoid using buttons for navigation (taking the user somewhere else) - use them for performing an action or command.\n* Use a Primary configuration for positive actions that are the main goal for the user (e.g. Save, Submit, Continue).\n* Avoid placing Secondary actions on a form if you can.\n* If an action is particularly destructive (e.g. Delete or Clear), consider using Red configuration. It might be a good idea to show a confirmation dialog, or the ability to undo it too.\n* Try to create a single path to completion by aligning your action with your inputs.\n* You can disable a Button, but try to avoid this. If you need to, make it clear what the user needs to do in order to activate the Button. A good case for disabling an action is to prevent a form being submitted twice (e.g. on a payment page).\n  ",
  relatedComponentsNotes: "\n* Range of buttons where one is more important? [Try Split Button](/components/split-button).\n* Range of buttons all of the same importance? [Try Multi Action Button](/components/multi-action-button).\n* Choosing one option from a highly visible range? [Try Button Toggle](/components/button-toggle).\n ",
  propOptions: {
    as: _optionsHelper.default.themesBinary,
    theme: _optionsHelper.default.buttonColors,
    size: _optionsHelper.default.sizesRestricted
  },
  propTypes: {
    as: "String",
    children: "Node",
    disabled: "Boolean",
    theme: "String",
    size: "String",
    subtext: "String"
  },
  propValues: {
    children: "Example Button"
  },
  propDescriptions: {
    as: "Choose between Primary or Secondary styling.",
    children: "This component supports children.",
    disabled: "Controls the disabled state of the button.",
    theme: "Choose between different colour themes for the button.",
    size: "Choose between various sizes for the button.",
    subtext: "A second line of text to be added to a large button"
  }
});
var _default = definition;
exports.default = _default;