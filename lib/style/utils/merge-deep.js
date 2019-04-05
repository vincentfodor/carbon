"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObject = isObject;
exports.mergeDeep = mergeDeep;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.assign");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
function isObject(item) {
  return item && _typeof(item) === 'object' && !Array.isArray(item);
}
/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */


function mergeDeep(target) {
  var merge = function merge(_target) {
    for (var _len2 = arguments.length, _sources = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      _sources[_key2 - 1] = arguments[_key2];
    }

    if (!_sources.length) return _target;

    var source = _sources.shift();

    if (isObject(_target) && isObject(source)) {
      for (var key in source) {
        if (isObject(source[key])) {
          merge(_target[key], source[key]);
        } else {
          Object.assign(_target, _defineProperty({}, key, source[key]));
        }
      }
    }

    return merge.apply(void 0, [_target].concat(_sources));
  }; // ensure function is not mutative


  var newTarget = JSON.parse(JSON.stringify(target));

  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  return merge.apply(void 0, [newTarget].concat(sources));
}