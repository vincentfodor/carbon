"use strict";

require("core-js/modules/es.object.assign");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Page", {
  enumerable: true,
  get: function get() {
    return _page.default;
  }
});
exports.Pages = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

var _carousel = require("../carousel");

var _page = _interopRequireDefault(require("./page"));

require("./pages.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var pagesClasses = function pagesClasses(props) {
  return (0, _classnames.default)('carbon-pages', props.className);
};

var Pages = function Pages(props) {
  return _react.default.createElement(_carousel.Carousel, _extends({
    className: pagesClasses(props),
    enableSlideSelector: false,
    enablePreviousButton: false,
    enableNextButton: false
  }, (0, _tags.default)('pages', props), props), props.children);
};

exports.Pages = Pages;
Pages.propTypes = {
  className: _propTypes.default.string,
  // eslint-disable-line react/no-unused-prop-types
  children: _propTypes.default.node
};