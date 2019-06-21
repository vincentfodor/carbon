"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _css = _interopRequireDefault(require("../../utils/css"));

var _inputLabel = _interopRequireDefault(require("../../utils/decorators/input-label"));

var _inputValidation = _interopRequireDefault(require("../../utils/decorators/input-validation"));

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

require("./button-toggle-group.scss");

var _class, _temp;

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
 * A button toggle group widget.
 *
 * == How to use an ButtonToggleGroup in a component:
 *
 * In your file
 *
 *   import ButtonToggleGroup from 'carbon-react/lib/components/button-toggle-group';
 *
 * To render an ButtonToggleGroup:
 *
 *   <ButtonToggleGroup validations=[]>
 *     <ButtonToggle />
 *   <ButtonToggleGroup />
 *
 * @class ButtonToggleGroup
 * @constructor
 * @decorators {InputLabel,InputValidation}
 */
var ButtonToggleGroup = (0, _inputLabel.default)((0, _inputValidation.default)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ButtonToggleGroup, _React$Component);

  function ButtonToggleGroup() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ButtonToggleGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ButtonToggleGroup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "_handleGroupBlur", function () {
      if (!_this.blockBlur) {
        // use setTimeout to drop in the callstack to ensure value has time to be set
        setTimeout(function () {
          _this.validate();

          _this.warning();

          _this.info();

          if (_this.state.messageLocked) {
            _this.setState({
              messageLocked: false
            });
          }
        }, 100);
      }
    });

    return _this;
  }

  _createClass(ButtonToggleGroup, [{
    key: "componentWillReceiveProps",

    /**
    * A lifecycle method for when the component has re-rendered.
    *
    * @method componentWillReceiveProps
    * @return {void}
    */
    value: function componentWillReceiveProps(nextProps) {
      // manually trigger change as this wrapper doesn't actually have an input to trigger it itself
      if (nextProps.value !== this.props.value) {
        this._handleContentChange();
      }
    }
    /**
     * Main Class getter
     *
     * @method mainClasses
     * @return {void}
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
      var _this2 = this;

      return _react.default.createElement("div", _extends({
        className: this.mainClasses,
        ref: function ref(comp) {
          _this2._target = comp;
        }
      }, (0, _tags.default)('button-toggle-group', this.props)), this.labelHTML, this.inputHTML, this.validationHTML, this.fieldHelpHTML);
    }
  }, {
    key: "mainClasses",
    get: function get() {
      return (0, _classnames.default)('carbon-button-toggle-group', this.props.className, _css.default.input);
    }
    /**
     * Provides an extension point to add additional properties for the containing field.
     *
     * @method fieldProps
     * @return {Object} Field props
     */

  }, {
    key: "fieldProps",
    get: function get() {
      var fieldProps = {
        className: 'common-input__field',
        onFocus: this._handleFocus,
        onBlur: this._handleGroupBlur
      };
      return fieldProps;
    }
    /**
     * Extends the input props to include the ID.
     *
     * @method inputProps
     * @return {Object} Input props
     */

  }, {
    key: "inputProps",
    get: function get() {
      var children = _react.default.Children.toArray(this.props.children);

      if (children.length === 0 || children[0].props.id === undefined) {
        return null;
      }

      return {
        id: children[0].props.id
      };
    }
    /**
     * Returns HTML for the input.
     *
     * @method inputHTML
     * @return {HTML} HTML for input
     */

  }, {
    key: "inputHTML",
    get: function get() {
      return _react.default.createElement("div", this.fieldProps, this.props.children);
    }
    /**
     * On blur of the input we want to validate the field.
     *
     * @method _handleBlur
     * @return {void}
     */

  }]);

  return ButtonToggleGroup;
}(_react.default.Component), _defineProperty(_class, "propTypes", {
  /**
   * Children elements
   *
   * @property children
   * @type {Node}
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Custom className
   *
   * @property className
   * @type {String}
   */
  className: _propTypes.default.string,

  /**
   * Selected value from children components
   *
   * @property value
   * @type {String}
   */
  value: _propTypes.default.string
}), _temp)));
var _default = ButtonToggleGroup;
exports.default = _default;