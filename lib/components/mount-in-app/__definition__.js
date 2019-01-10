"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _definition = _interopRequireDefault(require("./../../../demo/utils/definition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('mount-in-app', _.default, {
  description: "Mounts a component at a specific target in the DOM.",
  designerNotes: "\n* Useful to mount any Carbon component at a specific target in the DOM.\n ",
  hiddenProps: ['children', 'targetId'],
  propValues: {
    children: "<div>Content!</div>",
    targetId: "carbon-demo"
  },
  propTypes: {
    targetId: "String"
  },
  propDescriptions: {
    targetId: "The HTML ID in which to render the component."
  }
});
var _default = definition;
exports.default = _default;