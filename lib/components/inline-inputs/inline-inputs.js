"use strict";

require("core-js/modules/es.array.map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = require("lodash");

var _row = require("../row");

require("./inline-inputs.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/prop-types */
var Label = function Label(props) {
  if (!props.label) {
    return null;
  }

  return _react.default.createElement("label", {
    htmlFor: props.htmlFor,
    className: "carbon-inline-inputs__label"
  }, props.label);
};

var columnWrapper = function columnWrapper(children) {
  var inputs = children;

  if (!Array.isArray(inputs)) {
    inputs = [children];
  }

  return inputs.map(function (input, index) {
    // Input is never going to be re-ordered so we don't require a defined key

    /* eslint-disable react/no-array-index-key */
    return _react.default.createElement(_row.Column, {
      key: index
    }, input);
  });
};

var InlineInputs = function InlineInputs(props) {
  return _react.default.createElement("div", {
    className: (0, _classnames.default)('carbon-inline-inputs', props.className)
  }, Label(props), _react.default.createElement(_row.Row, {
    gutter: "none",
    className: "carbon-inline-inputs__inputs"
  }, columnWrapper(props.children)));
};

Label.propTypes = {
  /**
   * Defines the label text for the heading.
   *
   * @property label
   * @type {String}
   */
  label: _propTypes.default.string,

  /**
   * The id of the corresponding input control for the label
   *
   * @property label
   * @type {String}
   */
  htmlFor: _propTypes.default.string
};
Label.defaultProps = {
  label: '',
  htmlFor: null
}; // Assign props over for demo site

InlineInputs.propTypes = (0, _lodash.assign)({}, {
  /**
   * Children elements
   *
   * @property children
   * @type {Node}
   */
  children: _propTypes.default.node,

  /**
   * A custom class name for the component.
   *
   * @property className
   * @type {String}
   */
  className: _propTypes.default.string
}, Label.propTypes);
InlineInputs.defaultProps = {
  children: null,
  className: ''
};
/* eslint-enable react/prop-types */

var _default = InlineInputs;
exports.default = _default;