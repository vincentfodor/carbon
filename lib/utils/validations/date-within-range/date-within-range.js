"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validations = _interopRequireDefault(require("../../helpers/validations"));

var _date = _interopRequireDefault(require("../../helpers/date"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Validates that a date is within a given range
var DateWithinRangeValidator =
/**
  * @method constructor
  * @param {Number} limit - the number of units
  * @param {Object} opts
  *   @option [String] customMessage
  *   @option [String] units - unit of time e.g. 'days'/'months'
  */
function DateWithinRangeValidator(limit) {
  var _this = this;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _classCallCheck(this, DateWithinRangeValidator);

  _defineProperty(this, "validate", function (value) {
    // If not a valid date, return true to avoid multiple errors being shown.
    if (!_date.default.isValidDate(value)) return true;
    return _date.default.withinRange(value, _this.limit, _this.units);
  });

  _defineProperty(this, "message", function () {
    return _validations.default.validationMessage(_this.customMessage, 'errors.messages.out_of_range');
  });

  this.customMessage = opts.customMessage;
  this.limit = limit;
  this.units = opts.units || 'days';
}
/**
 * This will validate the given value, and return a valid status.
 *
 * @method validate
 * @param {Object} value to check
 * @return {Boolean} true if value is within range
 */
;

var _default = DateWithinRangeValidator;
exports.default = _default;