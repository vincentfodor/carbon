"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
* Chain Functions
*
* Takes two functions, and return a new function which will call the two functions
* in order.
*
* @method chainFunctions
* @param {Function} newFunction function to be performed second
* @param {Function} originalFunction function to be performed first
* @return {Function} new function that called the two passed functions
*/
var _default = function _default(newFunction, originalFunction) {
  return function () {
    if (originalFunction) {
      originalFunction.apply(void 0, arguments);
    }

    newFunction.apply(void 0, arguments);
  };
};

exports.default = _default;