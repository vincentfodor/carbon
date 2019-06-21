"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _notes = _interopRequireDefault(require("./notes.md"));

var _appWrapper = _interopRequireDefault(require("./app-wrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('App Wrapper', module).add('default', function () {
  var children = (0, _addonKnobs.text)('children', 'This component will wrap itschildren within ' + 'the width constraints of your application.');
  return _react.default.createElement(_appWrapper.default, null, children);
}, {
  notes: {
    markdown: _notes.default
  }
});