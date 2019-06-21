"use strict";

require("core-js/modules/es.object.assign");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _i18nJs = _interopRequireDefault(require("i18n-js"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tags = _interopRequireDefault(require("../../../utils/helpers/tags"));

var _icon = _interopRequireDefault(require("../../icon"));

require("./form-summary.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Adds an 's' to pluralise (keys will always be error or warning)
 *
 * @param {string} key
 * @return {string} pluralized key
 */
var pluralize = function pluralize(key) {
  return "".concat(key, "s");
};
/**
 * decides whether the warning message should be appended to the sentence or output as a sentence on it's own
 *
 * @param {object} props
 * @param {string} key
 * @return {boolean} true if the warning message needs to be appended
 */


var warningAppend = function warningAppend(props, key) {
  return props.errors > 0 && props.warnings > 0 && key === 'warning';
};
/**
 * finds the correct translation key
 *
 * @param {object} props
 * @param {string} key
 * @return {string} correct key
 */


var translationKey = function translationKey(props, key) {
  return warningAppend(props, key) ? 'errors_and_warnings' : pluralize(key);
};
/**
 * Returns the default translation set
 *
 * @param {number} errorCount
 * @param {number} warningCount
 * @return {object} default translations
 */


var defaultTranslations = function defaultTranslations(errorCount, warningCount) {
  return {
    errors: {
      defaultValue: {
        one: 'There is %{count} error',
        other: 'There are %{count} errors'
      },
      count: parseInt(errorCount, 10)
    },
    warnings: {
      defaultValue: {
        one: 'There is %{count} warning',
        other: 'There are %{count} warnings'
      },
      count: parseInt(warningCount, 10)
    },
    errors_and_warnings: {
      defaultValue: {
        one: 'and %{count} warning',
        other: 'and %{count} warnings'
      },
      count: parseInt(warningCount, 10)
    }
  };
};
/**
 * gets the correct translation
 *
 * @param {object} props
 * @param {string} key
 * @return {string} correct translation
 */


var translation = function translation(props, key) {
  var parsedKey = translationKey(props, key);
  var defaultTranslation = defaultTranslations(props.errors, props.warnings)[parsedKey],
      location = "errors.messages.form_summary.".concat(parsedKey);
  return _i18nJs.default.t(location, defaultTranslation);
};
/**
 * builds a summary in JSX
 *
 * @param {object} props
 * @param {string} key
 * @return {JSX}
 */


var summary = function summary(props, key) {
  if (props[pluralize(key)] > 0) {
    return _react.default.createElement("span", {
      className: "carbon-form-summary__summary carbon-form-summary__".concat(key, "-summary")
    }, _react.default.createElement(_icon.default, {
      className: "carbon-form-summary__icon",
      type: key
    }), _react.default.createElement("span", {
      className: "carbon-form-summary__text",
      "data-element": pluralize(key),
      dangerouslySetInnerHTML: {
        __html: translation(props, key)
      } // eslint-disable-line react/no-danger

    }));
  }

  return null;
};

var summaryClasses = function summaryClasses(props) {
  return (0, _classnames.default)('carbon-form-summary', {
    'carbon-form-summary--invalid': props.errors || props.warnings
  });
};

var FormSummary = function FormSummary(props) {
  return _react.default.createElement("div", _extends({
    className: summaryClasses(props)
  }, (0, _tags.default)('form-summary', props)), summary(props, 'error'), summary(props, 'warning'), props.children);
};

FormSummary.propTypes = {
  children: _propTypes.default.node,
  errors: _propTypes.default.oneOfType([// eslint-disable-line react/no-unused-prop-types
  _propTypes.default.string, _propTypes.default.number]),
  warnings: _propTypes.default.oneOfType([// eslint-disable-line react/no-unused-prop-types
  _propTypes.default.string, _propTypes.default.number])
};
var _default = FormSummary;
exports.default = _default;