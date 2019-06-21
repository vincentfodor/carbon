"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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