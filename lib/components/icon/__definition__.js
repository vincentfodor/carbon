"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _optionsHelper = _interopRequireDefault(require("utils/helpers/options-helper"));

var _ = _interopRequireDefault(require("./"));

var _definition = _interopRequireDefault(require("./../../../demo/utils/definition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('icon', _.default, {
  description: 'An eye catching icon associated with a UI element or content item.',
  designerNotes: "\n* Carbon comes with more than 100 standard icons to choose from. See the Icons page in the Style section.\n* A tooltip option is available within this component.\n* Many other components allow you to specify one of the standard Carbon icons to associate with them, for example, the Link component.\n  ",
  relatedComponentsNotes: "\n* Tooltip hovering on any component? [Try Tooltip](/components/tooltip).\n* Tooltip from a question mark icon? [Try Help](/components/help).\n* Moving the user to another location? [Try Link](/components/link).\n* After an image? [View Icons](/style/icons).\n ",
  propRequires: {
    bgShape: 'bgTheme',
    bgSize: 'bgTheme',
    tooltipAlign: 'tooltipMessage',
    tooltipPosition: 'tooltipMessage'
  },
  propValues: {
    type: 'tick'
  },
  propOptions: {
    bgShape: _optionsHelper.default.shapes,
    bgSize: _optionsHelper.default.sizesRestricted,
    bgTheme: _optionsHelper.default.colors,
    tooltipAlign: _optionsHelper.default.alignAroundEdges,
    tooltipPosition: _optionsHelper.default.positions,
    type: _optionsHelper.default.icons
  },
  propTypes: {
    bgShape: 'String',
    bgSize: 'String',
    bgTheme: 'String',
    className: 'String',
    tooltipAlign: 'String',
    tooltipMessage: 'String',
    tooltipPosition: 'String',
    type: 'String'
  },
  propDescriptions: {
    bgShape: 'The shape of the background.',
    bgSize: 'The size of the background.',
    bgTheme: 'The color/theme of the background.',
    className: 'Set custom classes on the component',
    tooltipAlign: 'The alignment of the tooltip.',
    tooltipMessage: 'A message to display as a tooltip to the icon.',
    tooltipPosition: 'The position of the tooltip.',
    type: 'The icon to render.'
  }
});
var _default = definition;
exports.default = _default;