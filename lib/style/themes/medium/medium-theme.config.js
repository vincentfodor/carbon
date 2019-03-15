"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(palette) {
  return {
    colors: {
      base: palette.productBlue,
      primary: palette.productBlueShade(3),
      secondary: palette.productBlueShade(23),
      tertiary: palette.productBlueShade(43)
    }
  };
};

exports.default = _default;