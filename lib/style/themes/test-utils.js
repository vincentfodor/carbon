"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertIsSubset = exports.baseThemeConfig = exports.palette = void 0;

var _palette = _interopRequireDefault(require("../palette"));

var _atOpacity = _interopRequireDefault(require("../utils/at-opacity"));

var _colorConfig = _interopRequireDefault(require("../color-config"));

var _addHexSymbols = _interopRequireDefault(require("../utils/add-hex-symbols"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var palette = _objectSpread({}, (0, _palette.default)(_colorConfig.default), {
  atOpacity: _atOpacity.default
}, (0, _addHexSymbols.default)(_colorConfig.default));

exports.palette = palette;
var blackWithOpacity = (0, _atOpacity.default)('#000000');
var baseThemeConfig = {
  colors: {
    brand: palette.brilliantGreen,
    white: '#FFFFFF',
    error: palette.errorRed,
    warning: palette.gold,
    success: palette.brilliantGreenShade(20),
    info: palette.productBlueShade(3),
    text: {
      body: blackWithOpacity(0.9),
      disabled: blackWithOpacity(0.55),
      placeholder: blackWithOpacity(0.3)
    }
  }
};
exports.baseThemeConfig = baseThemeConfig;

var isObject = function isObject(obj) {
  return _typeof(obj) === 'object' && obj !== null;
};

var assertIsSubset = function assertIsSubset(obj, comparison) {
  if (!isObject(obj)) {
    // no further nesting, assert that values are equal
    expect(obj).toEqual(comparison);
    return;
  }

  var objKeys = Object.keys(obj);
  var comparisonKeys = Object.keys(comparison);
  objKeys.forEach(function (key) {
    // assert that keys are present
    expect(comparisonKeys.includes(key)).toBeTruthy(); // repeat for nested objects

    assertIsSubset(obj[key], comparison[key]);
  });
};

exports.assertIsSubset = assertIsSubset;