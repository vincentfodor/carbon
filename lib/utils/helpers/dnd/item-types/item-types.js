"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Defines the string types of items that can be dragged and dropped.
 *
 * NB drag sources and drop targets only interact if they have the
 * same string type.
 */
var ItemTypes = {
  getItemType: function getItemType(props) {
    return props.identifier || 'defaultDragAndDropIdentifier';
  }
};
var _default = ItemTypes;
exports.default = _default;