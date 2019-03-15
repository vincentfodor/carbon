"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(palette) {
  return {
    colors: {
      base: palette.productGreen,
      primary: palette.productGreenShade(21),
      secondary: palette.productGreenShade(41),
      tertiary: palette.productGreenShade(61)
    }
  };
};

exports.default = _default;