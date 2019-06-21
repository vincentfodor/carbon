"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _immutable = _interopRequireDefault(require("immutable"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A shouldComponentUpdate helper. Run this method with your instance, nextProps and nextState
 * and it will perform a deep comparison of the properties - handling immutable objects.
 *
 * @method
 * @param {Object} scope
 * @param {Object} nextProps
 * @param {Object} nextState
 * @return {Boolean}
 */
function _default(scope, nextProps, nextState) {
  return !(0, _lodash.isEqualWith)(scope.props, nextProps, customCheck) || !(0, _lodash.isEqualWith)(scope.state, nextState, customCheck);
}
/**
 * Performs a custom check of parameters from the isEqual method.
 *
 * @method customCheck
 * @param current - could be any type
 * @param next - could be any type
 * @param {String} key
 * @private
 */


function customCheck(current, next, key) {
  if (key === 'validations') {
    // validations are new objects each time - and only need to update the component
    // when the value changes so we can safely skip them.
    return true;
  } // if immutable object, do custom comparison. otherwise return undefined to
  // allow isEqual to continue as normal


  if (_immutable.default.Iterable.isIterable(current)) {
    return _immutable.default.is(current, next);
  }

  return undefined;
}