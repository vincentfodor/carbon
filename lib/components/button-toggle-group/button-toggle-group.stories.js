"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _notes = _interopRequireDefault(require("./notes.md"));

var _buttonToggle = _interopRequireDefault(require("../button-toggle/button-toggle"));

var _buttonToggleGroup = _interopRequireDefault(require("./button-toggle-group"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Button Toggle Group', module).addParameters({
  info: {
    propTablesExclude: [_buttonToggle.default],
    propTables: [_buttonToggleGroup.default]
  }
}).add('default', function () {
  var timeToDisappear = (0, _addonKnobs.number)('timeToDisappear', 0);
  var label = (0, _addonKnobs.text)('label', 'Example ButtonToggleGroup');
  var labelHelp = (0, _addonKnobs.text)('labelHelp', 'This text provides more information for the label.');
  var inputWidth = (0, _addonKnobs.text)('inputWidth', '');
  var fieldHelp = (0, _addonKnobs.text)('fieldHelp', 'This text provides help for the input.');
  var fieldHelpInline = (0, _addonKnobs.boolean)('fieldHelpInline', false);
  var labelInline = (0, _addonKnobs.boolean)('labelInline', false);
  var labelWidth = labelInline ? (0, _addonKnobs.text)('labelWidth', '') : undefined;
  var labelAlign = labelInline ? (0, _addonKnobs.text)('labelAlign', '') : undefined;
  return _react.default.createElement(_buttonToggleGroup.default, {
    timeToDisappear: timeToDisappear,
    label: label,
    labelInline: labelInline,
    labelWidth: labelWidth,
    labelAlign: labelAlign,
    labelHelp: labelHelp,
    inputWidth: inputWidth,
    fieldHelp: fieldHelp,
    fieldHelpInline: fieldHelpInline
  }, _react.default.createElement(_buttonToggle.default, {
    name: "grouped",
    id: "foo",
    value: "foo"
  }, "Foo"), _react.default.createElement(_buttonToggle.default, {
    name: "grouped",
    id: "bar",
    value: "bar"
  }, "Bar"), _react.default.createElement(_buttonToggle.default, {
    name: "grouped",
    id: "baz",
    value: "baz"
  }, "Baz"));
}, {
  notes: {
    markdown: _notes.default
  }
});