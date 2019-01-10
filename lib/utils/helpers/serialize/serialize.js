"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @method serialize
 * @param {Object}
 * @param {String}
 */
var serialize = function serialize(obj, prefix) {
  var str = [];

  for (var prop in obj) {
    var key = prefix ? "".concat(prefix, "[").concat(prop, "]") : prop,
        value = obj[prop];
    str.push(_typeof(value) === 'object' ? serialize(value, key) : "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(value)));
  }

  return str.join('&');
};

var _default = serialize;
exports.default = _default;