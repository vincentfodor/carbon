"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _storybookState = require("@sambego/storybook-state");

var _addonActions = require("@storybook/addon-actions");

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _button = _interopRequireDefault(require("../button/button"));

var _alert = _interopRequireDefault(require("./alert"));

var _notes = _interopRequireDefault(require("./notes.md"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = new _storybookState.Store({
  open: false
});

var handleCancel = function handleCancel() {
  store.set({
    open: false
  });
  (0, _addonActions.action)('cancel')();
};

var handleOpen = function handleOpen() {
  store.set({
    open: true
  });
  (0, _addonActions.action)('open')();
};

(0, _react2.storiesOf)('Alert', module).add('default', function () {
  var title = (0, _addonKnobs.text)('title', 'Attention');
  var subtitle = (0, _addonKnobs.text)('subtitle', '');
  var children = (0, _addonKnobs.text)('children', 'This is an example of a alert.');
  var enableBackgroundUI = (0, _addonKnobs.boolean)('enableBackgroundUI', false);
  var disableEscKey = (0, _addonKnobs.boolean)('disableEscKey', false);
  var ariaRole = (0, _addonKnobs.text)('ariaRole', 'dialog');
  var height = (0, _addonKnobs.text)('height', '');
  var showCloseIcon = (0, _addonKnobs.boolean)('showCloseIcon', true);
  var size = (0, _addonKnobs.select)('size', _optionsHelper.default.sizesFull, _optionsHelper.default.sizesFull[0]);
  var stickyFormFooter = (0, _addonKnobs.boolean)('stickyFormFooter', false);
  var open = (0, _addonKnobs.boolean)('open', false);
  return _react.default.createElement(_alert.default, {
    onCancel: handleCancel,
    title: title,
    enableBackgroundUI: enableBackgroundUI,
    disableEscKey: disableEscKey,
    ariaRole: ariaRole,
    height: height,
    showCloseIcon: showCloseIcon,
    size: size,
    stickyFormFooter: stickyFormFooter,
    subtitle: subtitle,
    open: open
  }, children);
}, {
  notes: {
    markdown: _notes.default
  }
}).add('with button', function () {
  var title = (0, _addonKnobs.text)('title', 'Attention');
  var subtitle = (0, _addonKnobs.text)('subtitle', '');
  var children = (0, _addonKnobs.text)('children', 'This is an example of a alert.');
  var enableBackgroundUI = (0, _addonKnobs.boolean)('enableBackgroundUI', false);
  var disableEscKey = (0, _addonKnobs.boolean)('disableEscKey', false);
  var ariaRole = (0, _addonKnobs.text)('ariaRole', 'dialog');
  var height = (0, _addonKnobs.text)('height', '');
  var showCloseIcon = (0, _addonKnobs.boolean)('showCloseIcon', true);
  var size = (0, _addonKnobs.select)('size', _optionsHelper.default.sizesFull, _optionsHelper.default.sizesFull[0]);
  var stickyFormFooter = (0, _addonKnobs.boolean)('stickyFormFooter', false);
  return _react.default.createElement(_storybookState.State, {
    store: store
  }, _react.default.createElement(_button.default, {
    key: "button",
    onClick: handleOpen
  }, "Open Preview"), _react.default.createElement(_alert.default, {
    key: "alert",
    onCancel: handleCancel,
    title: title,
    enableBackgroundUI: enableBackgroundUI,
    disableEscKey: disableEscKey,
    ariaRole: ariaRole,
    height: height,
    showCloseIcon: showCloseIcon,
    size: size,
    stickyFormFooter: stickyFormFooter,
    subtitle: subtitle,
    open: store.get('open')
  }, children));
}, {
  notes: {
    markdown: _notes.default
  }
});