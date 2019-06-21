"use strict";

require("core-js/modules/es.object.assign");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tags = _interopRequireDefault(require("../../../utils/helpers/tags"));

var _fullScreenHeading = _interopRequireDefault(require("../../dialog-full-screen/full-screen-heading"));

var _appWrapper = _interopRequireDefault(require("../../app-wrapper"));

require("./page.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var pageClasses = function pageClasses(props) {
  return (0, _classnames.default)('carbon-page', props.className);
};

var Page = function Page(props) {
  return _react.default.createElement("article", _extends({
    className: pageClasses(props)
  }, (0, _tags.default)('page', props)), _react.default.createElement(_fullScreenHeading.default, null, props.title), _react.default.createElement("div", {
    className: "carbon-page__content"
  }, _react.default.createElement(_appWrapper.default, null, props.children)));
};

Page.propTypes = {
  className: _propTypes.default.string,
  // eslint-disable-line react/no-unused-prop-types
  title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
var _default = Page;
exports.default = _default;