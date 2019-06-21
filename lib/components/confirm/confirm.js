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

var _react = _interopRequireDefault(require("react"));

var _i18nJs = _interopRequireDefault(require("i18n-js"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = require("lodash");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dialog = _interopRequireDefault(require("../dialog"));

var _button = _interopRequireDefault(require("../button"));

var _css = _interopRequireDefault(require("../../utils/css"));

require("./confirm.scss");

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
 * A Confirm widget.
 *
 * == How to use a Confirm in a component:
 *
 * In your file
 *
 *   import Confirm from 'carbon-react/lib/components/confirm';
 *
 * To render a Confirm:
 *
 *   <Confirm
 *      title='Are you sure?"
 *      onConfirm={ customConfirmHandler }
 *      onCancel={ customCancelHandler }
 *      open={ false }
 *    This is the content message
 *   </Confirm>
 *
 * The component rendering the Confirm must pass down a prop of 'open={ true }' to open the confirm dialog.
 *
 * You need to provide a custom cancel event handler to handle a close event via the 'no' button
 *
 * You need to provide a custom confirm event handler to handle a close event via the 'yes' button
 *
 * @class Confirm
 * @constructor
 */
var Confirm =
/*#__PURE__*/
function (_Dialog) {
  _inherits(Confirm, _Dialog);

  function Confirm() {
    _classCallCheck(this, Confirm);

    return _possibleConstructorReturn(this, _getPrototypeOf(Confirm).apply(this, arguments));
  }

  _createClass(Confirm, [{
    key: "additionalContent",

    /**
     * Get the yes and no buttons for the confirm dialog
     *
     * @method confirmButtons
     * @return {Object} JSX yes and no buttons
     */
    value: function additionalContent() {
      var classes = "carbon-confirm__buttons ".concat(_css.default.clearfix);
      return _react.default.createElement("div", {
        key: "confirm-buttons",
        className: classes
      }, _react.default.createElement("div", {
        className: "carbon-confirm__button carbon-confirm__no"
      }, _react.default.createElement(_button.default, {
        as: "secondary",
        onClick: this.props.onCancel,
        "data-element": "cancel"
      }, this.props.cancelLabel || _i18nJs.default.t('confirm.no', {
        defaultValue: 'No'
      }))), _react.default.createElement("div", {
        className: "carbon-confirm__button carbon-confirm__yes"
      }, _react.default.createElement(_button.default, {
        as: "primary",
        onClick: this.props.onConfirm,
        "data-element": "confirm"
      }, this.props.confirmLabel || _i18nJs.default.t('confirm.yes', {
        defaultValue: 'Yes'
      }))));
    }
  }, {
    key: "componentTags",
    value: function componentTags(props) {
      return {
        'data-component': 'confirm',
        'data-element': props['data-element'],
        'data-role': props['data-role']
      };
    }
  }, {
    key: "mainClasses",

    /**
     * Returns main classes for the component combined with
     * dialog main classes.
     *
     * @method mainClasses
     * @return {String} Main className
     */
    get: function get() {
      return (0, _classnames.default)(_get(_getPrototypeOf(Confirm.prototype), "mainClasses", this), 'carbon-confirm');
    }
    /**
     * Returns classes for the confirm, combines with dialog class names.
     *
     * @method dialogClasses
     */

  }, {
    key: "dialogClasses",
    get: function get() {
      return (0, _classnames.default)(_get(_getPrototypeOf(Confirm.prototype), "dialogClasses", this), 'carbon-confirm__confirm');
    }
  }]);

  return Confirm;
}(_dialog.default);

_defineProperty(Confirm, "propTypes", (0, _lodash.assign)({}, _dialog.default.propTypes, {
  /**
   * A custom event handler when a confirmation takes place
   *
   * @property onConfirm
   * @type {Function}
   */
  onConfirm: _propTypes.default.func.isRequired,

  /**
   * Customise the confirm button label
   *
   * @property onConfirm
   * @type {String}
   */
  confirmLabel: _propTypes.default.string,

  /**
   * Customise the cancel button label
   *
   * @property onConfirm
   * @type {String}
   */
  cancelLabel: _propTypes.default.string
}));

_defineProperty(Confirm, "defaultProps", (0, _lodash.assign)({}, _dialog.default.defaultProps, {
  size: 'extra-small',
  showCloseIcon: false
}));

var _default = Confirm;
exports.default = _default;