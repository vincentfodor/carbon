"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

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