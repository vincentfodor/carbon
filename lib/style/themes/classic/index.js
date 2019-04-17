"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classicTheme = _interopRequireDefault(require("./classic-theme.config"));

var _base = require("../base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _base.mergeWithBase)(_classicTheme.default);

exports.default = _default;