"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _i18nJs = _interopRequireDefault(require("i18n-js"));

var _button = _interopRequireDefault(require("../../button"));

var _icon = _interopRequireDefault(require("../../icon"));

require("./step.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
 * A Step widget.
 * This widget is part of MultiStepWizard and it is a wrapper for a step element that is passed to MultiStepWizard.
 *
 * == How to use a Step Widget in a component:
 *  See MultiStepWizard widget
 *
 * @class Step
 * @constructor
 */
var Step =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Step, _React$Component);

  function Step() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Step);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Step)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleOnSubmit", function (ev) {
      var valid = true;

      if (_this.wizard.beforeSubmitValidation) {
        valid = _this.wizard.beforeSubmitValidation(ev, _this.currentStepNumber);
      }

      if (valid === true) {
        _this.wizard.complete();

        _this.wizard.submitHandler(ev);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnNext", function (ev) {
      if (_this.props.onNext) {
        _this.props.onNext(ev, _this.currentStepNumber);
      } else {
        _this.wizard.next();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnBack", function (ev) {
      if (_this.props.onBack) {
        _this.props.onBack(ev, _this.currentStepNumber);
      } else {
        _this.wizard.back();
      }
    });

    return _this;
  }

  _createClass(Step, [{
    key: "render",

    /**
     * Renders the component.
     *
     * @method render
     */
    value: function render() {
      if (this.wizard) {
        return _react.default.createElement("div", {
          className: this.mainClasses
        }, _react.default.createElement("div", {
          className: "multi-step-wizard-step__indicator-bar ".concat(this.indicatorStatus)
        }, _react.default.createElement("div", {
          className: "multi-step-wizard-step__indicator-background"
        })), _react.default.createElement("div", {
          className: "multi-step-wizard-step__indicator-icon"
        }, _react.default.createElement("div", {
          className: "multi-step-wizard-step__indicator-placeholder"
        }, _react.default.createElement("div", {
          className: "multi-step-wizard-step__indicator-icon__content ".concat(this.indicatorStatus)
        }, this.indicatorHTML))), this.stepHTML);
      }

      return _react.default.createElement("div", {
        className: "multi-step-wizard-step--none"
      });
    }
  }, {
    key: "wizard",

    /**
     * Gets the step's wizard
     *
     * @method wizard
     * @return {Object}
     */
    get: function get() {
      return this.context.wizard;
    }
    /**
     * Gets the current step number
     *
     * @method currentStepNumber
     * @return {Number}
     */

  }, {
    key: "currentStepNumber",
    get: function get() {
      return this.wizard.currentStep;
    }
    /**
     * Checks if the step is the first step
     *
     * @method isFirstStep
     * @return {Boolean}
     */

  }, {
    key: "isFirstStep",
    get: function get() {
      return this.props.stepNumber === 1;
    }
    /**
     * Checks if the step is the last step
     *
     * @method isLastStep
     * @return {Boolean}
     */

  }, {
    key: "isLastStep",
    get: function get() {
      return this.props.stepNumber === this.wizard.totalSteps;
    }
    /**
     * Checks if step component should be disabled.
     *
     * @method stepDisabled
     * @return {Boolean}
     */

  }, {
    key: "stepDisabled",
    get: function get() {
      if (this.wizard.enableInactiveSteps || this.props.enabled) {
        return false;
      }

      return this.props.stepNumber !== this.currentStepNumber;
    }
    /**
     * Checks if step has been processed.
     *
     * @method stepProcessed
     * @return {Boolean}
     */

  }, {
    key: "stepProcessed",
    get: function get() {
      if (this.isLastStep) {
        return this.stepsCompleted;
      }

      return this.props.stepNumber < this.currentStepNumber;
    }
    /**
     * Checks if all steps are completed
     *
     * @method stepsCompleted
     * @return {Boolean}
     */

  }, {
    key: "stepsCompleted",
    get: function get() {
      return this.wizard.completed === true;
    }
    /**
     * Returns the computed HTML for the step.
     *
     * @method stepHTML
     * @return {Object} JSX
     */

  }, {
    key: "stepHTML",
    get: function get() {
      return _react.default.createElement("div", {
        className: "multi-step-wizard-step__content"
      }, this.props.children, this.buttonHTML);
    }
    /**
     * Returns the computed HTML for the buttons.
     *
     * @method buttonHTML
     * @return {Object} JSX
     */

  }, {
    key: "buttonHTML",
    get: function get() {
      if (this.props.defaultButton === false) {
        return this.extraButtonHTML;
      }

      var nextButton, backButton, submitButton;

      if (this.isLastStep) {
        submitButton = _react.default.createElement(_button.default, {
          as: "primary",
          className: "multi-step-wizard-step__button submit",
          "data-element": "submit",
          onClick: this.handleOnSubmit
        }, _i18nJs.default.t('wizards.multi_step_wizard.buttons.submit', {
          defaultValue: 'Submit'
        }));
      } else {
        nextButton = _react.default.createElement(_button.default, {
          as: "primary",
          className: "multi-step-wizard-step__button next",
          "data-element": "next",
          onClick: this.handleOnNext
        }, _i18nJs.default.t('wizards.multi_step_wizard.buttons.next', {
          defaultValue: 'Next'
        }));
      }

      if (!this.isFirstStep) {
        backButton = _react.default.createElement(_button.default, {
          className: "multi-step-wizard-step__button back",
          "data-element": "back",
          onClick: this.handleOnBack
        }, _i18nJs.default.t('wizards.multi_step_wizard.buttons.back', {
          defaultValue: 'Back'
        }));
      }

      return _react.default.createElement("div", {
        className: "multi-step-wizard-step__buttons"
      }, nextButton, submitButton, backButton, this.extraButtonHTML);
    }
    /**
     * Returns the computed HTML for the step indicator.
     *
     * @method indicatorHTML
     * @return {Object} JSX
     */

  }, {
    key: "indicatorHTML",
    get: function get() {
      if (this.stepProcessed) {
        return _react.default.createElement(_icon.default, {
          type: "white-tick",
          className: "multi-step-wizard-step__white-tick"
        });
      }

      return _react.default.createElement("div", null, this.props.stepNumber);
    }
    /**
     * Returns the step indicator status.
     *
     * @method indicatorStatus
     * @return {Boolean}
     */

  }, {
    key: "indicatorStatus",
    get: function get() {
      return this.stepProcessed ? 'processed' : 'pending';
    }
    /**
     * Returns the computed HTML for the extra buttons.
     *
     * @method extraButtonHTML
     * @return {Object} JSX
     */

  }, {
    key: "extraButtonHTML",
    get: function get() {
      return this.props.extraButtons.map(function (button, index) {
        return (// Would change behaviour to supply a uuid on each button

          /* eslint-disable react/no-array-index-key */
          _react.default.createElement("span", {
            key: "multi-step-wizard-step-custom-buttons-".concat(index)
          }, button)
          /* eslint-enable react/no-array-index-key */

        );
      });
    }
    /**
     * Main class getter
     *
     * @method mainClasses
     * @return {String}
     */

  }, {
    key: "mainClasses",
    get: function get() {
      return (0, _classnames.default)('multi-step-wizard-step', "multi-step-wizard-step-".concat(this.props.stepNumber), "multi-step-wizard-step--".concat(this.indicatorStatus), {
        'multi-step-wizard-step--disabled': this.stepDisabled,
        'multi-step-wizard-step--pending--disabled': this.stepDisabled && this.indicatorStatus === 'pending',
        'multi-step-wizard-step--processed--disabled': this.stepDisabled && this.indicatorStatus === 'processed',
        'multi-step-wizard-step-final': this.isLastStep
      }, this.props.className);
    }
  }]);

  return Step;
}(_react.default.Component);

_defineProperty(Step, "propTypes", {
  /**
   * Step number
   *
   * @property stepNumber
   * @type {Number}
   */
  stepNumber: _propTypes.default.number.isRequired,

  /**
   * Determines if the step renders default buttons
   *
   * @property defaultButton
   * @type {Boolean}
   * @default true
   */
  defaultButton: _propTypes.default.bool,

  /**
   * Custom function that is called when moving the step forward.
   * This function overrides the step's default behaviour of moving next.
   *
   * @property onNext
   * @type {Function}
   */
  onNext: _propTypes.default.func,

  /**
   * Custom function that is called when moving the step backward.
   * This function overrides the step's default behaviour of moving back.
   *
   * @property onBack
   * @type {Function}
   */
  onBack: _propTypes.default.func,

  /**
   * Additional buttons
   *
   * @property extraButtons
   * @type {Array}
   */
  extraButtons: _propTypes.default.arrayOf(_propTypes.default.object),

  /**
   * Determines if the step is enabled
   *
   * @property enabled
   * @type {Boolean}
   */
  enabled: _propTypes.default.bool,

  /**
   * Custom className
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
  children: _propTypes.default.node
});

_defineProperty(Step, "defaultProps", {
  children: null,
  className: '',
  defaultButton: true,
  enabled: false,
  extraButtons: [],
  onBack: null,
  onNext: null
});

_defineProperty(Step, "contextTypes", {
  wizard: _propTypes.default.object
  /**
   * Completes the step's wizard and triggers the custom submit event handler of the step's wizard
   *
   * @method handleOnSubmit
   * @return {void}
   */

});

var _default = Step;
exports.default = _default;