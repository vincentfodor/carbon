"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.function.name");

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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _lodash = require("lodash");

var _browser = _interopRequireDefault(require("../../helpers/browser"));

var _icon = _interopRequireDefault(require("../../../components/icon"));

var _chainFunctions = _interopRequireDefault(require("../../helpers/chain-functions"));

var _portal = _interopRequireDefault(require("../../../components/portal"));

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

var window = _browser.default.getWindow();
/**
 * InputValidation decorator.
 *
 * This decorator provides functionality and HTML for validation on inputs.
 *
 * == How to use InputValidation decorator in a component:
 *
 * In your file:
 *
 *   import InputValidation from 'carbon-react/lib/utils/decorators/input-validation';
 *
 * To use the decorator, wrap your component with it:
 *
 *   const MyComponent = InputValidation(
 *   class MyComponent extends React.Component {
 *     ...
 *   })
 *
 * In the render method for your component, you can now output the HTML:
 *
 *   render() {
 *     return (
 *       <div>
 *         <input />
 *         { this.validationHTML() }
 *       </div>
 *     );
 *   }
 *
 * @method InputValidation
 * @param {Class} ComposedComponent class to decorate
 * @return {Object} Decorated Component
 */


var InputValidation = function InputValidation(ComposedComponent) {
  var Component =
  /*#__PURE__*/
  function (_ComposedComponent) {
    _inherits(Component, _ComposedComponent);

    function Component() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Component);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Component)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "positionMessage", function () {
        if (!_this.state.valid || _this.state.warning || _this.state.info) {
          // calculate the position for the message relative to the icon
          var icon = _this.validationIcon && _this.validationIcon._target,
              message = _this.validationMessage;

          if (icon && message) {
            message.style.top = "".concat(icon.getBoundingClientRect().top - message.getBoundingClientRect().height + window.pageYOffset - icon.getBoundingClientRect().height, "px"); // figure out if the message is positioned offscreen

            var messageScreenPosition = icon.getBoundingClientRect().left + message.getBoundingClientRect().width; // change the position if it is offscreen

            var shouldFlip = _browser.default.getWindow().innerWidth < messageScreenPosition;

            if (shouldFlip) {
              _this.setState({
                flipped: true
              });

              message.style.left = "".concat(icon.getBoundingClientRect().left - message.getBoundingClientRect().width + icon.getBoundingClientRect().width / 2, "px");
            } else {
              _this.setState({
                flipped: false
              });

              message.style.left = "".concat(icon.getBoundingClientRect().left + icon.getBoundingClientRect().width / 2, "px");
            }
          }
        }
      });

      _defineProperty(_assertThisInitialized(_this), "info", function () {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.value;
        var valid = true; // if there is no info or there is an error on the input, return true

        if (!_this.props.info || !_this.state.valid) {
          return true;
        } // iterate through each validation applied to the input


        for (var i = 0; i < _this.props.info.length; i++) {
          var info = _this.props.info[i]; // run this validation

          valid = info.validate(value, _this.props, _this.updateInfo);

          _this.updateInfo(valid, value, info);

          if (!valid) {
            break;
          }
        } // return the result of the validation


        return valid;
      });

      _defineProperty(_assertThisInitialized(_this), "updateInfo", function (valid, value, info) {
        if (!valid && !_this.state.info) {
          _this.setState({
            infoMessage: info.message(value, _this.props),
            info: true
          });
        }
      });

      _defineProperty(_assertThisInitialized(_this), "warning", function () {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.value;
        var valid = true; // if there are no warnings or there is an error on the input, return truthy

        if (!_this.props.warnings || !_this.state.valid) {
          return true;
        } // iterate through each validation applied to the input


        for (var i = 0; i < _this.props.warnings.length; i++) {
          var warning = _this.props.warnings[i]; // run this validation

          valid = warning.validate(value, _this.props, _this.updateWarning);

          _this.updateWarning(valid, value, warning);

          if (!valid) {
            break;
          }
        } // return the result of the validation


        return valid;
      });

      _defineProperty(_assertThisInitialized(_this), "updateWarning", function (valid, value, warning) {
        // if validation fails
        if (!valid) {
          // if input currently thinks it is valid
          if (!_this.state.warning) {
            // if input has a form
            if (_this.isAttachedToForm) {
              // increment the error count on the form
              _this.context.form.incrementWarningCount();
            } // if input has a tab


            if (_this.context.tab) {
              // Set the validity of the tab to true
              _this.context.tab.setWarning(true);
            } // tell the input it is invalid


            _this.setState({
              warningMessage: warning.message(value, _this.props),
              warning: true
            });
          }
        }
      });

      _defineProperty(_assertThisInitialized(_this), "validate", function () {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.value;
        var valid = false; // if there are no validation, return truthy

        if (!_this._validations() || _this.props._placeholder) {
          return true;
        } // iterate through each validation applied to the input


        for (var i = 0; i < _this._validations().length; i++) {
          var validation = _this._validations()[i]; // run this validation


          valid = validation.validate(value, _this.props, _this.updateValidation);

          _this.updateValidation(valid, value, validation); // if validation fails


          if (!valid) {
            // a validation has failed, so exit the loop at this point
            break;
          }
        } // return the result of the validation


        return valid;
      });

      _defineProperty(_assertThisInitialized(_this), "updateValidation", function (valid, value, validation) {
        // if validation fails
        if (!valid) {
          // if input currently thinks it is valid
          if (_this.state.valid) {
            // if input has a form
            if (_this.isAttachedToForm) {
              // increment the error count on the form
              _this.context.form.incrementErrorCount();
            } // if input has a tab


            if (_this.context.tab) {
              // Set the validity of the tab to false
              _this.context.tab.setValidity(false);
            } // tell the input it is invalid


            _this.setState({
              errorMessage: validation.message(value, _this.props),
              valid: false
            });
          }
        }
      });

      _defineProperty(_assertThisInitialized(_this), "_handleBlur", function () {
        if (!_this.blockBlur) {
          // use setTimeout to drop in the callstack to ensure value has time to be set
          setTimeout(function () {
            _this.validate();

            _this.warning();

            _this.info();

            _this.hideMessage();

            if (_this.state.messageLocked) {
              _this.setState({
                messageLocked: false
              });
            }
          }, 0);
        }
      });

      _defineProperty(_assertThisInitialized(_this), "_handleFocus", function () {
        if (!_this.state.valid || _this.state.warning || _this.state.info) {
          _this.positionMessage();

          if (!_this.state.messageLocked) {
            if (_this.context.form) {
              _this.context.form.setActiveInput(_assertThisInitialized(_this));
            }

            _this.setState({
              messageLocked: true
            });
          }
        }
      });

      _defineProperty(_assertThisInitialized(_this), "_handleContentChange", function () {
        // if the field is in an invalid state
        if (!_this.state.valid || _this.state.warning || _this.state.info) {
          // if there is a form, decrement the error count
          if (_this.isAttachedToForm) {
            if (!_this.state.valid) {
              _this.context.form.decrementErrorCount();
            }

            if (_this.state.warning) {
              _this.context.form.decrementWarningCount();
            }
          } // if there is tab, remove invalid state


          if (_this.context.tab) {
            _this.resetTab();
          } // reset the error state


          _this.setState({
            errorMessage: null,
            messageShown: false,
            valid: true,
            warning: false,
            info: false
          });
        }
      });

      _defineProperty(_assertThisInitialized(_this), "resetTab", function () {
        if (!_this.state.valid) {
          _this.context.tab.setValidity(true);
        }

        if (_this.state.warning) {
          _this.context.tab.setWarning(false);
        }
      });

      _defineProperty(_assertThisInitialized(_this), "messageExists", function () {
        return !_this.state.valid || _this.state.warning || _this.state.info;
      });

      _defineProperty(_assertThisInitialized(_this), "showMessage", function () {
        if (_this.messageExists()) {
          _this.setState({
            messageShown: true
          }, _this.positionMessage);

          if (_this.context.form) {
            _this.context.form.setActiveInput(_assertThisInitialized(_this));
          }
        }
      });

      _defineProperty(_assertThisInitialized(_this), "hideMessage", function () {
        if (_this.messageExists()) {
          if (_this.props.timeToDisappear) {
            clearTimeout(_this.messageHideTimeout);
            _this.messageHideTimeout = setTimeout(function () {
              _this.setState({
                messageShown: false
              });
            }, _this.props.timeToDisappear);
          } else {
            _this.setState({
              messageShown: false
            });
          }
        }
      });

      _defineProperty(_assertThisInitialized(_this), "_isCurrentlyActiveInput", function () {
        return _this.context.form && _this.context.form.getActiveInput() === _assertThisInitialized(_this);
      });

      _defineProperty(_assertThisInitialized(_this), "_validations", function () {
        var validations = (_this.props.validations || []).concat(_this.props.internalValidations || []);
        return validations.length ? validations : null;
      });

      _this._window = _browser.default.getWindow(); // use the super components state, or create an empty object

      _this.state = _this.state || {};
      /**
       * The inputs valid state.
       *
       * @property valid
       * @type {Boolean}
       * @default true
       */

      _this.state.valid = true;
      /**
       * The inputs warning state.
       * true: has warning
       * false: has no warning
       *
       * @property warning
       * @type {Boolean}
       * @default false
       */

      _this.state.warning = false;
      /**
       * The inputs info state.
       * true: has info
       * false: has no info
       *
       * @property info
       * @type {Boolean}
       * @default false
       */

      _this.state.info = false;
      /**
       * The inputs error message.
       *
       * @property errorMessage
       * @type {String}
       * @default null
       */

      _this.state.errorMessage = null;
      /**
       * The inputs warning message.
       *
       * @property warningMessage
       * @type {String}
       * @default null
       */

      _this.state.warningMessage = null;
      /**
       * The inputs info message.
       *
       * @property infoMessage
       * @type {String}
       * @default null
       */

      _this.state.infoMessage = null;
      /**
       * Determines if the message should always be visible.
       *
       * @property messageLocked
       * @type {Boolean}
       * @default false
       */

      _this.state.messageLocked = false;
      /**
       * toggles whether the message for validation is shown
       *
       * @property messageShown
       * @type {Boolean}
       */

      _this.state.messageShown = false;
      /**
       * toggles whether the message css is flipped
       *
       * @property flipped
       * @type {Boolean}
       */

      _this.state.flipped = false;
      return _this;
    }

    _createClass(Component, [{
      key: "componentWillReceiveProps",

      /**
       * A lifecycle method for when the component has re-rendered.
       *
       * @method componentWillReceiveProps
       * @return {void}
       */
      value: function componentWillReceiveProps(nextProps) {
        // call the components super method if it exists
        if (_get(_getPrototypeOf(Component.prototype), "componentWillReceiveProps", this)) {
          _get(_getPrototypeOf(Component.prototype), "componentWillReceiveProps", this).call(this, nextProps);
        } // if disabling the field, reset the validation on it


        if (nextProps.disabled && this.messageExists()) {
          this._handleContentChange();
        } // if value changes and the input is currently invalid, re-assess its validity


        if (!this._isCurrentlyActiveInput()) {
          if (this.messageExists() && nextProps.value !== this.props.value) {
            var contentChanged = false;

            if (!this.state.valid && this.validate(nextProps.value)) {
              this.setState({
                valid: true
              });
              contentChanged = true;
            }

            if (this.state.warning && !this.warning(nextProps.value)) {
              this.setState({
                warning: false
              });
              contentChanged = true;
            }

            if (this.state.info && !this.info(nextProps.value)) {
              this.setState({
                info: false
              });
              contentChanged = true;
            }

            if (contentChanged) {
              this._handleContentChange();
            }
          }
        }
      }
      /**
       * A lifecycle method for when the component is added to the page.
       *
       * @method componentWillMount
       * @return {void}
       */

    }, {
      key: "componentWillMount",
      value: function componentWillMount() {
        // call the components super method if it exists

        /* istanbul ignore else */
        if (_get(_getPrototypeOf(Component.prototype), "componentWillMount", this)) {
          _get(_getPrototypeOf(Component.prototype), "componentWillMount", this).call(this);
        }

        if (this.context.form && (this._validations() || this.props.warnings || this.props.info)) {
          // attach the input to the form so the form can track what it needs to validate on submit
          this.context.form.attachToForm(this);
        }
      }
      /**
       * A lifecycle method for when the component is removed from the page.
       *
       * @method componentWillUnmount
       * @return {void}
       */

    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        // call the components super method if it exists

        /* istanbul ignore else */
        if (_get(_getPrototypeOf(Component.prototype), "componentWillUnmount", this)) {
          _get(_getPrototypeOf(Component.prototype), "componentWillUnmount", this).call(this);
        }

        if (this._validations() || this.props.warnings || this.props.info) {
          this._handleContentChange();

          if (this.isAttachedToForm) {
            this.context.form.detachFromForm(this);
          }
        }
      }
      /**
       * Positions the message relative to the icon.
       *
       * @method positionMessage
       * @return {Void}
       */

    }, {
      key: "isAttachedToForm",

      /**
       * Determines if the input is attached to a form.
       *
       * @method isAttachedToForm
       * @return {Boolean}
       */
      get: function get() {
        return this.context.form && this.context.form.inputs[this._guid];
      }
      /**
       * Returns the HTML for the validation, only if it is invalid.
       *
       * @method validationHTML
       * @return {HTML} Validation HTML including icon & message
       */

    }, {
      key: "validationHTML",
      get: function get() {
        var _this2 = this;

        var type = '';

        if (this.state.valid && !this.state.warning && !this.state.info) {
          return null;
        }

        if (!this.state.valid) {
          type = 'error';
        } else if (this.state.warning) {
          type = 'warning';
        } else {
          type = 'info';
        }

        var iconClasses = "common-input__icon common-input__icon--".concat(type);
        var messageClasses = (0, _classnames.default)("common-input__message common-input__message--".concat(type), {
          'common-input__message--shown': this.state.messageLocked || this.state.messageShown,
          'common-input__message--flipped': this.state.flipped
        }); // position icon relative to width of label

        var iconStyle = {};

        if (this.props.labelWidth) {
          iconStyle = _defineProperty({}, "".concat(this.props.align), "".concat(100 - this.props.labelWidth, "%"));
        }

        var errorMessage = (this.state.messageLocked || this.state.messageShown) && _react.default.createElement(_portal.default, {
          key: "1",
          onReposition: this.positionMessage
        }, _react.default.createElement("div", {
          className: "common-input__message-wrapper"
        }, _react.default.createElement("div", {
          ref: function ref(validationMessage) {
            _this2.validationMessage = validationMessage;
          },
          className: messageClasses
        }, this.state.errorMessage || this.state.warningMessage || this.state.infoMessage)));

        return [_react.default.createElement(_icon.default, {
          key: "0",
          ref: function ref(validationIcon) {
            _this2.validationIcon = validationIcon;
          },
          type: type,
          className: iconClasses,
          style: iconStyle
        }), errorMessage];
      }
      /**
       * Extends the main classes with any validation classes.
       *
       * @method mainClasses
       * @return {String} Main class names
       */

    }, {
      key: "mainClasses",
      get: function get() {
        return (0, _classnames.default)(_get(_getPrototypeOf(Component.prototype), "mainClasses", this), {
          'common-input--error': !this.state.valid,
          'common-input--warning': this.state.warning,
          'common-input--info': this.state.info
        });
      }
      /**
       * Extends the input classes with any validation classes.
       *
       * @method inputClasses
       * @return {String} Input class names
       */

    }, {
      key: "inputClasses",
      get: function get() {
        return (0, _classnames.default)(_get(_getPrototypeOf(Component.prototype), "inputClasses", this), {
          'common-input__input--error': !this.state.valid,
          'common-input__input--warning': this.state.warning,
          'common-input__input--info': this.state.info
        });
      }
      /**
       * Extends the input props with onBlur and onFocus events.
       *
       * @method inputProps
       * @return {Object} Input props
       */

    }, {
      key: "inputProps",
      get: function get() {
        var inputProps = _get(_getPrototypeOf(Component.prototype), "inputProps", this) || {};
        inputProps.onFocus = (0, _chainFunctions.default)(this._handleFocus, inputProps.onFocus);
        inputProps.onBlur = (0, _chainFunctions.default)(this._handleBlur, inputProps.onBlur);
        inputProps.onKeyDown = (0, _chainFunctions.default)(this._handleContentChange, inputProps.onKeyDown);
        inputProps.onPaste = (0, _chainFunctions.default)(this._handleContentChange, inputProps.onKeyDown);
        return inputProps;
      }
    }, {
      key: "fieldProps",
      get: function get() {
        var fieldProps = _get(_getPrototypeOf(Component.prototype), "fieldProps", this) || {};
        fieldProps.onMouseOut = (0, _chainFunctions.default)(this.hideMessage, fieldProps.onMouseOut);
        fieldProps.onMouseOver = (0, _chainFunctions.default)(this.showMessage, fieldProps.onMouseOver);
        return fieldProps;
      }
      /**
       * Determines if the currently active input is this input.
       *
       * @method _isCurrentlyActiveInput
       * @return {Boolean}
       */

    }]);

    return Component;
  }(ComposedComponent);

  _defineProperty(Component, "defaultProp", {
    timeToDisappear: 0
  });

  _defineProperty(Component, "contextTypes", (0, _lodash.assign)({}, ComposedComponent.contextTypes, {
    form: _propTypes.default.object,
    tab: _propTypes.default.object,
    modal: _propTypes.default.object
  }));

  _defineProperty(Component, "propTypes", (0, _lodash.assign)({}, ComposedComponent.propTypes, {
    /**
     * Array of validations to apply to this input
     *
     * @property
     * @type {Array}
     */
    validations: _propTypes.default.array,

    /**
     * Array of warnings to apply to this input
     *
     * @property
     * @type {Array}
     */
    warnings: _propTypes.default.array,

    /**
     * Array of info to apply to this input
     *
     * @property
     * @type {Array}
     */
    info: _propTypes.default.array,

    /**
     * Number which sets timing of when the message will disappear
     * Expected time is set in miliseconds
     *
     * @property
     * @default 0
     * @type {Number}
     */
    timeToDisappear: _propTypes.default.number
  }));

  Component.displayName = ComposedComponent.displayName || ComposedComponent.name;
  return Component;
};

var _default = InputValidation;
exports.default = _default;