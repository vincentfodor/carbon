"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

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

var _classnames = _interopRequireDefault(require("classnames"));

var _icon = _interopRequireDefault(require("../icon"));

var _modal = _interopRequireDefault(require("../modal"));

var _heading = _interopRequireDefault(require("../heading"));

var _appWrapper = _interopRequireDefault(require("../app-wrapper"));

var _fullScreenHeading = _interopRequireDefault(require("./full-screen-heading"));

var _browser = _interopRequireDefault(require("../../utils/helpers/browser"));

require("./dialog-full-screen.scss");

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

var DIALOG_OPEN_HTML_CLASS = 'carbon-dialog-full-screen--open';
/**
 * A DialogFullScreen widget.
 *
 * == How to use a DialogFullScreen in a component:
 *
 * In your file
 *
 *   import DialogFullScreen from 'carbon-react/lib/components/dialog-full-screen';
 *
 * To render a DialogFullScreen:
 *
 *   <DialogFullScreen onCancel={ customEventHandler } />
 *
 * The component rendering the DialogFullScreen must pass down a prop of 'open' in order to open the dialog.
 *
 * You need to provide a custom cancel event handler to handle a close event.
 *
 * @class DialogFullScreen
 * @constructor
 */

var DialogFullScreen =
/*#__PURE__*/
function (_Modal) {
  _inherits(DialogFullScreen, _Modal);

  function DialogFullScreen(props) {
    var _this;

    _classCallCheck(this, DialogFullScreen);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DialogFullScreen).call(this, props));
    /**
     * Caches a reference to the document.
     */

    _defineProperty(_assertThisInitialized(_this), "dialogTitle", function () {
      var title = _this.props.title;

      if (typeof title === 'string') {
        title = _react.default.createElement(_heading.default, {
          title: title,
          titleId: "carbon-dialog-title",
          subheader: _this.props.subtitle,
          subtitleId: "carbon-dialog-subtitle"
        });
      }

      return _react.default.createElement(_fullScreenHeading.default, null, _react.default.createElement(_icon.default, {
        className: "carbon-dialog-full-screen__close",
        "data-element": "close",
        onClick: _this.props.onCancel,
        type: "close"
      }), title);
    });

    _this.document = _browser.default.getDocument();
    return _this;
  }

  _createClass(DialogFullScreen, [{
    key: "componentTags",
    value: function componentTags(props) {
      return {
        'data-component': 'dialog-full-screen',
        'data-element': props['data-element'],
        'data-role': props['data-role']
      };
    }
    /**
     * Returns the computed HTML for the dialog.
     * @override
     *
     * @return {Object} JSX for dialog
     */

  }, {
    key: "dialogClasses",
    get: function get() {
      return 'carbon-dialog-full-screen__dialog';
    }
    /**
     * Returns main classes for the component combined with
     * Dialog main classes.
     *
     * @return {String} Main className
     */

  }, {
    key: "mainClasses",
    get: function get() {
      return (0, _classnames.default)(this.props.className, 'carbon-dialog-full-screen');
    }
  }, {
    key: "modalHTML",
    get: function get() {
      var _this2 = this;

      return _react.default.createElement("div", _extends({
        ref: function ref(d) {
          _this2._dialog = d;
        },
        className: this.dialogClasses
      }, this.componentTags(this.props)), this.dialogTitle(), _react.default.createElement("div", {
        className: "carbon-dialog-full-screen__content",
        "data-element": "content"
      }, _react.default.createElement(_appWrapper.default, null, this.props.children)));
    }
    /**
     * Overrides the original function to disable the document's scroll.
     */

  }, {
    key: "onOpening",
    get: function get() {
      return this.document.documentElement.classList.add(DIALOG_OPEN_HTML_CLASS);
    }
    /**
     * Overrides the original function to enable the document's scroll.
     */

  }, {
    key: "onClosing",
    get: function get() {
      return this.document.documentElement.classList.remove(DIALOG_OPEN_HTML_CLASS);
    }
    /**
     * Returns HTML and text for the dialog title.
     *
     * @method dialogTitle
     * @return {Object} title to display
     */

  }]);

  return DialogFullScreen;
}(_modal.default);

_defineProperty(DialogFullScreen, "defaultProps", {
  open: false,
  enableBackgroundUI: true
  /**
   * Returns classes for the dialog.
   *
   * @return {String} dialog className
   */

});

var _default = DialogFullScreen;
exports.default = _default;