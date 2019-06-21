"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.replace");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = require("lodash");

var _input = _interopRequireDefault(require("../../utils/decorators/input"));

var _inputLabel = _interopRequireDefault(require("../../utils/decorators/input-label"));

var _inputValidation = _interopRequireDefault(require("../../utils/decorators/input-validation"));

var _events = _interopRequireDefault(require("../../utils/helpers/events"));

var _ether = require("../../utils/ether");

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

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

var GroupedCharacter = (0, _input.default)((0, _inputLabel.default)((0, _inputValidation.default)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GroupedCharacter, _React$Component);

  function GroupedCharacter() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, GroupedCharacter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GroupedCharacter)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "adjustForSeparator", function (leftPosition) {
      return _this.isBackspaceKey() ? leftPosition : _this.lastPosition + 1;
    });

    _defineProperty(_assertThisInitialized(_this), "calculateMaxLength", function () {
      return (0, _lodash.sum)(_this.props.groups) + (_this.props.groups.length - 1);
    });

    _defineProperty(_assertThisInitialized(_this), "deleteAfterSeparator", function (value) {
      var upToSeparator = _this.sliceUpToSeparator();

      return value.slice(0, upToSeparator) + value.slice(upToSeparator + 1);
    });

    _defineProperty(_assertThisInitialized(_this), "deletingBeforeSeparator", function () {
      return _this.isDeleteKey() && (0, _lodash.includes)(_this.insertionIndices, _this.lastPosition);
    });

    _defineProperty(_assertThisInitialized(_this), "enforceMaxLength", function (value) {
      return value.slice(0, _this.maxLength);
    });

    _defineProperty(_assertThisInitialized(_this), "insertionIndices", function () {
      var indices = [_this.props.groups[0]];

      for (var i = 1; i < _this.props.groups.length; i++) {
        indices.push(indices[i - 1] + _this.props.groups[i] + 1);
      }

      return indices;
    });

    _defineProperty(_assertThisInitialized(_this), "isValidKeypress", function (ev) {
      return !_events.default.isNumberKey(ev) && !_events.default.isAlphabetKey(ev) && !_events.default.isTabKey(ev) && !_events.default.isDeleteKey(ev) && !_events.default.isBackspaceKey(ev) && !_events.default.isNavigationKey(ev);
    });

    _defineProperty(_assertThisInitialized(_this), "removeSeparators", function (value) {
      return value.replace(/\W/g, '');
    });

    _defineProperty(_assertThisInitialized(_this), "separatorsNotNeeded", function (plainValue) {
      return plainValue.length < _this.insertionIndices[0];
    });

    _defineProperty(_assertThisInitialized(_this), "setVisibleValue", function (plainValue) {
      // return early if no separators needed yet
      if (_this.separatorsNotNeeded(plainValue)) {
        return plainValue;
      }

      var valueWithSeparators = (0, _ether.insertAt)(plainValue, {
        insertionIndices: _this.insertionIndices,
        separator: _this.props.separator
      }); // ensure extra characters removed e.g. if long value pasted in field

      return _this.enforceMaxLength(valueWithSeparators);
    });

    _this.state = {};
    _this.maxLength = _this.calculateMaxLength();
    _this.insertionIndices = _this.insertionIndices();
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.getCursorPosition = _this.getCursorPosition.bind(_assertThisInitialized(_this));
    _this.getNewPosition = _this.getNewPosition.bind(_assertThisInitialized(_this));
    _this.sliceUpToSeparator = _this.sliceUpToSeparator.bind(_assertThisInitialized(_this));
    _this.getPlainValue = _this.getPlainValue.bind(_assertThisInitialized(_this)); // value without separators

    _this.lastPosition = 0; // last position of cursor 1-indexed

    _this.keyPressed = {
      which: null
    }; // track key pressed outside of React synthetic event

    _this.state.value = _this.setVisibleValue(_this.props.value);
    return _this;
  }

  _createClass(GroupedCharacter, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var newPosition = this.getCursorPosition();

      this._input.setSelectionRange(newPosition, newPosition);
    }
  }, {
    key: "getCursorPosition",
    // Handle placement of cursor after updating value
    value: function getCursorPosition() {
      // Leave cursor in place if deleting
      if (this.isDeleteKey()) {
        return this.lastPosition;
      }

      return this.getNewPosition();
    }
  }, {
    key: "getNewPosition",
    value: function getNewPosition() {
      var leftPosition = this.lastPosition - 1; // adjust position for presence of separator

      if ((0, _lodash.includes)(this.insertionIndices, leftPosition)) {
        // move cursor 1 space left if backspacing character
        return this.adjustForSeparator(leftPosition);
      }

      return this.lastPosition;
    }
  }, {
    key: "getPlainValue",
    value: function getPlainValue(ev) {
      var plainValue = this.removeSeparators(ev.target.value); // Handle deleting to the left of a separator

      if (this.deletingBeforeSeparator()) {
        plainValue = this.deleteAfterSeparator(plainValue);
      }

      return plainValue;
    } // Get indices at which to insert separator

  }, {
    key: "isBackspaceKey",
    value: function isBackspaceKey() {
      return _events.default.isBackspaceKey(this.keyPressed);
    }
  }, {
    key: "isDeleteKey",
    value: function isDeleteKey() {
      return _events.default.isDeleteKey(this.keyPressed);
    }
  }, {
    key: "sliceUpToSeparator",
    // gets value up to separator for current group
    value: function sliceUpToSeparator() {
      var upToSeparator = 1;

      for (var i = 0; i < this.insertionIndices.length; i++) {
        if (this.lastPosition < this.insertionIndices[i + 1]) {
          upToSeparator = this.lastPosition - i;
          break;
        }
      }

      return upToSeparator;
    }
  }, {
    key: "onChange",
    value: function onChange(ev) {
      this.lastPosition = ev.target.selectionEnd;
      var plainValue = this.getPlainValue(ev),
          visibleValue = this.setVisibleValue(plainValue);
      this.setState({
        value: visibleValue
      });
      this._hidden.value = plainValue;

      this._handleOnChange({
        target: this._hidden
      });
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(ev) {
      // React performs event pooling so can't store event for later reuse easily.
      this.keyPressed = {
        which: ev.which
      };

      if (this.isValidKeypress(ev)) {
        ev.preventDefault();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", _extends({
        className: this.mainClasses
      }, (0, _tags.default)('grouped-character', this.props)), this.labelHTML, this.inputHTML, _react.default.createElement("input", this.hiddenInputProps), this.validationHTML, this.fieldHelpHTML);
    }
  }, {
    key: "inputProps",
    get: function get() {
      var _validProps = (0, _ether.validProps)(this),
          props = Object.assign({}, _validProps);

      props.className = this.inputClasses;
      props.onChange = this.onChange;
      props.maxLength = this.maxLength;
      props.onKeyDown = this.onKeyDown;
      props.style = {
        width: "".concat(this.props.inputWidth, "px")
      };
      props.value = this.state.value;
      return props;
    }
  }, {
    key: "hiddenInputProps",
    get: function get() {
      var _this2 = this;

      return {
        value: this.props.value,
        ref: function ref(c) {
          _this2._hidden = c;
        },
        type: 'hidden',
        readOnly: true,
        'data-element': 'hidden-input'
      };
    }
  }, {
    key: "mainClasses",
    get: function get() {
      return (0, _classnames.default)(this.props.className, 'carbon-grouped-character');
    }
  }, {
    key: "inputClasses",
    get: function get() {
      return 'carbon-grouped-character__input';
    }
  }]);

  return GroupedCharacter;
}(_react.default.Component), _defineProperty(_class, "propTypes", {
  /**
   * A custom class name for the component.
   *
   * @property className
   * @type {String}
   */
  className: _propTypes.default.string,
  groups: _propTypes.default.array.isRequired,
  // an array of  group sizes
  inputWidth: _propTypes.default.string,
  // pixel value that sets inputWidth
  separator: function separator(props, propName, componentName) {
    // a separator character to insert between number groups
    if (props[propName].length > 1 || typeof props[propName] !== 'string') {
      return new Error("Invalid prop ".concat(propName, " supplied to ").concat(componentName, ". Must be string of length 1."));
    }

    return null;
  },

  /**
   * The value of the Input
   *
   * @property value
   * @type {String}
   */
  value: _propTypes.default.string
}), _defineProperty(_class, "defaultProps", {
  separator: '-',
  value: ''
}), _temp))));
var _default = GroupedCharacter;
exports.default = _default;