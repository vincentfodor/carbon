"use strict";

require("core-js/modules/es.object.keys");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var addHex = function addHex(obj) {
  return function (acc, col) {
    var color = obj[col];
    acc[col] = "#".concat(color);
    return acc;
  };
};

var _default = function _default(configObject) {
  return Object.keys(configObject).reduce(addHex(configObject), {});
};

exports.default = _default;