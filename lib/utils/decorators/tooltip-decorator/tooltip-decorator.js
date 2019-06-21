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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _lodash = require("lodash");

var _tooltip = _interopRequireDefault(require("../../../components/tooltip"));

var _portal = _interopRequireDefault(require("../../../components/portal"));

var _chainFunctions = _interopRequireDefault(require("../../helpers/chain-functions"));

var _ether = require("../../ether");

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
 * TooltipDecorator.
 *
 * This decorator attaches a tooltip to a component.
 *
 * == How to use Tooltip decorator in a component:
 *
 * In your file:
 *
 *   import TooltipDecorator from 'carbon-react/lib/utils/decorators/tooltip-decorator';
 *
 * To use the decorator, wrap your component with it:
 *
 *   const MyComponent = TooltipDecorator(
 *   class MyComponent extends React.Component {
 *     ...
 *   });
 *
 * You must also output the tooltip HTML in your component's render method:
 *
 * e.g.
 *
 * render() {
 *   return (
 *     <div>
 *       { this.tooltipHTML }
 *       ...your components JSX
 *     </div>
 *   );
 * }
 *
 * You must also give the surrounding div of the component a position of 'relative'
 *
 * e.g.
 *
 * render() {
 *   return (
 *     <div className='relative-class'>
 *       { this.tooltipHTML }
 *       ...your component's JSX
 *     </div>
 *   );
 * }
 *
 * The targetted JSX must also have a ref of _target and have the correct componentProps
 *
 * e.g.
 *
 * render() {
 *   return (
 *     <div className='relative-class'>
 *       <span
 *         ref={ (comp) => this._target = comp }
 *         { ...this.componentProps }
 *       />
 *       { this.tooltipHTML }
 *     </div>
 *   );
 * }
 *
 * To activate the tooltip, you must pass a prop of 'tooltipMessage' with some text content.
 *
 * render() {
 *   return (
 *     <MyComponent tooltipMessage='Some Helpful Content' />
 *   )
 * }
 *
 *
 * @method TooltipDecorator
 * @param {Class} ComposedComponent class to decorate
 * @return {Object} Decorated Component
 */
var TooltipDecorator = function TooltipDecorator(ComposedComponent) {
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

      _defineProperty(_assertThisInitialized(_this), "_showTooltipTimeout", null);

      _defineProperty(_assertThisInitialized(_this), "_hideTooltipTimeout", null);

      _defineProperty(_assertThisInitialized(_this), "_memoizedShifts", null);

      _defineProperty(_assertThisInitialized(_this), "state", {
        /**
         * Whether tooltip currently showing
         *
         * @property isVisible
         * @type {Boolean}
         * @default false
         */
        isVisible: false
      });

      _defineProperty(_assertThisInitialized(_this), "onShow", function () {
        clearTimeout(_this._hideTooltipTimeout);
        _this._showTooltipTimeout = setTimeout(function () {
          _this.setState({
            isVisible: true
          });

          _this.positionTooltip();
        }, 100);
      });

      _defineProperty(_assertThisInitialized(_this), "onHide", function () {
        clearTimeout(_this._showTooltipTimeout);
        _this._hideTooltipTimeout = setTimeout(function () {
          _this.setState({
            isVisible: false
          });
        }, 100);
      });

      _defineProperty(_assertThisInitialized(_this), "getTarget", function () {
        return _reactDom.default.findDOMNode(_this._target); // eslint-disable-line react/no-find-dom-node
      });

      _defineProperty(_assertThisInitialized(_this), "getTooltip", function () {
        return _reactDom.default.findDOMNode(_this._tooltip); // eslint-disable-line react/no-find-dom-node
      });

      _defineProperty(_assertThisInitialized(_this), "calculatePosition", function (tooltip, target) {
        if (_this._memoizedShifts) {
          return _this._memoizedShifts;
        }

        var tooltipWidth = tooltip.offsetWidth,
            tooltipHeight = tooltip.offsetHeight,
            pointerDimension = 15,
            // hardcode height & width since span has no dimensions
        pointerOffset = 11,
            targetWidth = target.offsetWidth,
            targetHeight = target.offsetHeight,
            targetRect = target.getBoundingClientRect(),
            offsetY = window.pageYOffset,
            targetTop = targetRect.top + offsetY,
            targetBottom = targetRect.bottom + offsetY,
            targetLeft = targetRect.left,
            targetRight = targetRect.right;
        return {
          verticalY: targetTop - tooltipHeight - pointerDimension * 0.5,
          verticalBottomY: targetBottom + pointerDimension * 0.5,
          verticalCenter: targetLeft - tooltipWidth * 0.5 + targetWidth * 0.5,
          verticalRight: targetLeft + pointerDimension + pointerOffset - tooltipWidth,
          verticalLeft: targetLeft - pointerDimension * 0.5,
          rightHorizontal: targetRight + 0.5 * pointerDimension,
          leftHorizontal: targetLeft - pointerDimension * 0.5 - tooltipWidth,
          sideTop: targetTop - pointerOffset,
          sideBottom: targetTop - tooltipHeight + targetHeight + pointerOffset,
          sideCenter: targetTop + targetHeight * 0.5 - tooltipHeight * 0.5
        };
      });

      _defineProperty(_assertThisInitialized(_this), "positionTooltip", function () {
        if (_this.state.isVisible) {
          var tooltip = _this.getTooltip(),
              target = _this.getTarget();

          if (!tooltip || !target) {
            // Can't find the tooltip or target so hide
            _this.setState({
              isVisible: false
            });

            return;
          }

          var alignment = _this.props.tooltipAlign || 'center',
              position = _this.props.tooltipPosition || 'top',
              shifts = _this.calculatePosition(tooltip, target);

          switch (position) {
            case 'top':
              (0, _ether.styleElement)(tooltip, 'top', (0, _ether.append)(shifts.verticalY, 'px'));
              (0, _ether.styleElement)(tooltip, 'right', 'auto');
              (0, _ether.styleElement)(tooltip, 'bottom', 'auto');
              (0, _ether.styleElement)(tooltip, 'left', (0, _ether.append)(shifts["vertical".concat((0, _lodash.startCase)(alignment))], 'px'));
              break;

            case 'bottom':
              (0, _ether.styleElement)(tooltip, 'top', (0, _ether.append)(shifts.verticalBottomY, 'px'));
              (0, _ether.styleElement)(tooltip, 'bottom', 'auto');
              (0, _ether.styleElement)(tooltip, 'left', (0, _ether.append)(shifts["vertical".concat((0, _lodash.startCase)(alignment))], 'px'));
              break;

            case 'left':
              (0, _ether.styleElement)(tooltip, 'top', (0, _ether.append)(shifts["side".concat((0, _lodash.startCase)(alignment))], 'px'));
              (0, _ether.styleElement)(tooltip, 'bottom', 'auto');
              (0, _ether.styleElement)(tooltip, 'left', (0, _ether.append)(shifts["".concat(position, "Horizontal")], 'px'));
              break;

            case 'right':
            default:
              (0, _ether.styleElement)(tooltip, 'top', (0, _ether.append)(shifts["side".concat((0, _lodash.startCase)(alignment))], 'px'));
              (0, _ether.styleElement)(tooltip, 'bottom', 'auto');
              (0, _ether.styleElement)(tooltip, 'left', (0, _ether.append)(shifts["".concat(position, "Horizontal")], 'px'));
          }
        }
      });

      return _this;
    }

    _createClass(Component, [{
      key: "componentWillUpdate",

      /**
       * @method componentWillUpdate
       * @return {Void}
       */
      value: function componentWillUpdate(nextProps, nextState) {
        if (_get(_getPrototypeOf(Component.prototype), "componentWillUpdate", this)) {
          _get(_getPrototypeOf(Component.prototype), "componentWillUpdate", this).call(this, nextProps, nextState);
        }

        if (nextProps.tooltipMessage !== this.props.tooltipMessage || nextProps.tooltipPosition !== this.props.tooltipPosition || nextProps.tooltipAlign !== this.props.tooltipAlign) {
          this._memoizedShifts = null;
        }
      }
      /**
       * @method componentDidUpdate
       * @return {Void}
       */

    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (_get(_getPrototypeOf(Component.prototype), "componentDidUpdate", this)) {
          _get(_getPrototypeOf(Component.prototype), "componentDidUpdate", this).call(this, prevProps);
        }

        if (this.props.tooltipMessage && !this._memoizedShifts && this.state.isVisible) {
          this.positionTooltip();
        }
      }
      /**
       * A lifecycle called immediatly before new props cause a re-render
       * Resets the hover state if active
       *
       * @method componentWillReceiveProps
       */

    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if (_get(_getPrototypeOf(Component.prototype), "componentWillReceiveProps", this)) {
          _get(_getPrototypeOf(Component.prototype), "componentWillReceiveProps", this).call(this, nextProps);
        }

        if (this.state.isVisible) {
          this.setState({
            isVisible: false
          });
        }
      }
    }, {
      key: "componentProps",

      /**
       * Additional Props for decorated component
       *
       * @method componentProps
       * @return {Object} props
       */
      get: function get() {
        var props = _get(_getPrototypeOf(Component.prototype), "componentProps", this) || {};

        if (this.props.tooltipMessage) {
          props.onMouseEnter = (0, _chainFunctions.default)(this.onShow, props.onMouseEnter);
          props.onMouseLeave = (0, _chainFunctions.default)(this.onHide, props.onMouseLeave);
          props.onFocus = (0, _chainFunctions.default)(this.onShow, props.onFocus);
          props.onBlur = (0, _chainFunctions.default)(this.onHide, props.onBlur);
          props.onTouchEnd = this.state.isVisible ? this.onHide : this.onShow;
        }

        return props;
      }
      /**
       * Supplies the HTML for tooltip
       *
       * @method tooltipHTML
       * @return {Object} JSX for tooltip
       */

    }, {
      key: "tooltipHTML",
      get: function get() {
        var _this2 = this;

        return this.props.tooltipMessage && this.state.isVisible && _react.default.createElement(_portal.default, {
          key: "tooltip"
        }, _react.default.createElement(_tooltip.default, {
          align: this.props.tooltipAlign,
          "data-element": "tooltip",
          isVisible: this.state.isVisible,
          onMouseEnter: this.onShow,
          onMouseLeave: this.onHide,
          position: this.props.tooltipPosition,
          ref: function ref(comp) {
            _this2._tooltip = comp;
          }
        }, this.props.tooltipMessage));
      }
    }]);

    return Component;
  }(ComposedComponent);

  _defineProperty(Component, "propTypes", (0, _lodash.assign)({}, ComposedComponent.propTypes, {
    /**
     * The message for this tooltip
     *
     * @property
     * @type {Node}
     */
    tooltipMessage: _propTypes.default.node,

    /**
     * The position of this tooltip: top, bottom, left or right
     *
     * @property
     * @default top
     * @type {String}
     */
    tooltipPosition: _propTypes.default.string,

    /**
     * The alignment of this tooltip: left, right or center
     *
     * @property
     * @default center
     * @type {String}
     */
    tooltipAlign: _propTypes.default.string
  }));

  Component.displayName = ComposedComponent.displayName || ComposedComponent.name;
  return Component;
};

var _default = TooltipDecorator;
exports.default = _default;