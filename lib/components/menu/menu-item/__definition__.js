"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _definition = _interopRequireDefault(require("./../../../../demo/utils/definition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('menu-item', _.default, {
  description: '[content needed] Basic example of the component',
  designerNotes: '[content needed] Basic designs description for the component',
  propTypes: {
    children: "Node",
    className: "String",
    divide: "Boolean",
    href: "String",
    onClick: "Function",
    selected: "Boolean",
    submenu: "String",
    submenuDirection: "String",
    target: "String",
    to: "String"
  },
  propDescriptions: {
    children: "This component supports children.",
    className: "Classes for the component.",
    divide: "Applies a dividing line above an item.",
    href: "A href to link the menu item to.",
    onClick: "onClick handler.",
    selected: "Applies styling to suggest this item is selected.",
    submenu: "Text for the menu item if the children are a submenu.",
    submenuDirection: "Direction for the submenu to align.",
    target: "Target for the link (eg. _blank)",
    to: "A React Router link for the menu item."
  }
});
var _default = definition;
exports.default = _default;