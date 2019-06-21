"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.assign");

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

var _step = _interopRequireDefault(require("./step"));

require("./multi-step-wizard.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
 * A MultiStepWizard widget.
 *
 * == How to use a MultiStepWizard in a component:
 *
 * In your file:
 *
 *   import MultiStepWizard from 'carbon-react/lib/components/multi-step-wizard';
 *
 * To render the Wizard:
 *
 *  <MultiStepWizard steps={ [<Step1 />, <Step2 />, ...] } />
 *
 * The component rendering the wizard must pass down a prop of 'steps' where you need to provide an array of custom
 * step components. Note that Step components must be objects and you can pass props to Step components, e.g.
 * <MultiStepWizard steps={ [<Textbox onChange={ this.updateTextboxValue } />, <div className='some-style' />] } />
 *
 * You also need to provide a 'onSubmit' handler to handle a submit event.
 *
 * The wizard also takes a 'currentStep' prop with an integer to specify a step you want to start with.
 * e.g. currentStep={ 2 }. The wizard starts with the first step by default.
 *
 * The wizard disables inactive steps by default. If you wish to enable inactive steps, pass a 'enableInactiveSteps'
 * prop and set it to true.
 *
 * The wizard generates Next and Back buttons by default. If you wish to use custom buttons to replace the default ones
 * in a step component, you can pass a 'defaultButton' prop in the corresponding step component and set it to false.
 * Also, if you want to add additional buttons beside the default Next and Back buttons, you can pass a 'extraButtons'
 * prop in the corresponding step component with your extra buttons.
 * Individual Steps can be optionally disabled by a passing a prop of `enabled={ false }`.
 * e.g. <MultiStepWizard steps={ [<Step1 defaultButton={ false } />, <Step2 />] } />
 *      <MultiStepWizard steps={ [<Step1 />, <Step2 extraButtons={ [<Button>Cancel</Button>] }) />] } />
 *      <MultiStepWizard steps={ [<Step1 />, <Step2 enabled={ false } />] } />
 *
 * The wizard provides the ability to hook into the handle next/back/submit methods.
 * (1) By passing a 'beforeSubmitValidation' prop in the wizard, you can add custom logic before a submit event, and
 *     the submit event can be completed only when the 'beforeSubmitValidation' prop returns 'true'.
 * (2) By passing 'onNext' prop in the corresponding step component,
 *     you can add custom logic when moving a step forward, and
 *     the 'onNext' prop overrides the step's default behaviour of moving next.
 * (3) By passing 'onBack' prop in the corresponding step component,
 *     you can add custom logic when moving a step backward, and
 *     the 'onBack' prop overrides the step's default behaviour of moving back.
 * e.g. <MultiStepWizard steps={ [
 *        <Step1 onNext={ this.customMethodOnNext }/>,
 *        <Step2 onBack={ this.customMethodOnBack }) />
 *      ] } />
 *      <MultiStepWizard beforeSubmitValidation={ this.customValidation } onSubmit={ this.customMethodOnSubmit } />
 *
 * If you want to complete the wizard without going through steps, you can pass a 'completed' prop and set it to true.
 *
 * @class MultiStepWizard
 * @constructor
 */
var MultiStepWizard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MultiStepWizard, _React$Component);

  function MultiStepWizard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MultiStepWizard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MultiStepWizard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "validateStepProps", function (stepProps) {
      var step = stepProps.currentStep;
      var completed = stepProps.completed;
      var totalSteps = stepProps.steps.length;

      if (completed === true) {
        return {
          currentStep: totalSteps,
          completed: true
        };
      }

      if (parseInt(step, 10) !== step || step < 1 || step > totalSteps) {
        return {
          currentStep: 1,
          completed: false
        };
      }

      return {
        currentStep: step,
        completed: false
      };
    });

    _defineProperty(_assertThisInitialized(_this), "next", function () {
      if (_this.state.currentStep < _this.totalSteps) {
        _this.setState(function (prevState) {
          return {
            currentStep: prevState.currentStep + 1
          };
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "back", function () {
      if (_this.state.currentStep > 1) {
        _this.setState(function (prevState) {
          return {
            completed: false,
            currentStep: prevState.currentStep - 1
          };
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "complete", function () {
      if (_this.state.currentStep === _this.totalSteps) {
        _this.setState({
          completed: true
        });
      }
    });

    return _this;
  }

  _createClass(MultiStepWizard, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        wizard: {
          nextHandler: this.props.onNext,
          backHandler: this.props.onBack,
          beforeSubmitValidation: this.props.beforeSubmitValidation,
          submitHandler: this.props.onSubmit,
          enableInactiveSteps: this.props.enableInactiveSteps,
          currentStep: this.state.currentStep,
          completed: this.state.completed,
          next: this.next,
          back: this.back,
          complete: this.complete,
          totalSteps: this.totalSteps
        }
      };
    }
    /**
     * A lifecycle method that is called before initial render.
     * Can set up state of component without causing a re-render.
     *
     * @method componentWillMount
     */

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var validProps = this.validateStepProps(this.props);
      this.setState({
        currentStep: validProps.currentStep,
        completed: validProps.completed
      });
    }
    /**
     * A lifecycle method to update the currentStep state when a new valid value has been specified.
     *
     * @method componentWillReceiveProps
     * @param {Object} props The new props passed down to the component
     * @return {void}
     */

  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var validProps = this.validateStepProps(nextProps);
      this.setState({
        currentStep: validProps.currentStep,
        completed: validProps.completed
      });
    }
    /**
     * Validate step props
     *
     * @method validateStepProps
     * @return {Object}
     */

  }, {
    key: "render",

    /**
     * Renders the component.
     *
     * @method render
     * @return {Object} JSX
     */
    value: function render() {
      return _react.default.createElement("div", {
        className: this.mainClasses
      }, _react.default.createElement("div", {
        className: "multi-step-wizard__content"
      }, this.wizardStepsHTML));
    }
  }, {
    key: "totalSteps",

    /**
     * Get total number of steps
     *
     * @method totalSteps
     * @return {Number}
     */
    get: function get() {
      return this.props.steps.length;
    }
    /**
     * Moves to the next step.
     *
     * @method next
     * @return {void}
     */

  }, {
    key: "wizardStepsHTML",

    /**
     * Returns the computed HTML for the wizard's steps.
     *
     * @method wizardStepsHTML
     * @return {Object} JSX
     */
    get: function get() {
      return this.props.steps.map(function (step, index) {
        return (// Step is never going to be re-ordered or changed so index is safe to use

          /* eslint-disable react/no-array-index-key */
          _react.default.createElement(_step.default, _extends({
            stepNumber: index + 1,
            key: "multi-step-wizard-step-".concat(index)
          }, step.props), step)
          /* eslint-enable react/no-array-index-key */

        );
      });
    }
    /**
     * Returns classes for the wizard.
     *
     * @method mainClasses
     * @return {String} Main className
     */

  }, {
    key: "mainClasses",
    get: function get() {
      return (0, _classnames.default)('multi-step-wizard', this.props.className);
    }
  }]);

  return MultiStepWizard;
}(_react.default.Component);

_defineProperty(MultiStepWizard, "propTypes", {
  /**
   * Individual steps
   *
   * @property steps
   * @type {Array}
   */
  steps: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,

  /**
   * Custom function that is called immediately before a submit event
   *
   * @property beforeSubmitValidation
   * @type {Function}
   */
  beforeSubmitValidation: _propTypes.default.func,

  /**
   * Custom className
   *
   * @property className
   * @type {String}
   */
  className: _propTypes.default.string,

  /**
   * A custom submit event handler
   *
   * @property onSubmit
   * @type {Function}
   */
  onSubmit: _propTypes.default.func.isRequired,

  /**
   * Current step
   *
   * @property currentStep
   * @type {Number}
   * @default 1
   */
  currentStep: _propTypes.default.number,
  // eslint-disable-line react/no-unused-prop-types

  /**
   * Determines if the wizard disables inactive steps
   *
   * @property enableInactiveSteps
   * @type {Boolean}
   * @default false
   */
  enableInactiveSteps: _propTypes.default.bool,

  /**
   * Add custom logic to next button
   *
   * @property onNext
   */
  onNext: _propTypes.default.func,

  /**
   * Add custom logic to previous button
   *
   * @property onPrevious
   */
  onBack: _propTypes.default.func,

  /**
   * The completion state of the wizard
   *
   * @property enableInactiveSteps
   * @type {Boolean}
   * @default false
   */
  completed: _propTypes.default.bool // eslint-disable-line react/no-unused-prop-types

});

_defineProperty(MultiStepWizard, "defaultProps", {
  beforeSubmitValidation: null,
  className: '',
  completed: false,
  currentStep: 1,
  enableInactiveSteps: false,
  onNext: null,
  onBack: null
});

_defineProperty(MultiStepWizard, "childContextTypes", {
  /**
   * Defines a context object for child components of this wizard.
   *
   * @property wizard
   * @type {Object}
   */
  wizard: _propTypes.default.object
  /**
   * Returns wizard object to child components.
   *
   * @method getChildContext
   * @return {void}
   */

});

var _default = MultiStepWizard;
exports.default = _default;