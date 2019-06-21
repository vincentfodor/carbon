"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.match");

require("core-js/modules/es.string.pad-start");

require("core-js/modules/es.string.repeat");

require("core-js/modules/es.string.replace");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var decToHex = function decToHex(decimal) {
  return decimal.toString(16);
};

var hexToDec = function hexToDec(hex) {
  return parseInt(hex, 16);
};

var isShortHex = function isShortHex(hex) {
  return hex.length === 3;
};

var processHexes = function processHexes() {
  for (var _len = arguments.length, hexes = new Array(_len), _key = 0; _key < _len; _key++) {
    hexes[_key] = arguments[_key];
  }

  return hexes.map(function (hex) {
    return hex.replace(/#/, '');
  }).map(function (hex) {
    return isShortHex(hex) ? hex.repeat(2) : hex;
  });
};
/**
 * A Javascript implementation of the Sass `mix` mixin.
 */


var _default = function _default(inputColorA, inputColorB) {
  var weight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;

  var _processHexes = processHexes(inputColorA, inputColorB),
      _processHexes2 = _slicedToArray(_processHexes, 2),
      colorA = _processHexes2[0],
      colorB = _processHexes2[1];

  var colorAPairs = colorA.match(/.{1,2}/g),
      colorBPairs = colorB.match(/.{1,2}/g);
  var hex = colorAPairs.reduce(function (acc, pair, i) {
    var val1 = hexToDec(pair),
        val2 = hexToDec(colorBPairs[i]);
    var combination = decToHex(Math.floor(val2 + (val1 - val2) * (weight / 100.0)));
    return acc + combination.padStart(2, '0');
  }, '').toUpperCase();
  return "#".concat(hex);
};

exports.default = _default;