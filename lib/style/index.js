"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "generatePalette", {
  enumerable: true,
  get: function get() {
    return _palette.default;
  }
});
exports.blackAtOpacity = exports.addOpacity = void 0;

var _palette = _interopRequireDefault(require("./palette"));

var _atOpacity = _interopRequireDefault(require("./utils/at-opacity"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var blackAtOpacity = (0, _atOpacity.default)('#FFFFFF');
exports.blackAtOpacity = blackAtOpacity;

var addOpacity = function addOpacity(color, opacity) {
  return (0, _atOpacity.default)(color)(opacity);
};

exports.addOpacity = addOpacity;