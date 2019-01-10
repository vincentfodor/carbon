"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./navbar.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navbar = function Navbar(_ref) {
  var onPreviousClick = _ref.onPreviousClick,
      onNextClick = _ref.onNextClick,
      className = _ref.className;
  return _react.default.createElement("div", {
    className: className
  }, _react.default.createElement("button", {
    type: "button",
    className: "DayPicker-NavButton DayPicker-NavButton--prev",
    onClick: function onClick() {
      return onPreviousClick();
    }
  }, _react.default.createElement("span", {
    className: "DayPicker-NavButton__arrow"
  }, "\u2039")), _react.default.createElement("button", {
    type: "button",
    className: "DayPicker-NavButton DayPicker-NavButton--next",
    onClick: function onClick() {
      return onNextClick();
    }
  }, _react.default.createElement("span", {
    className: "DayPicker-NavButton__arrow"
  }, "\u203A")));
};

Navbar.propTypes = {
  onPreviousClick: _propTypes.default.func,
  onNextClick: _propTypes.default.func,
  className: _propTypes.default.string
};
var _default = Navbar;
exports.default = _default;