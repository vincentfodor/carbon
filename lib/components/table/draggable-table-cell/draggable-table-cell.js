"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withDrag = _interopRequireDefault(require("../../drag-and-drop/with-drag"));

var _icon = _interopRequireDefault(require("../../icon"));

var _tableCell = _interopRequireDefault(require("../table-cell"));

require("./draggable-table-cell.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconHTML = _react.default.createElement("div", null, _react.default.createElement(_icon.default, {
  className: "draggable-table-cell__icon",
  type: "drag_vertical"
}));
/**
 * Creates a draggable table cell using WithDrag.
 *
 * @constructor
 */


var DraggableTableCell = function DraggableTableCell(props) {
  var _canDrag = props.canDrag !== false;

  var icon = _react.default.createElement(_withDrag.default, {
    identifier: props.identifier,
    draggableNode: props.draggableNode,
    canDrag: function canDrag() {
      return _canDrag;
    }
  }, _canDrag ? iconHTML : _react.default.createElement("span", null));

  return _react.default.createElement(_tableCell.default, {
    className: "draggable-table-cell"
  }, icon);
};

DraggableTableCell.propTypes = {
  identifier: _propTypes.default.string,
  // used to associate WithDrags and WithDrops
  draggableNode: _propTypes.default.func,
  // A function that returns the dom node used as the ghost layer when dragging
  canDrag: _propTypes.default.bool // used to specify whether the dragging is currently allowed

};
var _default = DraggableTableCell;
exports.default = _default;