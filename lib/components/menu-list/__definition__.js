"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = require("./");

var _definition = _interopRequireDefault(require("./../../../demo/utils/definition"));

var _definition__ = _interopRequireDefault(require("./menu-list-item/__definition__"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('menu-list', _.MenuList, {
  description: "A set of related items that can be shown or hidden.",
  designerNotes: "\n* Children can be shown or hidden by clicking their title.\n* Useful to create simple accordion or menu patterns.\n  ",
  relatedComponentsNotes: "\n* Navigating the hierarchy of the app? [Try Menu](/components/menu).\n* Quickly accessing useful hyperlinks? [Try Animated Menu Button](/components/animated-menu-button).\n* Choosing between variants of the same page, or filtering content? [Try Tabs](/components/tabs).\n ",
  associatedDefinitions: [_definition__.default],
  hiddenProps: ["filter"],
  propRequires: {
    collapsible: "title"
  },
  propTypes: {
    children: "Node",
    className: "String",
    collapsible: "Boolean",
    filter: "Boolean",
    filterPlaceholder: "String",
    initiallyOpen: "Boolean",
    title: "String"
  },
  propDescriptions: {
    children: "This component supports children.",
    className: "Classes for the component.",
    collapsible: "Turns collapsible on/off.",
    filter: "Enable a filter for the menu. When this is enabled each menu item requires a name prop.",
    filterPlaceholder: "Placeholder text for the filter.",
    initiallyOpen: "Set the menu open on mount.",
    title: "Define a title for the menu, if this is defined then the menu can be collapsible."
  }
});
definition.addChildByDefinition(_definition__.default, {
  children: "Menu Item One"
});
definition.addChildByDefinition(_definition__.default, {
  children: "<MenuList title=\"Menu Item Two\" filter={ true }>\n    <MenuListItem name=\"First Sub Item\">\n      First Sub Item\n    </MenuListItem>\n    <MenuListItem name=\"Second Sub Item\">\n      Second Sub Item\n    </MenuListItem>\n    <MenuListItem name=\"Third Sub Item\">\n      Third Sub Item\n    </MenuListItem>\n  </MenuList>"
});
definition.addChildByDefinition(_definition__.default, {
  children: "Menu Item Three"
});
definition.addChildByDefinition(_definition__.default, {
  children: "Menu Item Four"
});
var _default = definition;
exports.default = _default;