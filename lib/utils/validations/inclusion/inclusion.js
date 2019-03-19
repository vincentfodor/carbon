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
 * An Inclusion Validator object.
 *
 * == How to use this validator ==
 *
 * Import the validator into your component:
 *
 *  `import InclusionValidator from 'carbon-react/lib/utils/validations/inclusion'`
 *
 * Validate the value is included in the list, pass an array in the param allowedValues:
 *
 *  e.g.
 *
 *  `<TextArea validations={ [new InclusionValidator({ allowedValues: ['foo', 'bar'] })] }/>`
 *
 * would validate that the value of the text field is either 'foo' or 'bar'.
 *
 *
 * @constructor InclusionValidator
 */
var InclusionValidator =
/**
 * @method constructor
 * @param {Object} params
 */
function InclusionValidator() {
  var _this = this;

  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _classCallCheck(this, InclusionValidator);

  _defineProperty(this, "validate", function (value) {
    return _this.allowedValues.indexOf(value) !== -1;
  });

  _defineProperty(this, "message", function () {
    return _validations.default.validationMessage(_this.customMessage, 'errors.messages.inclusion');
  });

  this.allowedValues = params.allowedValues || [];
  /**
   * An optional custom validation message.
   *
   * @property customMessage
   * @type {String}
   */

  this.customMessage = params.customMessage;
}
/**
 * This will validate the given value, and return a valid status.
 *
 * @method validate
 * @param {String} value to check presence
 * @return {Boolean} true if value is valid
 */
;

var _default = InclusionValidator;
exports.default = _default;