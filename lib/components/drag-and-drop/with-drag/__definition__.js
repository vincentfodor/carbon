"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _definition = _interopRequireDefault(require("./../../../../demo/utils/definition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('with-drag', _.default, {
  props: ['identifier', 'canDrag', 'beginDrag', 'endDrag'],
  propTypes: {
    identifier: "String",
    canDrag: "Function",
    beginDrag: "Function",
    endDrag: "Function"
  },
  propDescriptions: {
    identifier: "Associates an instance of WithDrag with an instance of WithDrop, so multiple DraggableContexts can work independently.",
    canDrag: "An optional callback which can be used to determine if this item is draggable.",
    beginDrag: "An optional callback triggered when dragging begins.",
    endDrag: "An optional callback triggered when dragging ends."
  }
});
var _default = definition;
exports.default = _default;