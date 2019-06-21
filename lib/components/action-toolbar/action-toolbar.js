"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

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

var _link = _interopRequireDefault(require("../link"));

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

require("./action-toolbar.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
 * A ActionToolbar widget.
 *
 * == How to use a ActionToolbar in a component:
 *
 * In your file
 *
 *   import ActionToolbar from 'carbon-react/lib/components/action-toolbar';
 *
 * To render an ActionToolbar:
 *
 *   let actions = {
 *     subscription: {
 *       text: "Add Subscriptions",
 *       icon: "basket",
 *       onClick: onClickHandler(event, selected) => {}
 *     },
 *     delete: {
 *       text: "Delete",
 *       icon: "bin",
 *       onClick: onClickHandler(event, selected) => {}
 *     }
 *   };
 *
 *   <ActionToolbar total={ count } actions={ actions } />
 *
 *  Additional props for Link or Icon can be passed in the action object.
 *
 * @class ActionToolbar
 * @constructor
 */
var ActionToolbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ActionToolbar, _React$Component);

  // TODO This component needs to be freestanding - we need to provide an api that allows it be used independently.
  // https://github.com/Sage/carbon/issues/1070
  function ActionToolbar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ActionToolbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ActionToolbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      /**
       * @property total
       * @type {Number}
       */
      total: 0,

      /**
       * @property selected
       * @type {Object}
       */
      selected: {}
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnClick", function (onClick, selected) {
      if (!onClick) {
        return null;
      }

      return function (event) {
        return onClick(selected, event);
      };
    });

    _defineProperty(_assertThisInitialized(_this), "propsForChildren", function () {
      return {
        disabled: !_this.isActive(),
        selected: _this.state.selected,
        total: _this.state.total
      };
    });

    _this.actions = _this.actions.bind(_assertThisInitialized(_this));
    _this.isActive = _this.isActive.bind(_assertThisInitialized(_this));
    _this.mainClasses = _this.mainClasses.bind(_assertThisInitialized(_this));
    _this.buildAction = _this.buildAction.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ActionToolbar, [{
    key: "componentWillMount",

    /**
     * @method componentWillMount
     * @return {Void}
     */
    value: function componentWillMount() {
      if (this.context.attachActionToolbar) {
        this.context.attachActionToolbar(this);
      }
    }
    /**
     * @method componentWillUnmount
     * @return {Void}
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.context.detachActionToolbar) {
        this.context.detachActionToolbar(this);
      }
    }
    /**
     * @method actions
     * @return {Array}
     */

  }, {
    key: "actions",
    value: function actions() {
      var actions = [];

      for (var key in this.props.actions) {
        var action = this.props.actions[key];
        actions.push(this.buildAction(action, key));
      }

      return actions;
    }
    /**
     * @method handleOnClick
     * @return {Function}
     */

  }, {
    key: "isActive",

    /**
     * @method isActive
     * @return {Boolean}
     */
    value: function isActive() {
      return this.state.total > 0;
    }
    /**
     * @method mainClasses
     * @return {String}
     */

  }, {
    key: "mainClasses",
    value: function mainClasses() {
      return (0, _classnames.default)('carbon-action-toolbar', this.props.className);
    }
    /**
     * @method linkClasses
     * @return {String}
     */

  }, {
    key: "linkClasses",
    value: function linkClasses(className) {
      return (0, _classnames.default)('carbon-action-toolbar__action', className);
    }
    /**
     * @method buildAction
     * @return {Object} JSX
     */

  }, {
    key: "buildAction",
    value: function buildAction(action, index) {
      var onClick = action.onClick,
          className = action.className,
          text = action.text,
          props = _objectWithoutProperties(action, ["onClick", "className", "text"]);

      return _react.default.createElement(_link.default, _extends({
        className: this.linkClasses(className),
        "data-element": "action",
        disabled: !this.isActive(),
        key: index,
        onClick: this.handleOnClick(onClick, this.state.selected)
      }, props), text);
    }
  }, {
    key: "render",

    /**
     * @method render
     * @return {Object} JSX
     */
    value: function render() {
      return _react.default.createElement("div", _extends({
        className: this.mainClasses()
      }, (0, _tags.default)('action-toolbar', this.props)), _react.default.createElement("div", {
        className: "carbon-action-toolbar__total"
      }, _react.default.createElement("strong", {
        "data-element": "total"
      }, this.state.total), "\xA0", _i18nJs.default.t('action_toolbar.selected', {
        defaultValue: 'Selected'
      })), _react.default.createElement("div", {
        className: "carbon-action-toolbar__actions"
      }, this.actions(), this.props.children && this.props.children(this.propsForChildren())));
    }
  }]);

  return ActionToolbar;
}(_react.default.Component);

_defineProperty(ActionToolbar, "propTypes", {
  /**
   * The actions to display in the toolbar
   *
   * @property actions - each action is object with the action attributes
   * @type {Array}
   */
  actions: _propTypes.default.object.isRequired,

  /**
   * A custom class name for the component.
   *
   * @property className
   * @type {String}
   */
  className: _propTypes.default.string,

  /**
   * A function to return child components for the action toolbar.
   *
   * @property children
   * @type {Function}
   */
  children: _propTypes.default.func
});

_defineProperty(ActionToolbar, "contextTypes", {
  attachActionToolbar: _propTypes.default.func,
  // tracks the action toolbar component
  detachActionToolbar: _propTypes.default.func // tracks the action toolbar component

});

var _default = ActionToolbar;
exports.default = _default;