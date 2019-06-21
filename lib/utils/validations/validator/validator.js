"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isLegacy = function isLegacy(func) {
  return _typeof(func) === 'object';
};

var handleLegacyValidation = function handleLegacyValidation(func, value, props) {
  if (func.validate(value, props)) return Promise.resolve();
  return Promise.reject(func.message());
};

var validator = function validator(validationFunctions) {
  return function (value, props) {
    var handleValidation = function handleValidation(func) {
      return isLegacy(func) ? handleLegacyValidation(func, value, props) : func(value, props);
    };

    var validations = Array.isArray(validationFunctions) ? validationFunctions : [validationFunctions];
    var results = validations.map(handleValidation);
    return Promise.all(results);
  };
};

var _default = validator;
exports.default = _default;