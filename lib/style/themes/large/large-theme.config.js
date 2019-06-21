"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(palette) {
  return {
    colors: {
      base: palette.amethyst,
      primary: palette.amethystTint(10),
      secondary: palette.amethystShade(10),
      tertiary: palette.amethystShade(30)
    }
  };
};

exports.default = _default;