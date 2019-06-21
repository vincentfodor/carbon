"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
* Generates a random guid, useful for creating unique IDs.
*
* @method guid
*/
var _default = function _default() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  return "".concat(s4()).concat(s4(), "-").concat(s4(), "-").concat(s4(), "-").concat(s4(), "-").concat(s4()).concat(s4()).concat(s4());
};

exports.default = _default;