"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validations = _interopRequireDefault(require("../../helpers/validations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A Regex Validator
 *
 * == How to use this validator ==
 *
 * Import the validator into your component
 *
 * import RegexValidator from 'utils/validations/regex'
 *
 * Assign this validator to the validations prop
 *
 * <Textbox validations={ [new RegexValidator({ format: (/[A-Z]{5}/) }) ] }/>
 *
 * @constructor RegexValidator
 */
var RegexValidator =
/**
 * @method constructor
 * @param {Object} params
 */
function RegexValidator() {
  var _this = this;

  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _classCallCheck(this, RegexValidator);

  _defineProperty(this, "validate", function (value) {
    return !value || _this.format.test(value);
  });

  _defineProperty(this, "message", function () {
    return _validations.default.validationMessage(_this.customMessage, 'errors.messages.wrong_format');
  });

  /**
   * An optional custom validation message.
   *
   * @property customMessage
   * @type {String}
   */
  this.customMessage = params.customMessage;
  /**
   * The format to run the regex with.
   *
   * @method format
   * @return {Regex}
   */

  this.format = params.format;
}
/**
 * This will validate the given value, and return a valid status.
 *
 * @method validate
 * @param {Float} value to check
 * @return {Boolean} true if value is valid
 */
;

var _default = RegexValidator;
exports.default = _default;