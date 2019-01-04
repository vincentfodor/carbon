"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _definition = _interopRequireDefault(require("./../../../demo/utils/definition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('navigation-bar', _.default, {
  description: "Provides a container for your app's primary and secondary navigation.",
  designerNotes: "\n* Provides a container for [Menu](/components/menu) - together providing your app's primary and secondary navigation.\n* Everything can be contained within an [App Wrapper](/components/app-wrapper).\n  ",
  relatedComponentsNotes: "\n* Need an overall container? [Try App Wrapper](/components/app-wrapper).\n* Navigating the hierarchy of the app? [Try Menu](/components/menu).\n* Laying out a page in columns? [Try Row](/components/row).\n ",
  propOptions: {
    as: _optionsHelper.default.themesBinary
  },
  propTypes: {
    as: "String",
    children: "Node",
    className: "String"
  },
  propDescriptions: {
    as: "Primary or Secondary theme.",
    children: "This component supports children.",
    className: "Classes to apply to the component."
  }
});
var _default = definition;
exports.default = _default;