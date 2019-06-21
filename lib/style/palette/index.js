"use strict";

require("core-js/modules/es.object.keys");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tint = _interopRequireDefault(require("../utils/tint"));

var _shade = _interopRequireDefault(require("../utils/shade"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cachedFunc = function cachedFunc(cb) {
  return function () {
    var cache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return function (weight) {
      if (cache[weight]) {
        return cache[weight];
      }

      var color = cb(weight);
      cache[weight] = color;
      return color;
    };
  };
};
/**
 * Takes a config object of base colors and, for each base, generates functions
 * to lighten and darken it.
 *
 * Given a config:
 *
 * const palette = generatePalette({ brilliantGreen: '00DC00' });
 *
 * The developer will be able to call:
 *
 * palette.brilliantGreenTint(n);
 * palette.brilliantGreenShade(n);
 *
 * where `n` is the degree of white (in case of `tint`) or
 * black (in case of `shade`) they wish to mix into the base color.
 */


var generatePalette = function generatePalette(config) {
  var baseNames = Object.keys(config);
  var funcs = baseNames.reduce(function (acc, baseName) {
    var tintBy = (0, _tint.default)(config[baseName]),
        shadeBy = (0, _shade.default)(config[baseName]);
    acc["".concat(baseName, "Tint")] = cachedFunc(tintBy)();
    acc["".concat(baseName, "Shade")] = cachedFunc(shadeBy)();
    return acc;
  }, {});
  return funcs;
};

var _default = generatePalette;
exports.default = _default;