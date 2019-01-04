"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _definition = _interopRequireDefault(require("./../../../../demo/utils/definition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('tab', _.default, {
  type: 'layout',
  requiredProps: ["tabId", "title"],
  propTypes: {
    tabId: "String",
    title: "String"
  },
  propDescriptions: {
    'aria-labelledby': 'The id of the corresponding control that must be activated to show the tab.',
    role: 'The ARIA role of the component.',
    tabId: "A unique ID to identify this specific tab.",
    tabIndex: "Determines if the tab is tabbable using the keyboard.",
    title: "The title for this tab and it's button."
  }
});
var _default = definition;
exports.default = _default;