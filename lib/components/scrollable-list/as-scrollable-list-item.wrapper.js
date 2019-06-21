"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _scrollableList = _interopRequireDefault(require("./scrollable-list.context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var asScrollableListItem = function asScrollableListItem(CaptiveComponent, index, isSelected) {
  return _react.default.createElement(_scrollableList.default.Consumer, null, function (context) {
    return _react.default.cloneElement(CaptiveComponent, _objectSpread({}, CaptiveComponent.props, {
      onMouseOver: function onMouseOver() {
        return context.onMouseOver(index);
      },
      onClick: function onClick() {
        return context.onClick(index);
      },
      isSelected: isSelected
    }));
  });
};

var _default = asScrollableListItem;
exports.default = _default;