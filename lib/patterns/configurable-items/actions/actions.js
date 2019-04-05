"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _flux = require("carbon-state-management/lib/flux");

var _constants = _interopRequireDefault(require("../constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfigurableItemsActions = {
  toggleDialogOpen: function toggleDialogOpen() {
    _flux.Dispatcher.dispatch({
      actionType: _constants.default.TOGGLE_CONFIGURABLE_ITEMS_DIALOG
    });
  },
  reorderItems: function reorderItems(dragIndex, hoverIndex) {
    _flux.Dispatcher.dispatch({
      actionType: _constants.default.REORDER_CONFIGURABLE_ITEMS,
      dragIndex: dragIndex,
      hoverIndex: hoverIndex
    });
  },
  updateData: function updateData(data) {
    _flux.Dispatcher.dispatch({
      actionType: _constants.default.UPDATE_CONFIGURABLE_ITEMS_DATA,
      data: data
    });
  },
  updateItem: function updateItem(rowIndex) {
    _flux.Dispatcher.dispatch({
      actionType: _constants.default.UPDATE_CONFIGURABLE_ITEM,
      rowIndex: rowIndex
    });
  }
};
var _default = ConfigurableItemsActions;
exports.default = _default;