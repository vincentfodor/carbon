"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _browser = _interopRequireDefault(require("../browser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Text utility methods
 *
 */
var Text = {
  /**
   * Clears any selected text from the current page
   */
  clearSelection: function clearSelection() {
    var document = _browser.default.getDocument();

    var window = _browser.default.getWindow();

    if (document.body.createTextRange) {
      // IE
      var range = document.body.createTextRange();
      range.collapse();
      range.select();
    } else {
      // Chrome, Firefox, Safari, Edge
      window.getSelection().removeAllRanges();
    }
  }
};
var _default = Text;
exports.default = _default;