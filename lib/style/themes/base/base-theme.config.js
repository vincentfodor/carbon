"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(palette) {
  var atOpacity = palette.atOpacity,
      blackWithOpacity = atOpacity('#000000');
  return {
    colors: {
      // main
      primary: palette.genericGreenTint(15),
      secondary: palette.genericGreenShade(35),
      tertiary: palette.genericGreenShade(55),
      brand: palette.brilliantGreen,
      // generic
      white: '#FFFFFF',
      // status
      error: palette.errorRed,
      warning: palette.gold,
      success: palette.brilliantGreenShade(20),
      info: palette.productBlueShade(3),
      text: {
        body: blackWithOpacity(0.9),
        disabled: blackWithOpacity(0.55),
        placeholder: blackWithOpacity(0.3)
      }
    }
  };
};

exports.default = _default;