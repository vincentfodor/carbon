"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.find");

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

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

var _classnames = _interopRequireDefault(require("classnames"));

var _help = _interopRequireDefault(require("../../../components/help"));

require("./input-label.scss");

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
 * InputLabel decorator.
 *
 * This decorator provides HTML for input labels.
 *
 * == How to use InputLabel decorator in a component:
 *
 * In your file:
 *
 *   import InputLabel from 'carbon-react/lib/utils/decorators/input-label';
 *
 * To use the decorator, wrap your component with it:
 *
 *   const MyComponent = InputLabel(
 *   class MyComponent extends React.Component {
 *     ...
 *   })
 *
 * In the render method for your component, you can now output the HTML:
 *
 *   render() {
 *     return (
 *       <div>
 *         { this.labelHTML() }
 *         <input />
 *       </div>
 *     );
 *   }
 *
 * The label decorator adds additional props to your component for:
 *
 *  * `label` - either a string or false to turn the label off
 *  * `labelInline` - pass true to format the input/label inline
 *  * `labelWidth` - pass a percentage to define the width of the label when it
 *  is displayed inline.
 *  * `inputWidth` - pass a percentage to define the width of the input when it
 *  is displayed inline.
 *
 * @method InputLabel
 * @param {Class} ComposedComponent class to decorate
 * @return {Object} Decorated Component
 */
var InputLabel = function InputLabel(ComposedComponent) {
  var Component =
  /*#__PURE__*/
  function (_ComposedComponent) {
    _inherits(Component, _ComposedComponent);

    function Component() {
      _classCallCheck(this, Component);

      return _possibleConstructorReturn(this, _getPrototypeOf(Component).apply(this, arguments));
    }

    _createClass(Component, [{
      key: "mainClasses",

      /**
       * Extends the main classes with any validation classes.
       *
       * @method mainClasses
       * @return {String} Main class names
       */
      get: function get() {
        return (0, _classnames.default)(_get(_getPrototypeOf(Component.prototype), "mainClasses", this), {
          'common-input--label-inline': this.props.labelInline,
          'common-input--has-label-help': this.props.labelHelp,
          'common-input--has-field-help': this.props.fieldHelp
        });
      }
      /**
       * Classes to apply to the label
       *
       * @method labelClasses
       * @return {String} classes
       */

    }, {
      key: "labelClasses",
      get: function get() {
        return (0, _classnames.default)('common-input__label', {
          'common-input__label--inline': this.props.labelInline,
          'common-input__label--help': this.props.labelHelp,
          'common-input__label--align-right': this.props.labelAlign === 'right'
        });
      }
    }, {
      key: "fieldHelpClasses",
      get: function get() {
        return (0, _classnames.default)(_get(_getPrototypeOf(Component.prototype), "fieldHelpClasses", this), 'common-input__help-text', {
          'common-input__help-text--inline': this.props.labelInline
        });
      }
      /**
       * ID used for the label.
       *
       * @method labelID
       * @return {String}
       */

    }, {
      key: "labelID",
      get: function get() {
        return this._guid;
      }
      /**
       * Supplies the HTML for the label.
       *
       * @method labelHTML
       * @return {HTML} HTML for label.
       */

    }, {
      key: "labelHTML",
      get: function get() {
        if (this.props.label === false) {
          return null;
        } // either use label supplied by dev, or automatically make one common on input name


        var labelText = this.props.label || (0, _lodash.startCase)(this.props.name);

        if (!labelText) {
          return null;
        } // set asterisk if validation is used which uses an asterisk


        if ((0, _lodash.find)(this.props.validations, function (v) {
          return v.asterisk;
        })) {
          labelText += '*';
        } // add label width if defined


        var labelStyle = this.props.labelWidth ? {
          width: "".concat(this.props.labelWidth, "%")
        } : null;
        return _react.default.createElement("label", {
          style: labelStyle,
          className: this.labelClasses,
          htmlFor: this.inputProps.id,
          "data-element": "label"
        }, labelText, this.labelHelpHTML);
      }
      /**
       * Supplies the HTML for help component
       *
       * @method labelHelpHTML
       * @return {Object} JSX for help
       */

    }, {
      key: "labelHelpHTML",
      get: function get() {
        if (!this.props.labelHelp) {
          return null;
        }

        return _react.default.createElement(_help.default, {
          tooltipPosition: this.props.labelHelpPosition,
          tooltipAlign: this.props.labelHelpAlign,
          href: this.props.labelHelpHref
        }, this.props.labelHelp);
      }
      /**
       * Supplies the HTML label help
       *
       * @method fieldHelpHTML
       * @return {Object} JSX for label help
       */

    }, {
      key: "fieldHelpHTML",
      get: function get() {
        if (!this.props.fieldHelp) {
          return null;
        }

        var style = {};

        if (this.props.labelInline) {
          style.marginLeft = "".concat(this.props.labelWidth, "%");
        }

        return _react.default.createElement("span", {
          className: this.fieldHelpClasses,
          style: style,
          "data-element": "help"
        }, this.props.fieldHelp);
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
        var inputProps = _get(_getPrototypeOf(Component.prototype), "inputProps", this) || {}; // set id so label will focus on input when clicked

        if (!inputProps.id) {
          inputProps.id = this.labelID;
        }

        return inputProps;
      }
      /**
       * Extends the field props to include width.
       *
       * @method fieldProps
       * @return {Object} Field props
       */

    }, {
      key: "fieldProps",
      get: function get() {
        var fieldProps = _get(_getPrototypeOf(Component.prototype), "fieldProps", this) || {};
        var labelWidth = this.props.labelWidth;
        var inputWidth = this.props.inputWidth;

        if (labelWidth && !inputWidth) {
          inputWidth = 100 - labelWidth;
        }

        if (inputWidth) {
          fieldProps.style = fieldProps.style || {};
          fieldProps.style.width = "".concat(inputWidth, "%");
        }

        return fieldProps;
      }
    }]);

    return Component;
  }(ComposedComponent);

  _defineProperty(Component, "contextTypes", (0, _lodash.assign)({}, ComposedComponent.contextTypes, {
    form: _propTypes.default.object
  }));

  _defineProperty(Component, "propTypes", (0, _lodash.assign)({}, ComposedComponent.propTypes, {
    /**
     * Either a string or false to turn the label off
     *
     * @property
     * @type {String|Boolean}
     */
    label: _propTypes.default.node,

    /**
     * Pass true to format the input/label inline
     *
     * @property
     * @default top
     * @type {Boolean}
     */
    labelInline: _propTypes.default.bool,

    /**
     * Pass a percentage to define the width of the label when it
     *  is displayed inline.
     *
     * @property
     * @type {Number}
     */
    labelWidth: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

    /**
     * Aligns label content to the right if set
     *
     * @property
     * @type {String}
     */
    labelAlign: _propTypes.default.string,

    /**
     * Text applied to tooptip of help icon
     *
     * @property
     * @type {String}
     */
    labelHelp: _propTypes.default.string,

    /**
     * Pass a percentage to define the width of the label when it
     *  is displayed inline
     *
     * @property
     * @type {Number}
     */
    inputWidth: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

    /**
     * A string representing a help message
     *
     * @property
     * @type {Node}
     */
    fieldHelp: _propTypes.default.node,

    /**
     * Boolean to determine whether the help message should be inline
     *
     * @property
     * @type {Boolean}
     */
    fieldHelpInline: _propTypes.default.bool
  }));

  Component.displayName = ComposedComponent.displayName || ComposedComponent.name;
  return Component;
};

var _default = InputLabel;
exports.default = _default;