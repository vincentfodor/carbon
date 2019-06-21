"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _i18nJs = _interopRequireDefault(require("i18n-js"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tags = _interopRequireDefault(require("../../../utils/helpers/tags"));

var _button = _interopRequireDefault(require("../../button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var saveButtonProps = function saveButtonProps(props) {
  return _objectSpread({
    as: 'primary',
    disabled: props.saving,
    className: 'carbon-form-save__button'
  }, props.saveButtonProps);
};

var saveText = function saveText(props) {
  return props.saveText || _i18nJs.default.t('actions.save', {
    defaultValue: 'Save'
  });
};

var SaveButton = function SaveButton(props) {
  return _react.default.createElement("div", _extends({
    className: "carbon-form-save"
  }, (0, _tags.default)('save', props)), _react.default.createElement(_button.default, _extends({}, saveButtonProps(props), {
    "data-element": "save"
  }), saveText(props)));
};

SaveButton.propTypes = {
  errors: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  warnings: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
};
var _default = SaveButton;
exports.default = _default;