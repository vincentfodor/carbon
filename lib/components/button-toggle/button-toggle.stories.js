"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _notes = _interopRequireDefault(require("./notes.md"));

var _buttonToggle = _interopRequireDefault(require("./button-toggle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

(0, _react2.storiesOf)('Button Toggle', module).add('default', function () {
  var children = (0, _addonKnobs.text)('children', 'Option');
  var buttonIcon = (0, _addonKnobs.select)('buttonIcon', [null].concat(_toConsumableArray(_optionsHelper.default.icons)));
  var buttonIconSize = (0, _addonKnobs.select)('buttonIconSize', _optionsHelper.default.sizesBinary, _optionsHelper.default.sizesBinary[0]);
  var size = (0, _addonKnobs.select)('size', _optionsHelper.default.sizesBinary, _optionsHelper.default.sizesBinary[1]);
  var disabled = (0, _addonKnobs.boolean)('disabled', false);
  var grouped = (0, _addonKnobs.boolean)('grouped', false);
  var deferTimeout = (0, _addonKnobs.number)('deferTimeout', 0);
  return _react.default.createElement(_buttonToggle.default, {
    buttonIcon: buttonIcon,
    buttonIconSize: buttonIconSize,
    size: size,
    disabled: disabled,
    grouped: grouped,
    deferTimeout: deferTimeout
  }, children);
}, {
  notes: {
    markdown: _notes.default
  }
});