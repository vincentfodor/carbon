"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.map");

require("core-js/modules/es.string.match");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Given a base color hex will return a function that expects
 * some given opactiy and returns the base color at that
 * opacity.
 */
var _default = function _default(base) {
  var rgb = base.match(/[^#]{2}/g).map(function (pair) {
    return parseInt(pair, 16);
  });
  return function (opacity) {
    return "rgba(".concat(rgb.join(','), ",").concat(opacity, ")");
  };
};

exports.default = _default;