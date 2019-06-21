"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.get");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = require("lodash");

var _dialog = _interopRequireDefault(require("../dialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A Alert widget.
 *
 * == How to use a Alert in a component:
 *
 * In your file
 *
 *   import Alert from 'carbon-react/lib/components/alert';
 *
 * To render a Alert:
 *
 *   <Alert onCancel={ customEventHandler } open={ false }/>
 *
 * The component rendering the Alert must pass down a prop of 'open' in order to open the alert.
 *
 * You need to provide a custom cancel event handler to handle a close event.
 *
 * @class Alert
 * @constructor
 */
var Alert =
/*#__PURE__*/
function (_Dialog) {
  _inherits(Alert, _Dialog);

  function Alert(props) {
    var _this;

    _classCallCheck(this, Alert);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Alert).call(this, props)); // focusDialog is called via setTimeout in onDialogBlur,
    // so it needs binding to this
    // From the React docs: "Generally, if you refer to a method without () after
    // it, such as onClick={this.handleClick}, you should bind that method."

    _this.focusDialog = _this.focusDialog.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Returns classes for the alert, combines with dialog class names..
   *
   * @method dialogClasses
   */


  _createClass(Alert, [{
    key: "componentTags",
    value: function componentTags(props) {
      return {
        'data-component': 'alert',
        'data-element': props['data-element'],
        'data-role': props['data-role']
      };
    }
    /**
     * Handles keyboard focus leaving the dialog
     * element.
     *
     * Assumes that, if no close icon is displayed,
     * no other element can receive keyboard focus.
     * Therefore focus should remain on the dialog
     * element while it is open.
     *
     * @override
     * @return {Void}
     */

  }, {
    key: "onDialogBlur",
    value: function onDialogBlur(ev) {
      if (!this.props.showCloseIcon) {
        ev.preventDefault(); // Firefox loses focus unless we wrap the call to
        // this.focusDialog in setTimeout

        setTimeout(this.focusDialog);
      }
    }
  }, {
    key: "dialogClasses",
    get: function get() {
      return (0, _classnames.default)(_get(_getPrototypeOf(Alert.prototype), "dialogClasses", this), 'carbon-alert__alert');
    }
  }]);

  return Alert;
}(_dialog.default);

_defineProperty(Alert, "defaultProps", (0, _lodash.assign)({}, _dialog.default.defaultProps, {
  role: 'alertdialog',
  size: 'extra-small'
}));

var _default = Alert;
exports.default = _default;