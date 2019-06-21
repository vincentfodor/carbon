"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.fill");

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

var _icon = _interopRequireDefault(require("../icon/icon"));

var _ether = require("../../utils/ether");

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

require("./pill.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* A Pill widget.
*
* == How to use a Pill in a component:
*
* In your file:
*
*   import Pill from 'carbon-react/lib/components/pill'
*
* To render the Pill:
*
*   <Pill as='warning'>My warning text</Pill>
*
* Additionally you can pass optional props to the Pill component
*
*   as: Customizes the appearence of the pill changing the colour.
*       (see the 'iconColorSets' for possible values).
*/
var Pill =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Pill, _React$Component);

  function Pill() {
    _classCallCheck(this, Pill);

    return _possibleConstructorReturn(this, _getPrototypeOf(Pill).apply(this, arguments));
  }

  _createClass(Pill, [{
    key: "mainClasses",
    value: function mainClasses() {
      return (0, _classnames.default)('carbon-pill', this.props.className, "carbon-pill--".concat(this.props.as).concat(this.props.fill ? '--fill' : '--empty'), {
        'carbon-pill--link': this.props.onClick,
        'carbon-pill--is-deletable': this.props.onDelete
      });
    }
  }, {
    key: "renderCloseIcon",
    value: function renderCloseIcon() {
      if (!this.props.onDelete) return null;
      return _react.default.createElement("button", {
        className: "carbon-pill__delete-icon",
        type: "button",
        onClick: this.props.onDelete,
        "data-element": "close"
      }, _react.default.createElement(_icon.default, {
        type: "cross",
        bgSize: "small"
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("span", _extends({}, (0, _ether.validProps)(this), {
        className: this.mainClasses()
      }, (0, _tags.default)('pill', this.props)), this.props.children, this.renderCloseIcon());
    }
  }]);

  return Pill;
}(_react.default.Component);

_defineProperty(Pill, "propTypes", {
  as: _propTypes.default.string,
  // this is used to apply supported themes (eg. warning, error, etc)
  children: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  fill: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  onDelete: _propTypes.default.func
});

_defineProperty(Pill, "defaultProps", {
  as: 'default',
  className: '',
  fill: false,
  onClick: null,
  onDelete: null
});

_defineProperty(Pill, "safeProps", ['onClick']);

var _default = Pill;
exports.default = _default;