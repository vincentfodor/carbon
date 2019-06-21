"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.match");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _i18nJs = _interopRequireDefault(require("i18n-js"));

var _formSerialize = _interopRequireDefault(require("form-serialize"));

var _lodash = require("lodash");

var _cancelButton = _interopRequireDefault(require("./cancel-button"));

var _formSummary = _interopRequireDefault(require("./form-summary"));

var _saveButton = _interopRequireDefault(require("./save-button"));

var _appWrapper = _interopRequireDefault(require("../app-wrapper"));

var _ether = require("../../utils/ether");

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

var _browser = _interopRequireDefault(require("../../utils/helpers/browser"));

var _elementResize = _interopRequireDefault(require("../../utils/helpers/element-resize"));

require("./form.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A Form widget.
 *
 * == How to use a Form in a component:
 *
 * In your file
 *
 *   import Form from 'carbon-react/lib/components/form';
 *
 * To render a Form:
 *
 *   <Form>
 *     <Textbox />
 *     <Textbox />
 *     <Date />
 *   </Form>
 *
 * Form provides the ability to hook into the form handle submission method.
 * By passing afterFormValidation or beforeFormValidation you can add custom
 * validation logic and prevent the form submission using ev.preventDefault()
 *
 * @class Form
 * @constructor
 */
var Form =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Form)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      /**
       * Tracks the number of errors in the form
       *
       * @property errorCount
       * @type {Number}
       */
      errorCount: 0,

      /**
       * Tracks the number of warnings in the form
       *
       * @property warningCount
       * @type {Number}
       */
      warningCount: 0,

      /**
       * Tracks if the form is clean or dirty, used by unsavedWarning
       *
       * @property isDirty
       * @type {Boolean}
       */
      isDirty: false,

      /**
       * Tracks if the saveButton should be disabled
       *
       * @property saveDisabled
       * @type {Boolean}
       */
      submitted: false
      /**
       * Returns form object to child components.
       *
       * @method getChildContext
       * @return {void}
       */

    });

    _defineProperty(_assertThisInitialized(_this), "getChildContext", function () {
      return {
        form: {
          attachToForm: _this.attachToForm,
          detachFromForm: _this.detachFromForm,
          getActiveInput: _this.getActiveInput,
          incrementErrorCount: _this.incrementErrorCount,
          decrementErrorCount: _this.decrementErrorCount,
          incrementWarningCount: _this.incrementWarningCount,
          decrementWarningCount: _this.decrementWarningCount,
          setIsDirty: _this.setIsDirty,
          resetIsDirty: _this.resetIsDirty,
          inputs: _this.inputs,
          setActiveInput: _this.setActiveInput,
          validate: _this.validate
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getActiveInput", function () {
      return _this.activeInput;
    });

    _defineProperty(_assertThisInitialized(_this), "setActiveInput", function (input) {
      _this.activeInput = input;
    });

    _defineProperty(_assertThisInitialized(_this), "setIsDirty", function () {
      if (!_this.state.isDirty) {
        _this.setState({
          isDirty: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "resetIsDirty", function () {
      if (_this.state.isDirty) {
        _this.setState({
          isDirty: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "addStickyFooterListeners", function () {
      _this.checkStickyFooter();

      _elementResize.default.addListener(_this._form, _this.checkStickyFooter);

      _this._window.addEventListener('resize', _this.checkStickyFooter);

      _this._window.addEventListener('scroll', _this.checkStickyFooter);
    });

    _defineProperty(_assertThisInitialized(_this), "removeStickyFooterListeners", function () {
      _elementResize.default.removeListener(_this._form, _this.checkStickyFooter);

      _this._window.removeEventListener('resize', _this.checkStickyFooter);

      _this._window.removeEventListener('scroll', _this.checkStickyFooter);
    });

    _defineProperty(_assertThisInitialized(_this), "checkStickyFooter", function () {
      if (!_this._form) {
        return;
      }

      var offsetTop = 0,
          element = _this._form;

      while (element) {
        offsetTop += element.offsetTop;
        element = element.offsetParent;
      }

      var formHeight = offsetTop + _this._form.offsetHeight - _this._window.pageYOffset;

      if (!_this.state.stickyFooter && formHeight > _this._window.innerHeight) {
        _this.setState({
          stickyFooter: true
        });
      } else if (_this.state.stickyFooter && formHeight < _this._window.innerHeight) {
        _this.setState({
          stickyFooter: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "addUnsavedWarningListener", function () {
      _this._window.addEventListener('beforeunload', _this.checkIsFormDirty);
    });

    _defineProperty(_assertThisInitialized(_this), "removeUnsavedWarningListener", function () {
      _this._window.removeEventListener('beforeunload', _this.checkIsFormDirty);
    });

    _defineProperty(_assertThisInitialized(_this), "checkIsFormDirty", function (ev) {
      if (_this.state.isDirty) {
        // Confirmation message is usually overridden by browsers with a similar message
        var confirmationMessage = _i18nJs.default.t('form.save_prompt', {
          defaultValue: 'Do you want to leave this page? Changes that you made may not be saved.'
        });

        ev.returnValue = confirmationMessage; // Gecko + IE

        return confirmationMessage; // Gecko + Webkit, Safari, Chrome etc.
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_document", _browser.default.getDocument());

    _defineProperty(_assertThisInitialized(_this), "_window", _browser.default.getWindow());

    _defineProperty(_assertThisInitialized(_this), "inputs", {});

    _defineProperty(_assertThisInitialized(_this), "errorCount", 0);

    _defineProperty(_assertThisInitialized(_this), "warningCount", 0);

    _defineProperty(_assertThisInitialized(_this), "incrementErrorCount", function () {
      _this.errorCount += 1;

      _this.setState({
        errorCount: _this.errorCount
      });
    });

    _defineProperty(_assertThisInitialized(_this), "decrementErrorCount", function () {
      _this.errorCount -= 1;

      _this.setState({
        errorCount: _this.errorCount
      });
    });

    _defineProperty(_assertThisInitialized(_this), "incrementWarningCount", function () {
      _this.warningCount += 1;

      _this.setState({
        warningCount: _this.warningCount
      });
    });

    _defineProperty(_assertThisInitialized(_this), "decrementWarningCount", function () {
      _this.warningCount -= 1;

      _this.setState({
        warningCount: _this.warningCount
      });
    });

    _defineProperty(_assertThisInitialized(_this), "attachToForm", function (component) {
      _this.inputs[component._guid] = component;
    });

    _defineProperty(_assertThisInitialized(_this), "detachFromForm", function (component) {
      delete _this.inputs[component._guid];
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnSubmit", function (ev) {
      if (_this.props.autoDisable) {
        _this.setState({
          submitted: true
        });
      }

      if (_this.props.beforeFormValidation) {
        _this.props.beforeFormValidation(ev);
      }

      var valid = _this.validate();

      if (valid) {
        _this.resetIsDirty();
      } else {
        _this.setState({
          submitted: false
        });

        ev.preventDefault();
      }

      if (_this.props.afterFormValidation) {
        _this.props.afterFormValidation(ev, valid, _this.enableForm);
      }

      if (valid && _this.props.onSubmit) {
        _this.props.onSubmit(ev, valid, _this.enableForm);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "enableForm", function () {
      _this.setState({
        submitted: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "validate", function () {
      var valid = true,
          errors = 0;

      for (var key in _this.inputs) {
        var input = _this.inputs[key];

        if (!input.props.disabled && !input.validate()) {
          valid = false;
          errors += 1;
        }
      }

      if (!valid) {
        _this.setState({
          errorCount: errors
        });
      }

      return valid;
    });

    _defineProperty(_assertThisInitialized(_this), "serialize", function (opts) {
      return (0, _formSerialize.default)(_this._form, opts);
    });

    _defineProperty(_assertThisInitialized(_this), "htmlProps", function () {
      var _validProps = (0, _ether.validProps)(_assertThisInitialized(_this)),
          props = Object.assign({}, _validProps);

      delete props.onSubmit;
      props.className = _this.mainClasses;
      return props;
    });

    _defineProperty(_assertThisInitialized(_this), "cancelForm", function () {
      if (_this.props.onCancel) {
        _this.props.onCancel();
      } else if (_this.context.modal) {
        _this.context.modal.onCancel();
      } else {
        // history comes from react router
        if (!_this._window.history) {
          throw new Error('History is not defined. This is normally configured by the react router');
        }

        _this._window.history.back();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "cancelButton", function () {
      if (!_this.props.cancel) {
        return null;
      }

      var cancelProps = _objectSpread({
        cancelText: _this.props.cancelText,
        cancelClick: _this.cancelForm
      }, _this.props.cancelButtonProps);

      return _react.default.createElement(_cancelButton.default, _extends({
        "data-element": "cancel"
      }, cancelProps));
    });

    _defineProperty(_assertThisInitialized(_this), "additionalActions", function (type) {
      if (!_this.props[type]) {
        return null;
      }

      return _react.default.createElement("div", {
        className: "carbon-form__".concat((0, _lodash.kebabCase)(type))
      }, _this.props[type]);
    });

    _defineProperty(_assertThisInitialized(_this), "defaultSaveButton", function () {
      return _react.default.createElement(_saveButton.default, {
        saveButtonProps: _this.props.saveButtonProps,
        saveText: _this.props.saveText,
        saving: _this.props.saving || _this.state.submitted
      });
    });

    _defineProperty(_assertThisInitialized(_this), "saveButton", function () {
      if (!_this.props.save) {
        return null;
      }

      return _this.props.customSaveButton ? _this.props.customSaveButton : _this.defaultSaveButton();
    });

    _defineProperty(_assertThisInitialized(_this), "saveButtonWithSummary", function () {
      return _react.default.createElement(_formSummary.default, {
        className: "carbon-form__summary",
        errors: _this.state.errorCount,
        warnings: _this.state.warningCount
      }, _this.saveButton());
    });

    _defineProperty(_assertThisInitialized(_this), "formFooter", function () {
      var save = _this.props.showSummary ? _this.saveButtonWithSummary() : _this.saveButton();
      var padding = _this.props.stickyFooterPadding;

      if (padding && !padding.match(/px$/)) {
        padding = "".concat(padding, "px");
      }

      return _react.default.createElement("div", {
        className: "carbon-form__footer-wrapper"
      }, _react.default.createElement(_appWrapper.default, {
        className: _this.footerClasses,
        style: {
          borderWidth: padding
        }
      }, _this.additionalActions('leftAlignedActions'), _this.additionalActions('rightAlignedActions'), save, _this.cancelButton(), _this.additionalActions('additionalActions')));
    });

    return _this;
  }

  _createClass(Form, [{
    key: "componentDidMount",

    /**
     * Runs once the component has mounted.
     *
     * @method componentDidMount
     * @return {void}
     */
    value: function componentDidMount() {
      if (this.props.stickyFooter) {
        this.addStickyFooterListeners();
      }

      if (this.props.validateOnMount) {
        this.validate();
      }

      if (this.props.unsavedWarning) {
        this.addUnsavedWarningListener();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.stickyFooter && !this.props.stickyFooter) {
        this.addStickyFooterListeners();
      }

      if (!nextProps.stickyFooter && this.props.stickyFooter) {
        this.removeStickyFooterListeners();
      }

      if (nextProps.unsavedWarning && !this.props.unsavedWarning) {
        this.addUnsavedWarningListener();
      }

      if (!nextProps.unsavedWarning && this.props.unsavedWarning) {
        this.removeUnsavedWarningListener();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.stickyFooter) {
        this.removeStickyFooterListeners();
      }

      if (this.props.unsavedWarning) {
        this.removeUnsavedWarningListener();
      }
    }
    /**
     * Gets the current active input.
     *
     * @method getActiveInput
     * @return {Object} the currently active component
     */

  }, {
    key: "render",

    /**
     * Renders the component.
     *
     * @method render
     * @return {Object} JSX form
     */
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("form", _extends({
        onSubmit: this.handleOnSubmit
      }, this.htmlProps(), {
        ref: function ref(form) {
          _this2._form = form;
        }
      }, (0, _tags.default)('form', this.props)), generateCSRFToken(this._document), this.props.children, this.formFooter());
    }
  }, {
    key: "mainClasses",

    /**
     * Main class getter
     *
     * @method mainClasses
     * @return {String} Main className
     */
    get: function get() {
      return (0, _classnames.default)('carbon-form', this.props.className, {
        'carbon-form--sticky-footer': this.state.stickyFooter
      });
    }
    /**
     * Button class getter
     *
     * @method buttonClasses
     * @return {String} Main className
     */

  }, {
    key: "footerClasses",
    get: function get() {
      return (0, _classnames.default)('carbon-form__buttons', "carbon-form__buttons--".concat(this.props.buttonAlign));
    }
  }]);

  return Form;
}(_react.default.Component);
/**
 * Creates and returns CSRF token for input field
 *
 * @private
 * @method generateCSRFToken
 * @param {Object} doc DOM object
 * @return {Object} JSX hidden CSRF token
 */


_defineProperty(Form, "propTypes", {
  /**
   * Warning popup shown when trying to navigate away from an edited
   * form if true
   *
   * @property unsavedWarning
   * @type {Boolean}
   * @default true
   */
  unsavedWarning: _propTypes.default.bool,

  /**
   * Cancel button is shown if true
   *
   * @property cancel
   * @type {Boolean}
   * @default true
   */
  cancel: _propTypes.default.bool,

  /**
   * Custom function that is called immediately
   * after the form validates
   *
   * @property afterFormValidation
   * @type {Function}
   */
  afterFormValidation: _propTypes.default.func,

  /**
   * Custom function that is called immediately
   * before the form validates
   *
   * @property beforeFormValidation
   * @type {Function}
   */
  beforeFormValidation: _propTypes.default.func,

  /**
   * Alignment of submit button
   * @ property
   * @type {String}
   */
  buttonAlign: _propTypes.default.string,

  /**
   * Determines if the form is in a saving state
   *
   * @property saving
   * @type {Boolean}
   * @default false
   */
  saving: _propTypes.default.bool,

  /**
   * Enables the sticky footer.
   *
   * @property stickyFooter
   * @type {Boolean}
   */
  stickyFooter: _propTypes.default.bool,

  /**
   * Applies additional padding to the sticky footer, useful to align buttons.
   *
   * @property stickyFooterPadding
   * @type {String}
   */
  stickyFooterPadding: _propTypes.default.string,

  /**
   * If true, will validate the form on mount
   *
   * @property validateOnMount
   * @type {Boolean}
   * @default false
   */
  validateOnMount: _propTypes.default.bool,

  /**
   * If true, will disable the savebutton when clicked
   *
   * @property autoDisable
   * @type {Boolean}
   * @default false
   */
  autoDisable: _propTypes.default.bool,

  /**
   * Text for the cancel button
   *
   * @property cancelText
   * @type {String}
   * @default "Cancel"
   */
  cancelText: _propTypes.default.string,

  /**
   * Properties for the cancel button
   *
   * @property cancelButtonProps
   * @type {Object}
   */
  cancelButtonProps: _propTypes.default.object,

  /**
   * Text for the save button
   *
   * @property saveText
   * @type {String}
   * @default "Save"
   */
  saveText: _propTypes.default.string,

  /**
   * Properties for the save button
   *
   * @property saveButtonProps
   * @type {Object}
   */
  saveButtonProps: _propTypes.default.object,

  /**
   * Custom function for Cancel button onClick
   *
   * @property onCancel
   * @type {Function}
   */
  onCancel: _propTypes.default.func,

  /**
   * Hide or show the save button
   *
   * @property saveFalse
   * @type {Boolean}
   */
  save: _propTypes.default.bool,

  /**
   * Additional actions rendered next to the save and cancel buttons
   *
   * @property additionalActions
   * @type {String|JSX}
   */
  additionalActions: _propTypes.default.node,
  // eslint-disable-line react/no-unused-prop-types

  /**
   * Additional actions rendered and aligned left to the save and cancel buttons
   *
   * @property additionalActions
   * @type {String|JSX}
   */
  leftAlignedActions: _propTypes.default.node,
  // eslint-disable-line react/no-unused-prop-types

  /**
   * Additional actions rendered and aligned right to the save and cancel buttons
   *
   * @property additionalActions
   * @type {String|JSX}
   */
  rightAlignedActions: _propTypes.default.node,
  // eslint-disable-line react/no-unused-prop-types

  /**
   * Custom callback for when form will submit
   *
   * @property onSubmit
   * @type {Function}
   */
  onSubmit: _propTypes.default.func,

  /**
   * Override Save Button
   *
   * @property customSaveButton
   * @type {Node}
   */
  customSaveButton: _propTypes.default.node,

  /**
   * A custom class name for the component.
   *
   * @property className
   * @type {String}
   */
  className: _propTypes.default.string,

  /**
   * Children elements
   *
   * @property children
   * @type {Node}
   */
  children: _propTypes.default.node,

  /**
   * Hide or show the summary
   *
   * @property showSummary
   * @type {Boolean}
   */
  showSummary: _propTypes.default.bool
});

_defineProperty(Form, "defaultProps", {
  buttonAlign: 'right',
  cancel: true,
  unsavedWarning: true,
  save: true,
  saving: false,
  validateOnMount: false,
  customSaveButton: null,
  showSummary: true
});

_defineProperty(Form, "childContextTypes", {
  /**
   * Defines a context object for child components of the form component.
   * https://facebook.github.io/react/docs/context.html
   *
   * @property form
   * @type {Object}
   */
  form: _propTypes.default.object
});

_defineProperty(Form, "contextTypes", {
  modal: _propTypes.default.object
});

function generateCSRFToken(doc) {
  var csrfParam = doc.querySelector('meta[name="csrf-param"]');
  var csrfToken = doc.querySelector('meta[name="csrf-token"]');
  var csrfAttr = csrfParam ? csrfParam.getAttribute('content') : '';
  var csrfValue = csrfToken ? csrfToken.getAttribute('content') : '';
  return _react.default.createElement("input", {
    type: "hidden",
    name: csrfAttr,
    value: csrfValue,
    readOnly: true
  });
}

var _default = Form;
exports.default = _default;