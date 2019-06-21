"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _notes = _interopRequireDefault(require("./notes.md"));

var _button = _interopRequireDefault(require("./button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Button', module).add('default', function () {
  var asOption = (0, _addonKnobs.select)('as', _optionsHelper.default.themesBinary, _optionsHelper.default.themesBinary[0]);
  var children = (0, _addonKnobs.text)('children', 'Example Button');
  var disabled = (0, _addonKnobs.boolean)('disabled', false);
  var theme = (0, _addonKnobs.select)('theme', _optionsHelper.default.buttonColors, _optionsHelper.default.buttonColors[0]);
  var size = (0, _addonKnobs.select)('size', _optionsHelper.default.sizesRestricted, _optionsHelper.default.sizesRestricted[1]);
  var subtext = size === _optionsHelper.default.sizesRestricted[2] ? (0, _addonKnobs.text)('subtext', '') : undefined;
  return _react.default.createElement(_button.default, {
    as: asOption,
    disabled: disabled,
    theme: theme,
    size: size,
    subtext: subtext,
    onClick: (0, _addonActions.action)('click')
  }, children);
}, {
  notes: {
    markdown: _notes.default
  }
});