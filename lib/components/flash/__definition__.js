"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _definition = _interopRequireDefault(require("./../../../demo/utils/definition"));

var _optionsHelper = _interopRequireDefault(require("./../../utils/helpers/options-helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('flash', _.default, {
  description: "A simple positive or negative confirmation of an action.",
  designerNotes: "\n* Presents a short confirmation message to the user in a banner which can animate quickly in, and out, at the bottom of the browser window.\n* Success messages disappear after a set timeout. Error messages stay on-screen until dismissed by the user.\n* Useful for general success and failure messages that the user doesn\u2019t need time to interpret. Try to place only a very short message in a Flash of just a few characters, e.g. \u2018Changes Saved\u2019.\n* Various types are available. \u2018Error\u2019 and \u2018Success\u2019 are by far the most useful - others are present for completeness by may not be used in practice very often, because a Flash isn\u2019t suitable for longer messages.\n  ",
  relatedComponentsNotes: "\n* Longer message which stays on-screen? [Try Message](/components/message).\n* Longer, time sensitive message that must be dismissed? [Try Toast](/components/toast).\n* Error or warning message that interrupts activity? [Try Alert](/components/alert).\n ",
  type: 'notification',
  propOptions: {
    as: _optionsHelper.default.colors
  },
  propValues: {
    message: 'This is some information from the Flash Component.',
    open: false
  },
  propTypes: {
    as: "String",
    open: "Boolean",
    onDismiss: "Function",
    message: "String",
    timeout: "Number"
  },
  propDescriptions: {
    as: "Sets the theme of the notification. Possible values include: " + _optionsHelper.default.colors.join(", "),
    open: "A boolean to control the open/closed state of the notification",
    onDismiss: "A callback for when the notification is dismissed. You can use this prop to close the notification",
    message: "The message provided to the flash component. This can be built in multiple formats e.g. \nA string: 'Alert' Array: ['Alert One', 'Alert Two']\nAn object with description: { description: 'Alert' }\nAn object with key/value pair: { first_name: 'is required', last_name: 'is required' }\nAn object with description & nested key/value pairs: { description: { first_name: 'is required', last_name: 'is required' } }",
    timeout: "Sets the time in Milliseconds the flash remains on the screen. After the timeout it will call the onDimiss callback. This will remove the close icon when set"
  },
  openPreview: true
});
definition.stubAction('onDismiss', 'open', false);
var _default = definition;
exports.default = _default;