"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _browser = _interopRequireDefault(require("../browser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A shouldComponentUpdate helper. Run this method with your instance, nextProps and nextState
 * and it will perform a deep comparison of the properties - handling immutable objects.
 *
 * @method
 * @param {Object} element
 * @return {Object}
 */
var ScrollablePartent = {
  searchForScrollableParent: function searchForScrollableParent(element) {
    if (!element) {
      return null;
    }

    var style = _browser.default.getWindow().getComputedStyle(element);

    var isElementScrollable = style && style.position !== 'absolute' && /(auto|scroll)/.test(style.overflow + style.overflowY + style.overflowX);

    if (isElementScrollable) {
      return element;
    }

    return this.searchForScrollableParent(element.parentElement);
  }
};
var _default = ScrollablePartent;
exports.default = _default;