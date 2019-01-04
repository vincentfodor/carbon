"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = require("./");

var _definition = _interopRequireDefault(require("./../../../demo/utils/definition"));

var _optionsHelper = _interopRequireDefault(require("utils/helpers/options-helper"));

var _definition__ = _interopRequireDefault(require("./menu-item/__definition__"));

var _definition__2 = _interopRequireDefault(require("./submenu-block/__definition__"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('menu', _.Menu, {
  description: "Navigates the user in the overall hierarchy of your app.",
  designerNotes: "\n* Presents a 2-level navigation hierarchy to the user.\n* The user\u2019s current location is indicated in green. Their hover location is indicated in blue.\n* Place separator rows into any menu to group items of similar meaning.\n* Carbon has Primary and Secondary styles for the menus - these are used to present primary and secondary navigation. A good example is the Sage One Accounting application.\n* More complex navigation patterns such as hamburger menus or mega menus are usually associated with poorer usability test performance, but might still be useful in some situations. Before trying more complex patterns, consider some user research techniques like Card Sorting to reduce the complexity in your information architecture.\n  ",
  relatedComponentsNotes: "\n* Choosing between variants of the same page, or filtering content? [Try Tabs](/components/tabs).\n* Need a container for your primary navigation? [Try Navigation Bar](/components/navigation-bar).\n* Quickly accessing useful hyperlinks? [Try Animated Menu Button](/components/animated-menu-button).\n ",
  associatedDefinitions: [_definition__.default, _definition__2.default],
  propOptions: {
    as: _optionsHelper.default.themesBinary
  },
  propTypes: {
    as: "String",
    className: "String"
  },
  propDescriptions: {
    as: "Primary or secondary theme for the menu.",
    className: "Classes to apply to the component."
  }
});
definition.addChildByDefinition(_definition__.default, {
  children: "Item One"
});
definition.addChildByDefinition(_definition__.default, {
  children: "<MenuItem href=\"#\">Sub Menu Item One</MenuItem>\n  <MenuItem href=\"#\">Sub Menu Item Two</MenuItem>",
  submenu: "Item Two"
});
definition.addChildByDefinition(_definition__.default, {
  children: "Item Third",
  href: "#"
});
definition.addChildByDefinition(_definition__.default, {
  children: "Item Four",
  href: "#"
});
definition.addChildByDefinition(_definition__.default, {
  children: "<MenuItem href=\"#\" icon='settings'>Sub Menu Item One</MenuItem>\n  <SubmenuBlock>\n    <MenuItem href=\"#\">Sub Menu Item Two</MenuItem>\n    <MenuItem href=\"#\">Sub Menu Item Three</MenuItem>\n  </SubmenuBlock>\n  <MenuItem href=\"#\">Sub Menu Item Four</MenuItem>\n  <MenuItem href=\"#\">Sub Menu Item Five</MenuItem>\n  <MenuItem href=\"#\">Sub Menu Item Six</MenuItem>\n  <MenuItem href=\"#\">Sub Menu Item Seven</MenuItem>\n  <MenuItem href=\"#\" divide={ true }>Sub Menu Item Eight</MenuItem>",
  href: "#",
  submenu: "Item Five",
  submenuDirection: "left"
});
var _default = definition;
exports.default = _default;