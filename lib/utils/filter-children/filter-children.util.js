"use strict";

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.map");

require("core-js/modules/es.string.includes");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderChild = function renderChild(child, callback) {
  if (callback) return callback(child);
  return child;
};

var defaultFilter = function defaultFilter(text, value) {
  return text.includes(value);
};
/**
 * Create a filter for React children:
 *
 *   filterChildren({ value: 'my filter' })(children);
 *
 * You can also pass in:
 *   * custom filters
 *   * 'no results' callback
 *   * a callback for each child
 *
 * For example:
 *
 *   const filter = filterChildren({
 *     value: 'my filter',
 *     filter: (text, value) => value !== text,
 *     onNoResults: () => 'no results!'
 *   });
 *
 *   filter(children, (child) => <div>{ child }</div>);
 */


var filterChildren = function filterChildren() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      value = _ref.value,
      _ref$filter = _ref.filter,
      filter = _ref$filter === void 0 ? defaultFilter : _ref$filter,
      onNoResults = _ref.onNoResults;

  return function (children, callback) {
    var filteredChildren = _react.default.Children.map(children, function (child) {
      if (!child.props.text || !value) return renderChild(child, callback);
      var processedText = child.props.text.toLowerCase();
      var processedValue = value.toLowerCase();
      if (filter(processedText, processedValue)) return renderChild(child, callback);
      return null;
    });

    if (_react.default.Children.count(filteredChildren)) return filteredChildren;
    if (onNoResults) return onNoResults();
    return null;
  };
};

var _default = filterChildren;
exports.default = _default;