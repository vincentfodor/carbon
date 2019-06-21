"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObject = isObject;
exports.mergeDeep = mergeDeep;

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