"use strict";

require("core-js/modules/es.array.concat");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var valueInRange = function valueInRange(value, min, max) {
  return value >= min && value <= max;
};

var buildErrorString = function buildErrorString(propName, componentName, error) {
  return "".concat(propName, " in ").concat(componentName, " ").concat(error);
};

var throwError = function throwError(propName, componentName, error) {
  return new Error(buildErrorString(propName, componentName, error));
};

var isTypeOfNumberOrString = function isTypeOfNumberOrString(value) {
  return typeof value === 'string' || typeof value === 'number';
};

var PropTypesHelper = {
  inValidRange: function inValidRange(props, propName, componentName, min, max) {
    if (props[propName]) {
      var value = props[propName];

      if (isTypeOfNumberOrString(value)) {
        if (!valueInRange(value, min, max)) {
          return throwError(propName, componentName, "must be between ".concat(min, " and ").concat(max));
        }
      } else {
        return throwError(propName, componentName, 'must be a String or Integer');
      }
    }

    return null;
  }
};
var _default = PropTypesHelper;
exports.default = _default;