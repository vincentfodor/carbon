"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _definition = _interopRequireDefault(require("./../../../demo/utils/definition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('create', _.default, {
  description: "Creates a new set of content that's grouped together.",
  designerNotes: "\n* Creates an item of data usually presented in a Pod or Fieldset, for example, an address.\n  ",
  relatedComponentsNotes: "\n* Editing a number of closely related inputs? [Try Fieldset](/components/fieldset).\n* Filling in a broad series of inputs? [Try Form](/components/form).\n* Viewing content that\u2019s grouped together visually? [Try Pod](/components/pod).\n* Using Fieldset and Pod components together? [Try Show/Edit Pod](/components/show-edit-pod).\n ",
  hiddenProps: ["linkProps"],
  propValues: {
    children: "Resource Name"
  },
  propTypes: {
    children: "Node",
    className: "String",
    linkProps: "Object"
  },
  propDescriptions: {
    children: "This component supports children",
    className: "Classes to apply to the component",
    linkProps: "An object of props to pass down to the link. See Link component for more details"
  }
});
var _default = definition;
exports.default = _default;