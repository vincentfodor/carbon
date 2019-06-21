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

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _i18nJs = _interopRequireDefault(require("i18n-js"));

var _icon = _interopRequireDefault(require("../icon"));

var _link = _interopRequireDefault(require("../link"));

var _events = _interopRequireDefault(require("../../utils/helpers/events"));

var _ether = require("../../utils/ether");

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

require("./pod.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
 * A Pod widget.
 *
 * This widget is a provides a wrapper in which to render other widgets.
 *
 * == How to use a Pod in a component:
 *
 * In your file:
 *
 *   import Pod from 'carbon-react/lib/components/pod';
 *
 * In the render the Pod:
 *
 *   <Pod />
 *
 * @class Pod
 * @constructor
 */
var Pod =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Pod, _React$Component);

  function Pod() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Pod);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Pod)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "toggleCollapse", function () {
      _this.setState(function (prevState) {
        return {
          collapsed: !prevState.collapsed
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "linkProps", function () {
      var props = {
        'data-element': 'edit'
      };

      if (typeof _this.props.onEdit === 'string') {
        props.to = _this.props.onEdit;
      } else if (_typeof(_this.props.onEdit) === 'object') {
        props = _this.props.onEdit;
      }

      return props;
    });

    _defineProperty(_assertThisInitialized(_this), "processPodEditEvent", function (ev) {
      if (_events.default.isEnterKey(ev) || !_events.default.isEventType(ev, 'keydown')) {
        ev.preventDefault();

        _this.props.onEdit(ev);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleHoverState", function (val) {
      _this.setState({
        hoverEdit: val
      });
    });

    return _this;
  }

  _createClass(Pod, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        collapsed: this.props.collapsed
      });
    }
    /**
     * A lifecycle called immediatly before new props cause a re-render
     * Resets the hover state if active
     *
     * @method componentWillReceiveProps
     */

  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps() {
      if (this.state.hoverEdit) {
        this.toggleHoverState(false);
      }
    }
    /**
     * Returns HTML and text for the pod header.
     * Includes:
     *    Title
     *    Collapsible arrow if collapsible
     *
     * @method podHeader
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
      var content,
          hoverOverEditEvents = {};

      var _validProps = (0, _ether.validProps)(this),
          props = Object.assign({}, _validProps);

      delete props.className;

      if (!this.state.collapsed) {
        content = this.podContent;
      }

      if (this.shouldContentHaveEditProps) {
        hoverOverEditEvents = this.hoverOverEditEvents;
        hoverOverEditEvents.tabIndex = '0';
      }

      return _react.default.createElement("div", _extends({
        className: this.mainClasses
      }, props, (0, _tags.default)('pod', this.props)), _react.default.createElement("div", _extends({
        className: this.blockClasses
      }, hoverOverEditEvents), _react.default.createElement("div", {
        className: this.contentClasses
      }, this.podHeader, content), this.footer), this.edit);
    }
  }, {
    key: "podHeader",
    get: function get() {
      if (!this.props.title) {
        return null;
      }

      var headerProps = {};
      var pod, subtitle;

      if (this.state.collapsed !== undefined) {
        pod = this.podCollapsible;
        headerProps.onClick = this.toggleCollapse;
      }

      headerProps.className = this.headerClasses;

      if (this.props.subtitle) {
        subtitle = _react.default.createElement("h5", {
          className: "carbon-pod__subtitle",
          "data-element": "subtitle"
        }, this.props.subtitle);
      }

      return _react.default.createElement("div", headerProps, _react.default.createElement("h4", {
        className: "carbon-pod__title",
        "data-element": "title"
      }, this.props.title), subtitle, pod);
    }
    /**
     * Returns HTML and text for the pod description.
     *
     * @method podDescription
     */

  }, {
    key: "podDescription",
    get: function get() {
      if (this.props.description) {
        return _react.default.createElement("div", {
          className: "carbon-pod__description"
        }, this.props.description);
      }

      return null;
    }
    /**
     * Returns the collapsible icon.
     *
     * @method podCollapsible
     */

  }, {
    key: "podCollapsible",
    get: function get() {
      var className = "carbon-pod__arrow carbon-pod__arrow--".concat(this.state.collapsed);
      return _react.default.createElement(_icon.default, {
        type: "dropdown",
        className: className
      });
    }
    /**
     * Returns the pod description and children.
     *
     * @method podContent
     */

  }, {
    key: "podContent",
    get: function get() {
      return _react.default.createElement("div", {
        className: "carbon-pod__collapsible-content"
      }, this.podDescription, _react.default.createElement("div", {
        className: "carbon-pod__content"
      }, this.props.children));
    }
    /**
     * Toggles the opening and closing of the pod
     *
     * @method toggleCollapse
     */

  }, {
    key: "mainClasses",
    get: function get() {
      return (0, _classnames.default)('carbon-pod', this.props.className, "carbon-pod--".concat(this.props.alignTitle), {
        'carbon-pod--editable': this.props.onEdit,
        'carbon-pod--is-hovered': this.state.hoverEdit,
        'carbon-pod--content-triggers-edit': this.shouldContentHaveEditProps,
        'carbon-pod--internal-edit-button': this.props.internalEditButton
      });
    }
    /**
     * Main Class getter
     *
     * @method blockClasses
     * @return {String} Main className
     */

  }, {
    key: "blockClasses",
    get: function get() {
      return (0, _classnames.default)('carbon-pod__block', "carbon-pod__block--padding-".concat(this.props.padding), "carbon-pod__block--".concat(this.props.as), {
        'carbon-pod__block--no-border': !this.props.border,
        'carbon-pod__block--full-width': this.props.editContentFullWidth,
        'carbon-pod__block--footer': this.props.footer
      });
    }
    /**
     * Header classes getter
     *
     * @method headerClasses
     * @return {String} header className
     */

  }, {
    key: "headerClasses",
    get: function get() {
      return (0, _classnames.default)('carbon-pod__header', "carbon-pod__header--".concat(this.props.alignTitle), _defineProperty({}, "carbon-pod__header--".concat(this.state.collapsed), this.state.collapsed !== undefined));
    }
    /**
     * Classes for the content.
     *
     * @method contentClasses
     * @return {String}
     */

  }, {
    key: "contentClasses",
    get: function get() {
      return (0, _classnames.default)('carbon-pod__content', "carbon-pod__content--".concat(this.props.as), "carbon-pod__content--padding-".concat(this.props.padding), {
        'carbon-pod__content--footer': this.props.footer,
        'carbon-pod--no-border': !this.props.border
      });
    }
    /**
     * Classes for the footer.
     *
     * @method footerClasses
     * @return {String}
     */

  }, {
    key: "footerClasses",
    get: function get() {
      return (0, _classnames.default)('carbon-pod__footer', "carbon-pod__footer--".concat(this.props.as), "carbon-pod__footer--padding-".concat(this.props.padding), {
        'carbon-pod--no-border': !this.props.border
      });
    }
    /**
     * Classes for the edit action.
     *
     * @method editActionClasses
     * @return {String}
     */

  }, {
    key: "editActionClasses",
    get: function get() {
      return (0, _classnames.default)('carbon-pod__edit-action', "carbon-pod__edit-action--".concat(this.props.as), "carbon-pod__edit-action--padding-".concat(this.props.padding), {
        'carbon-pod__edit-action--no-border': !this.props.border,
        'carbon-pod__display-on-hover': this.props.displayEditButtonOnHover
      });
    }
    /**
     * Returns the footer component.
     *
     * @method footer
     * @return {String}
     */

  }, {
    key: "footer",
    get: function get() {
      if (!this.props.footer) {
        return null;
      }

      return _react.default.createElement("div", {
        className: this.footerClasses,
        "data-element": "footer"
      }, this.props.footer);
    }
    /**
     * Returns the edit action if defined.
     *
     * @method edit
     * @return {Object} JSX
     */

  }, {
    key: "edit",
    get: function get() {
      if (!this.props.onEdit) {
        return null;
      }

      return _react.default.createElement("div", _extends({
        className: "carbon-pod__edit-button-container"
      }, this.hoverOverEditEvents), _react.default.createElement(_link.default, _extends({
        icon: "edit",
        className: this.editActionClasses
      }, this.linkProps()), _i18nJs.default.t('actions.edit', {
        defaultValue: 'Edit'
      })));
    }
    /**
     * Returns event related props for triggering and highlighting edit functionality
     *
     * @method linkProps
     * @return {Object} props
     */

  }, {
    key: "hoverOverEditEvents",

    /**
     * Returns event related props for triggering and highlighting edit functionality
     *
     * @method hoverOverEditEvents
     * @return {Object}
     */
    get: function get() {
      var props = {
        onMouseEnter: this.toggleHoverState.bind(this, true),
        onMouseLeave: this.toggleHoverState.bind(this, false),
        onFocus: this.toggleHoverState.bind(this, true),
        onBlur: this.toggleHoverState.bind(this, false)
      };

      if (typeof this.props.onEdit === 'function') {
        props.onClick = this.processPodEditEvent;
        props.onKeyDown = this.processPodEditEvent;
      }

      return props;
    }
    /**
     * Determines if the content pod should share the editProps
     *
     * @method shouldContentHaveEditProps
     * @return {Boolean}
     */

  }, {
    key: "shouldContentHaveEditProps",
    get: function get() {
      return (this.props.triggerEditOnContent || this.props.displayEditButtonOnHover) && this.props.onEdit;
    }
    /**
     * Processes the edit event only on certain event types
     *
     * @method processPodEditEvent
     * @param {Object} the event
     */

  }]);

  return Pod;
}(_react.default.Component);

_defineProperty(Pod, "propTypes", {
  /**
   * Enables/disables the border around the pod.
   *
   * @property border
   * @type {Boolean}
   * @default true
   */
  border: _propTypes.default.bool,

  /**
   * Children elements
   *
   * @property children
   * @type {Node}
   */
  children: _propTypes.default.node,

  /**
   * Custom className
   *
   * @property className
   * @type {String}
   */
  className: _propTypes.default.string,

  /**
   * Determines the padding around the pod.
   * Values: 'none', 'small', 'medium' or 'large'.
   *
   * @property padding
   * @type {String}
   * @default medium
   */
  padding: _propTypes.default.string,

  /**
   * Applies a theme to the Pod.
   * Value: primary, secondary, tile
   *
   * @property as
   * @type {String}
   * @default primary
   */
  as: _propTypes.default.string,

  /**
   * The collapsed state of the pod
   *
   * undefined - Pod is not collapsible
   * true - Pod is closed
   * false - Pod is open
   *
   * @property collapsed
   * @type {Boolean}
   */
  collapsed: _propTypes.default.bool,

  /**
   * Title for the pod h4 element
   * always shown
   *
   * @property title
   * @type {String}
   */
  title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),

  /**
   * Optional subtitle for the pod
   *
   * @property subtitle
   * @type {String}
   */
  subtitle: _propTypes.default.string,

  /**
   * Aligns the title to left, right or center
   *
   * @property alignTitle
   * @type {String}
   * @default left
   */
  alignTitle: _propTypes.default.string,

  /**
   * Description for the pod
   * Not shown if collapsed
   *
   * @property title
   * @type {String}
   */
  description: _propTypes.default.string,

  /**
   * A component to render as a Pod footer.
   *
   * @property footer
   * @type {String | Object}
   */
  footer: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),

  /**
   * Supplies an edit action to the pod.
   *
   * @property onEdit
   * @type {String|Function|Object}
   */
  onEdit: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * Determines if the editable pod content should be full width.
   *
   * @property editContentFullWidth
   * @type {Boolean}
   */
  editContentFullWidth: _propTypes.default.bool,

  /**
   * Determines if the edit button should be hidden until the user
   * hovers over the content.
   *
   * @property displayEditButtonOnHover
   * @type {Boolean}
   */
  displayEditButtonOnHover: _propTypes.default.bool,

  /**
   * Determines if clicking the pod content calls the onEdit action
   *
   * @property triggerEditOnContent
   * @type {Boolean}
   */
  triggerEditOnContent: _propTypes.default.bool,

  /**
   * Resets edit button styles to an older version
   *
   * @property internalEditButton
   * @type {Boolean}
   */
  internalEditButton: _propTypes.default.bool
});

_defineProperty(Pod, "defaultProps", {
  border: true,
  as: 'primary',
  padding: 'medium',
  alignTitle: 'left'
  /**
   * A lifecycle called immediatly before initial render
   * Sets the initial state of collasped
   *
   * @method componentWillMount
   */

});

var _default = Pod;
exports.default = _default;