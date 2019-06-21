"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Input", {
  enumerable: true,
  get: function get() {
    return _input.default;
  }
});
Object.defineProperty(exports, "InputPresentation", {
  enumerable: true,
  get: function get() {
    return _inputPresentation.InputPresentation;
  }
});
Object.defineProperty(exports, "InputPresentationContext", {
  enumerable: true,
  get: function get() {
    return _inputPresentation.InputPresentationContext;
  }
});
exports.default = void 0;

var _input = _interopRequireDefault(require("./input.component"));

var _inputPresentation = require("./input-presentation.component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _input.default;
exports.default = _default;