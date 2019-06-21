"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.split");

require("core-js/modules/es.string.trim");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _i18nJs = _interopRequireDefault(require("i18n-js"));

var _classnames = _interopRequireDefault(require("classnames"));

var _CSSTransitionGroup = _interopRequireDefault(require("react-transition-group/CSSTransitionGroup"));

var _lodash = require("lodash");

var _shouldComponentUpdate2 = _interopRequireDefault(require("../../utils/helpers/should-component-update"));

var _portal = _interopRequireDefault(require("../portal"));

var _icon = _interopRequireDefault(require("../icon"));

var _alert = _interopRequireDefault(require("../alert"));

var _link = _interopRequireDefault(require("../link"));

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

require("./flash.scss");

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
 * A Flash widget.
 *
 * The flash is rendered in two sections: a ventral message 'flash', and a
 * dorsal coloured, expanding 'slider'.
 *
 * == How to use an Flash in a component:
 *
 * In your file
 *
 *   import Flash from 'carbon-react/lib/components/flash';
 *
 * To render a Flash, setup open and cancel handlers in your view to trigger
 * the message on and off:
 *
 *  <Flash open={ openStatus } onDismiss={ myOnDismiss } message='Alert!' />
 *
 * By default, the flash renders with a clickable close icon that hooks up with the onDismiss function.
 *
 * To instead have the flash disappear after a given time period, pass a prop of timeout in milliseconds.
 *
 *  <Flash open={ openStatus } onDismiss={ myOnDismiss } message='Alert!' timeout={ 2000 }/>
 *
 * The flash message can be formatted in the following ways:
 *
 *  * A string: "Alert"
 *  * An array: ["Message One", "Message Two"]
 *  * An object with description: { description: "My description" }
 *  * An object of key/value pairs: { first_name: "is required", last_name: "is required" }
 *  * An object with description with nested key/value pairs:
 *    { description: { first_name: "is required", last_name: "is required" } }
 *
 * If a message is too long, it can be proxied to a dialog by adding `::more::` in your description.
 *
 *  let message = "This is too long ::more:: This sentence is proxied to a dialog."
 *
 * @class Flash
 * @constructor
 */
var Flash =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Flash, _React$Component);

  function Flash(props) {
    var _this;

    _classCallCheck(this, Flash);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Flash).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "dialogs", []);

    _defineProperty(_assertThisInitialized(_this), "timeout", null);

    _defineProperty(_assertThisInitialized(_this), "startTimeout", function () {
      _this.stopTimeout();

      if (_this.shouldStartTimeout()) {
        _this.timeout = setTimeout(function () {
          _this.props.onDismiss();
        }, _this.props.timeout);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "shouldStartTimeout", function () {
      if (!_this.props.timeout || !_this.props.open) {
        return false;
      }

      var shouldStartTimeout = true;

      for (var key in _this.state.dialogs) {
        if (_this.state.dialogs[key]) {
          shouldStartTimeout = false;
        }
      }

      return shouldStartTimeout;
    });

    _defineProperty(_assertThisInitialized(_this), "stopTimeout", function () {
      clearTimeout(_this.timeout);
    });

    _defineProperty(_assertThisInitialized(_this), "toggleDialog", function (key) {
      return function (ev) {
        if (ev) {
          ev.preventDefault();
        }

        var state = _this.state.dialogs[key]; // open/close the dialog

        _this.setState({
          dialogs: _defineProperty({}, key, !state)
        }); // start/stop the timer if the dialog opens or closes


        if (state) {
          _this.startTimeout();
        } else {
          _this.stopTimeout();
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "formatDescription", function (description) {
      var object = (0, _lodash.isObject)(description),
          array = (0, _lodash.isArray)(description);
      _this.dialogs = [];

      if (array || object) {
        var items = []; // iterate through the object or array

        (0, _lodash.forEach)(description, function (value, key) {
          var itemValue; // pass the value through the find more parser

          var text = _this.findMore(value);

          if (!array && !/(^base|\.base)$/.test(key)) {
            // if object, apply key to each item
            itemValue = _react.default.createElement("span", null, key, ": ", text);
          } else {
            // otherwise just set value
            itemValue = text;
          } // add item to list


          items.push(_react.default.createElement("li", {
            key: key
          }, itemValue));
        });
        return _react.default.createElement("ul", null, items);
      } // if just a string, pass it through the find more parser


      return _this.findMore(description);
    });

    _defineProperty(_assertThisInitialized(_this), "findMore", function (text) {
      var value = text;

      if (typeof text !== 'string') {
        return value;
      } // detect any instances of "::more::" in the text


      var parts = text.split('::more::');

      if (parts.length > 1) {
        var title = parts[0].trim(),
            desc = parts[1].trim(),
            info = _i18nJs.default.t('notifications.more_info', {
          defaultValue: 'More Information'
        }); // create dialog for additional content


        _this.dialogs.push(_react.default.createElement(_alert.default, {
          "data-element": "info-dialog",
          key: title,
          title: title,
          open: _this.state.dialogs[title] || false,
          onCancel: _this.toggleDialog(title)
        }, desc)); // create text for item


        value = _react.default.createElement("span", null, title, "\xA0", _react.default.createElement(_link.default, {
          onClick: _this.toggleDialog(title),
          className: "carbon-flash__link",
          "data-element": "more-info"
        }, info));
      }

      return value;
    });

    _this.state = {
      /**
       * Keeps track of the open state of each dialog
       *
       * @property dialogs
       * @type {Object}
       */
      dialogs: {},

      /**
       * Keeps track of the open state of the Flash Component
       *
       * @property open
       * @type {Boolean}
       */
      open: _this.props.open || false
    };
    return _this;
  }
  /**
   * Resets the dialog open states if flash is opened/closed.
   *
   * @method componentWillReceiveProps
   * @return(Void)
   */


  _createClass(Flash, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.open === this.props.open) {
        return;
      }

      if (this.removePortalTimeout) {
        clearTimeout(this.removePortalTimeout);
        this.removePortalTimeout = null;
      }

      if (nextProps.open) {
        this.setState({
          dialogs: {},
          open: nextProps.open
        });
      } else {
        this.removePortalTimeout = setTimeout(function () {
          _this2.setState({
            open: false
          });
        }, 1000);
      }
    }
    /**
     * Determines if the component should be updated or not. Required for this component
     * as it determines if the timeout should be reset or not.
     *
     * @method shouldComponentUpdate
     * @return {Boolean}
     */

  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return (0, _shouldComponentUpdate2.default)(this, nextProps, nextState);
    }
    /**
     * Conditionally triggers close action after flash displayed.
     *
     * @method componentDidUpdate
     * @return(Void)
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      // reset dialogs to render
      this.dialogs = [];
      this.startTimeout();
    }
    /**
     * Keeps track of additional dialogs to render for "more info" links
     *
     * @property dialogs
     * @type {Array}
     */

  }, {
    key: "render",

    /**
     * @method render
     * @return {Object} JSX
     */
    value: function render() {
      var sliderHTML = this.props.open && this.sliderHTML;
      var flashHTML = this.props.open && this.flashHTML;
      return this.state.open && _react.default.createElement(_portal.default, null, _react.default.createElement("div", (0, _tags.default)('flash', this.props), _react.default.createElement("div", {
        className: this.classes
      }, _react.default.createElement(_CSSTransitionGroup.default, {
        component: "div",
        transitionAppear: true,
        transitionAppearTimeout: 500,
        transitionName: "carbon-flash__slider",
        transitionEnterTimeout: 600,
        transitionLeave: true,
        transitionLeaveTimeout: 600
      }, sliderHTML, _react.default.createElement(_CSSTransitionGroup.default, {
        component: "div",
        transitionName: "carbon-flash__content",
        transitionEnterTimeout: 200,
        transitionLeave: true,
        transitionLeaveTimeout: 600
      }, flashHTML))), this.dialogs));
    }
  }, {
    key: "iconType",

    /**
     * Returns the icon to display depending on type
     *
     * @method iconType
     * @return {String}
     */
    get: function get() {
      var icon;

      switch (this.props.as) {
        case 'success':
          icon = 'tick';
          break;

        default:
          icon = this.props.as;
          break;
      }

      return icon;
    }
    /**
     * Parses the message object to get the appropriate description
     *
     * @method description
     * @return {String}
     */

  }, {
    key: "description",
    get: function get() {
      var message = this.props.message;

      if ((0, _lodash.isObject)(message) && message.description) {
        // if defined, return description
        return message.description;
      } // otherwise, just return itself


      return message;
    }
    /**
     * Returns the computed HTML for the flash.
     *
     * @method flashHTML
     * @return {Object} JSX for flash
     */

  }, {
    key: "flashHTML",
    get: function get() {
      var contents = []; // add icon

      contents.push(_react.default.createElement(_icon.default, {
        className: "carbon-flash__icon",
        type: this.iconType,
        key: "icon"
      })); // add message content

      contents.push(_react.default.createElement("div", {
        className: "carbon-flash__message",
        key: "message",
        "data-element": "message"
      }, this.formatDescription(this.description))); // if auto-dismiss is not enabled, add a close icon

      if (!this.props.timeout) {
        contents.push(_react.default.createElement(_icon.default, {
          className: "carbon-flash__close",
          "data-element": "close",
          key: "close",
          onClick: this.props.onDismiss,
          type: "close"
        }));
      }

      return _react.default.createElement("div", {
        className: "carbon-flash__content"
      }, contents);
    }
    /**
     * Returns the computed HTML for the slider.
     *
     * @method flashHTML
     * @return {Object} JSX for flash
     */

  }, {
    key: "sliderHTML",
    get: function get() {
      return _react.default.createElement("div", {
        className: "carbon-flash__slider",
        key: "slider"
      });
    }
    /**
     * Returns the classes for the component.
     *
     * @method classes
     * @return {String}
     */

  }, {
    key: "classes",
    get: function get() {
      return (0, _classnames.default)('carbon-flash', this.props.className, "carbon-flash--".concat(this.props.as));
    }
  }]);

  return Flash;
}(_react.default.Component);

_defineProperty(Flash, "propTypes", {
  /**
   * Custom className
   *
   * @property className
   * @type {String}
   */
  className: _propTypes.default.string,

  /**
   * A custom close event handler
   *
   * @property onDismiss
   * @type {Function}
   */
  onDismiss: _propTypes.default.func.isRequired,

  /**
   * Sets the open state of the flash.
   *
   * @property open
   * @type {Boolean}
   * @default false
   */
  open: _propTypes.default.bool.isRequired,

  /**
   * Type of notification.
   * (see the 'iconColorSets' for possible values)
   *
   * @property as
   * @type {String}
   * @default 'success'
   */
  as: _propTypes.default.string,

  /**
   * Contents of message.
   *
   * @property message
   * @type {String|Object|Array}
   */
  message: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object, _propTypes.default.array]).isRequired,

  /**
   * Time for flash to remain on screen
   *
   * @property timeout
   * @type {Number} in milliseconds
   */
  timeout: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
});

_defineProperty(Flash, "defaultProps", {
  as: 'success',
  className: '',
  timeout: 0
});

var _default = Flash;
exports.default = _default;