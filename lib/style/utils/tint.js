"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mix = _interopRequireDefault(require("./mix"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(color) {
  return function (weight) {
    return (0, _mix.default)('FFFFFF', color, weight);
  };
};

exports.default = _default;