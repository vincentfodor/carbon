"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _definition = _interopRequireDefault(require("./../../../demo/utils/definition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('app-wrapper', _.default, {
  description: "Wraps all components inside an overall container.",
  relatedComponentsNotes: "\n* Need a container for your primary navigation? [Try Navigation Bar](/components/navigation-bar).\n* Navigating the hierarchy of the app? [Try Menu](/components/menu).\n* Laying out a page in columns? [Try Row](/components/row).\n ",
  propValues: {
    children: "This component will wrap its children within the width constraints of your application."
  },
  propTypes: {
    children: 'Node',
    className: 'String'
  },
  propDescriptions: {
    children: 'This component supports children.',
    className: 'Classes to apply to the component.'
  }
});
var _default = definition;
exports.default = _default;