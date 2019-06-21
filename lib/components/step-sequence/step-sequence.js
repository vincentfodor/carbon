"use strict";

require("core-js/modules/es.array.concat");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "StepSequenceItem", {
  enumerable: true,
  get: function get() {
    return _stepSequenceItem.default;
  }
});
exports.StepSequence = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _stepSequenceItem = _interopRequireDefault(require("./step-sequence-item"));

require("./step-sequence.scss");

require("./step-sequence-orientation.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseClass = 'carbon-step-sequence';

var classes = function classes(orientation) {
  return "".concat(baseClass, " ").concat(baseClass, "--").concat(orientation);
};

var StepSequence = function StepSequence(_ref) {
  var children = _ref.children,
      orientation = _ref.orientation;
  return _react.default.createElement("ol", {
    className: classes(orientation)
  }, children);
};

exports.StepSequence = StepSequence;
StepSequence.propTypes = {
  children: _propTypes.default.node,
  orientation: _propTypes.default.oneOf(['horizontal', 'vertical'])
};
StepSequence.defaultProps = {
  orientation: 'horizontal'
};