"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _definition = _interopRequireDefault(require("./../../../../demo/utils/definition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('with-drop', _.default, {
  props: ['identifier', 'index', 'hover'],
  propTypes: {
    identifier: "String",
    index: "Number",
    hover: "Function"
  },
  requiredProps: ['index'],
  propDescriptions: {
    identifier: "Associates an instance of WithDrag with an instance of WithDrop, so multiple DraggableContexts can work independently.",
    index: "A number to track this item's current index in the collection.",
    hover: "An optional callback triggered when this item is hovered over."
  }
});
var _default = definition;
exports.default = _default;