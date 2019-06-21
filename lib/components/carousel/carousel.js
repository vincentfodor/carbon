"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Slide", {
  enumerable: true,
  get: function get() {
    return _slide.default;
  }
});
exports.Carousel = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CSSTransitionGroup = _interopRequireDefault(require("react-transition-group/CSSTransitionGroup"));

var _lodash = require("lodash");

var _classnames = _interopRequireDefault(require("classnames"));

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

var _icon = _interopRequireDefault(require("../icon"));

var _slide = _interopRequireDefault(require("./slide"));

require("./carousel.scss");

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

var NEXT = 'next';
var PREVIOUS = 'previous';
var TRANSITION_TIME = 750;

var Carousel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Carousel, _React$Component);

  function Carousel() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Carousel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Carousel)).call.apply(_getPrototypeOf2, [this].concat(args)));
    /**
     * Direction of animation
     *
     * @property transitionDirection
     */

    _defineProperty(_assertThisInitialized(_this), "state", {
      selectedSlideIndex: null,
      // Currently selected slide
      disabled: false // Next/Previous buttons disabled state

    });

    _this.transitionDirection = NEXT;
    _this.mainClasses = _this.mainClasses.bind(_assertThisInitialized(_this));
    _this.onPreviousClick = _this.onPreviousClick.bind(_assertThisInitialized(_this));
    _this.onNextClick = _this.onNextClick.bind(_assertThisInitialized(_this));
    _this.onSlideSelection = _this.onSlideSelection.bind(_assertThisInitialized(_this));
    _this.enableButtonsAfterTimeout = _this.enableButtonsAfterTimeout.bind(_assertThisInitialized(_this));
    _this.previousButtonProps = _this.previousButtonProps.bind(_assertThisInitialized(_this));
    _this.nextButtonProps = _this.nextButtonProps.bind(_assertThisInitialized(_this));
    _this.numOfSlides = _this.numOfSlides.bind(_assertThisInitialized(_this));
    _this.visibleSlide = _this.visibleSlide.bind(_assertThisInitialized(_this));
    _this.slideSelector = _this.slideSelector.bind(_assertThisInitialized(_this));
    _this.nextClasses = _this.nextClasses.bind(_assertThisInitialized(_this));
    _this.previousClasses = _this.previousClasses.bind(_assertThisInitialized(_this));
    _this.previousButtonClasses = _this.previousButtonClasses.bind(_assertThisInitialized(_this));
    _this.nextButtonClasses = _this.nextButtonClasses.bind(_assertThisInitialized(_this));
    _this.slideSelectorClasses = _this.slideSelectorClasses.bind(_assertThisInitialized(_this));
    _this.transitionName = _this.transitionName.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Carousel, [{
    key: "componentWillMount",

    /**
     * A lifecycle method that is called after before initial render.
     * Can set up state of component without causing a re-render
     *
     * @method componentWillMount
     */
    value: function componentWillMount() {
      var selectedIndex = Number(this.props.slideIndex) || Number(this.props.initialSlideIndex);
      this.setState({
        selectedSlideIndex: selectedIndex
      });
    }
    /**
     * A lifecycle method that is called before re-render.
     *
     * @method componentWillReceiveProps
     */

  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (typeof nextProps.slideIndex === 'undefined') {
        return;
      }

      var newIndex = this.verifyNewIndex(nextProps.slideIndex);
      var currentIndex = this.state.selectedSlideIndex;
      if (newIndex === currentIndex) return;

      if (newIndex > currentIndex) {
        this.transitionDirection = NEXT;
      } else {
        this.transitionDirection = PREVIOUS;
      }

      this.handleSlideChange(newIndex);
    }
    /**
     * Handles clicking on the previous button
     *
     * @method onPreviousClick
     */

  }, {
    key: "onPreviousClick",
    value: function onPreviousClick() {
      var newIndex = this.state.selectedSlideIndex - 1;

      if (newIndex < 0) {
        newIndex = this.numOfSlides() - 1;
      }

      this.transitionDirection = PREVIOUS;
      this.handleSlideChange(newIndex);
    }
    /**
     * Handles clicking on the next button
     *
     * @method onNextClick
     */

  }, {
    key: "onNextClick",
    value: function onNextClick() {
      var newIndex = (this.state.selectedSlideIndex + 1) % this.numOfSlides();
      this.transitionDirection = NEXT;
      this.handleSlideChange(newIndex);
    }
    /**
     * Handles clicking slide selector
     *
     * @method onSlideSelection
     */

  }, {
    key: "onSlideSelection",
    value: function onSlideSelection(ev) {
      var newSlideSelection = Number(ev.target.value);
      this.transitionDirection = newSlideSelection > this.state.selectedSlideIndex ? NEXT : PREVIOUS;
      this.handleSlideChange(newSlideSelection);
    }
    /**
     * Verifies the new index and corrects it if necessary
     *
     * @method verifyNewIndex
     * @param newIndex {Integer}
     * @return {Integer}
     */

  }, {
    key: "verifyNewIndex",
    value: function verifyNewIndex(newIndex) {
      if (newIndex < 0) {
        // If the new index is negative, select the last slide
        return this.numOfSlides() - 1;
      }

      if (newIndex > this.numOfSlides() - 1) {
        // If the new index is bigger than the number of slides, select the first slide
        return 0;
      }

      return newIndex;
    }
    /**
     * Handle the slide change to the newIndex
     *
     * @method handleSlideChange
     * @param newIndex {Integer}
     */

  }, {
    key: "handleSlideChange",
    value: function handleSlideChange(newIndex) {
      this.setState({
        disabled: true,
        selectedSlideIndex: newIndex
      });
      this.enableButtonsAfterTimeout();

      if (this.props.onSlideChange) {
        this.props.onSlideChange(newIndex, this.transitionDirection);
      }
    }
    /**
     * Gets the next div classes
     *
     * @method nextClasses
     */

  }, {
    key: "nextClasses",
    value: function nextClasses() {
      return (0, _classnames.default)('carbon-carousel__navigation', 'carbon-carousel__next');
    }
    /**
     * Gets the previous div classes
     *
     * @method previousClasses
     */

  }, {
    key: "previousClasses",
    value: function previousClasses() {
      return (0, _classnames.default)('carbon-carousel__navigation', 'carbon-carousel__previous');
    }
    /**
     * Gets the previous button classes
     *
     * @method previousButtonClasses
     */

  }, {
    key: "previousButtonClasses",
    value: function previousButtonClasses() {
      return (0, _classnames.default)('carbon-carousel__buttons', 'carbon-carousel__previous-button');
    }
    /**
     * Gets the next button classes
     *
     * @method nextButtonClasses
     */

  }, {
    key: "nextButtonClasses",
    value: function nextButtonClasses() {
      return (0, _classnames.default)('carbon-carousel__buttons', 'carbon-carousel__next-button');
    }
    /**
     * Gets the slide selector footer classes
     *
     * @method nextButtonClasses
     */

  }, {
    key: "slideSelectorClasses",
    value: function slideSelectorClasses() {
      return (0, _classnames.default)('carbon-carousel__selector');
    }
    /**
     * Re-enables the next and previous buttons after timeout
     *
     * @method enableButtonsAfterTimeout
     * @return {Void}
     */

  }, {
    key: "enableButtonsAfterTimeout",
    value: function enableButtonsAfterTimeout() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({
          disabled: false
        });
      }, TRANSITION_TIME);
    }
    /**
     * Gets the main classes
     *
     * @method mainClasses
     */

  }, {
    key: "mainClasses",
    value: function mainClasses() {
      return (0, _classnames.default)('carbon-carousel', this.props.className);
    }
    /**
     * Gets the props for the previous button
     *
     * @method previousButtonProps
     */

  }, {
    key: "previousButtonProps",
    value: function previousButtonProps() {
      var props = {
        className: this.previousButtonClasses()
      };

      if (!this.state.disabled) {
        props.onClick = this.onPreviousClick;
      }

      return props;
    }
    /**
     * Gets the props for the next button
     *
     * @method nextButtonProps
     */

  }, {
    key: "nextButtonProps",
    value: function nextButtonProps() {
      var props = {
        className: this.nextButtonClasses()
      };

      if (!this.state.disabled) {
        props.onClick = this.onNextClick;
      }

      return props;
    }
    /**
     * Gets the number of slides
     *
     * @method numOfSlides
     */

  }, {
    key: "numOfSlides",
    value: function numOfSlides() {
      return Array.isArray(this.props.children) ? (0, _lodash.compact)(this.props.children).length : 1;
    }
    /**
     * Gets the currently visible slide
     *
     * @method visibleSlide
     */

  }, {
    key: "visibleSlide",
    value: function visibleSlide() {
      var index = this.state.selectedSlideIndex;
      var visibleSlide = (0, _lodash.compact)(_react.default.Children.toArray(this.props.children))[index],
          slideClassNames = (0, _classnames.default)('carbon-slide carbon-slide--active', visibleSlide.props.className, {
        'carbon-slide--padded': this.props.enablePreviousButton || this.props.enableNextButton
      });
      index = visibleSlide.props.id || index;
      var additionalProps = {
        className: slideClassNames,
        'data-element': 'visible-slide',
        key: "carbon-slide-".concat(index)
      };
      return _react.default.cloneElement(visibleSlide, (0, _lodash.assign)({}, visibleSlide.props, additionalProps));
    }
    /**
     * Renders the slideSelector footer
     *
     * @method slideSelector
     */

  }, {
    key: "slideSelector",
    value: function slideSelector() {
      if (!this.props.enableSlideSelector) {
        return null;
      }

      var buttons = [];

      for (var i = 0; i < this.numOfSlides(); i++) {
        buttons.push(_react.default.createElement("span", {
          className: "carbon-carousel__selector-inputs",
          key: i,
          "data-element": "selector-inputs"
        }, _react.default.createElement("input", {
          disabled: this.state.disabled,
          className: "carbon-carousel__selector-input",
          "data-element": "selector-input",
          name: "carousel-slide",
          id: "carousel-slide-".concat(i),
          type: "radio",
          value: i,
          onChange: this.onSlideSelection,
          checked: this.state.selectedSlideIndex === i
        }), _react.default.createElement("label", {
          className: "carbon-carousel__selector-label",
          "data-element": "selector-label",
          htmlFor: "carousel-slide-".concat(i)
        })));
      }

      return _react.default.createElement("div", {
        className: this.slideSelectorClasses()
      }, buttons);
    }
    /**
     * Renders the previous button
     *
     * @method previousButton
     */

  }, {
    key: "previousButton",
    value: function previousButton() {
      if (!this.props.enablePreviousButton) {
        return null;
      }

      return _react.default.createElement("div", {
        className: this.previousClasses()
      }, _react.default.createElement("button", _extends({}, this.previousButtonProps(), {
        "data-element": "previous",
        type: "button"
      }), _react.default.createElement(_icon.default, {
        className: "carbon-carousel__previous-arrow",
        type: "dropdown"
      })));
    }
    /**
     * Renders the next button
     *
     * @method nextButton
     */

  }, {
    key: "nextButton",
    value: function nextButton() {
      if (!this.props.enableNextButton) {
        return null;
      }

      return _react.default.createElement("div", {
        className: this.nextClasses()
      }, _react.default.createElement("button", _extends({}, this.nextButtonProps(), {
        "data-element": "next",
        type: "button"
      }), _react.default.createElement(_icon.default, {
        className: "carbon-carousel__next-arrow",
        type: "dropdown"
      })));
    }
    /**
     * Returns the current transition name
     *
     * @method transitionName
     */

  }, {
    key: "transitionName",
    value: function transitionName() {
      if (this.props.transition === 'slide') {
        return "slide-".concat(this.transitionDirection);
      }

      return "carousel-transition-".concat(this.props.transition);
    }
    /**
     * Renders the Slide Component
     *
     * @method render
     */

  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", _extends({
        className: this.mainClasses()
      }, (0, _tags.default)('carousel', this.props)), _react.default.createElement("div", {
        className: "carbon-carousel__content"
      }, this.previousButton(), _react.default.createElement(_CSSTransitionGroup.default, {
        component: "div",
        className: "carbon-carousel__transition",
        transitionName: this.transitionName(),
        transitionEnterTimeout: TRANSITION_TIME,
        transitionLeaveTimeout: TRANSITION_TIME
      }, this.visibleSlide()), this.nextButton()), this.slideSelector());
    }
  }]);

  return Carousel;
}(_react.default.Component);

exports.Carousel = Carousel;

_defineProperty(Carousel, "propTypes", {
  /**
   * Custom className
   *
   * @property className
   * @type {String}
   */
  className: _propTypes.default.string,

  /**
   * The selected tab on page load
   *
   * @property initialSlideIndex
   * @type {String}
   * @default firstTab
   */
  initialSlideIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /**
   * The selected slide
   *
   * @property slideIndex
   * @type {String}
   */
  slideIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /**
   * Individual tabs
   *
   * @property children
   * @type {Object | Array}
   */
  children: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object]),

  /**
   * Enables the slide selector
   *
   * @property enableSlideSelector
   * @type {Boolean}
   */
  enableSlideSelector: _propTypes.default.bool,

  /**
   * Enables the previous button
   *
   * @property enablePreviousButton
   * @type {Boolean}
   */
  enablePreviousButton: _propTypes.default.bool,

  /**
   * Enables the next button
   *
   * @property enableNextButton
   * @type {Boolean}
   */
  enableNextButton: _propTypes.default.bool,

  /**
   * Action to be called on slide change
   *
   * @property onSlideChange
   * @type {Function}
   */
  onSlideChange: _propTypes.default.func,

  /**
   * Controls which transition to use.
   *
   * @property transition
   * @type {String}
   */
  transition: _propTypes.default.string
});

_defineProperty(Carousel, "defaultProps", {
  initialSlideIndex: 0,
  enableSlideSelector: true,
  enablePreviousButton: true,
  enableNextButton: true,
  transition: 'slide'
});