"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.find");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.get");

require("core-js/modules/es.regexp.constructor");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.search");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

var _i18nJs = _interopRequireDefault(require("i18n-js"));

var _classnames = _interopRequireDefault(require("classnames"));

var _escapeStringRegexp = _interopRequireDefault(require("escape-string-regexp"));

var _dropdown = _interopRequireDefault(require("../dropdown"));

var _link = _interopRequireDefault(require("../link"));

require("./dropdown-filter.scss");

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
 * A dropdown filter widget.
 *
 * == How to use a dropdown in a component:
 *
 * In your file
 *
 *   import DropdownFilter from 'carbon-react/lib/components/dropdown-filter';
 *
 * To render a DropdownFilter:
 *
 *   <DropdownFilter name="foo" options={ foo } onChange={ myChangeHandler } />
 *
 * The developer should pass data to the store as JSON. e.g.
 *
 *   foo: [{ id: 1, name: "Foo" }, { id: 2, name: "Bar" }]
 *
 * You can also use the component in 'suggest' mode, which only shows the dropdown
 * once a filter term has been entered.
 *
 * You can also use the component in 'freetext' mode, which behaves like 'suggest',
 * but allows write-in text values in addition to list options. Specify an initial
 * write-in value with the `visibleValue` property, instead of the `value` property
 * for an option id. Set the `freetextName` property to add a second hidden input
 * for the write-in value, as opposed to the `name` property used for the option id.
 *
 * You can also define a function using the 'create' prop, this will allow you
 * to trigger events to create new items.
 *
 * @class DropdownFilter
 * @constructor
 */
var DropdownFilter =
/*#__PURE__*/
function (_Dropdown) {
  _inherits(DropdownFilter, _Dropdown);

  /**
   * Constructor
   *
   * @constructor
   * @param {Array} args - Arguments
   */
  function DropdownFilter() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownFilter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownFilter)).call.apply(_getPrototypeOf2, [this].concat(args)));
    /**
     * The user input search text.
     *
     * @property filter
     * @type {String}
     * @default null
     */

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function () {
      if (!_this.blockBlur) {
        var filter = null;

        if (_this.props.create || _this.props.freetext) {
          filter = _this.state.filter;
        }

        _this.setState({
          open: false,
          filter: filter
        });

        if (_this.props.freetext) {
          var opt;

          if (_this.state.filter) {
            opt = _this.props.options.find(function (option) {
              if (option.get('name')) {
                return option.get('name').toLowerCase() === _this.state.filter.toLowerCase();
              }

              return null;
            });
          }

          if (opt) {
            _this.selectValue(opt.get('id'), opt.get('name'));
          } else {
            _this.emitOnChangeCallback('', _this.state.filter);
          }
        }

        if (_this.props.onBlur) {
          _this.props.onBlur();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function () {
      if (!_this.writeable && !_this.blockFocus) {
        _this.setState({
          open: true
        });
      } else {
        _this.blockFocus = false;
      }

      _this._input.setSelectionRange(0, _this._input.value.length);
    });

    _defineProperty(_assertThisInitialized(_this), "handleCreate", function (ev) {
      _this.setState({
        open: false
      });

      _this.props.create(ev, _assertThisInitialized(_this));
    });

    _defineProperty(_assertThisInitialized(_this), "prepareList", function (options) {
      var filteredOptions;

      if ((_this.writeable || !_this.openingList) && typeof _this.state.filter === 'string') {
        var filter = _this.state.filter;
        var regex = new RegExp((0, _escapeStringRegexp.default)(filter), 'i'); // if user has entered a search filter

        filteredOptions = options.filter(function (option) {
          if (option.name && option.name.search(regex) > -1) {
            option.name = _this.highlightMatches(option.name, filter);
            return option;
          }

          return null;
        });
      }

      return filteredOptions || options;
    });

    _defineProperty(_assertThisInitialized(_this), "highlighted", function (options) {
      var highlighted = null;

      if (_this.state.highlighted) {
        highlighted = _this.state.highlighted;
      } else if (!_this.state.filter && _this.props.value) {
        highlighted = _this.props.value;
      } else if (_this.state.filter && options.length) {
        highlighted = options[0].id;
      }

      return highlighted;
    });

    _defineProperty(_assertThisInitialized(_this), "highlightMatches", function (optionText, value) {
      if (!value.length) {
        return optionText;
      }

      var parsedOptionText = optionText.toLowerCase();
      var valIndex = parsedOptionText.indexOf(value);

      if (valIndex === -1) {
        return optionText;
      }

      var beginning = optionText.substr(0, valIndex);
      var middle = optionText.substr(valIndex, value.length);
      var end = optionText.substr(valIndex + value.length, optionText.length); // find end of string recursively

      if (end.indexOf(value) !== -1) {
        end = _this.highlightMatches(end, value);
      } // build JSX object


      var newValue = [_react.default.createElement("span", {
        key: "beginning"
      }, beginning), _react.default.createElement("strong", {
        key: "middle"
      }, _react.default.createElement("u", null, middle)), _react.default.createElement("span", {
        key: "end"
      }, end)];
      return newValue;
    });

    _this.state.filter = _this.hasFreetextValue() ? _this.props.visibleValue : null;
    /**
     * Determines if list is being opened on current render.
     *
     * @property openingList
     * @type {Boolean}
     * @default false
     */

    _this.openingList = false; // bind scope to functions - allowing them to be overridden and
    // recalled with the use of super

    _this.handleVisibleChange = _this.handleVisibleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DropdownFilter, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.visibleValue !== this.props.visibleValue) {
        this.setState({
          filter: nextProps.visibleValue
        });
      }

      _get(_getPrototypeOf(DropdownFilter.prototype), "componentWillReceiveProps", this).call(this, nextProps);
    }
    /**
     * Lifecycle hook for when the component will update.
     *
     * @method componentWillUpdate
     * @param {Object} nextProps
     * @param {Object} nextState
     */

  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps, nextState) {
      // if list is being opened, set boolean
      if (this.state.open !== nextState.open) {
        this.openingList = true;
      }
    }
    /**
     * Selects the value for the component
     *
     * @method selectValue
     * @param {String} val
     */

  }, {
    key: "selectValue",
    value: function selectValue(val, visibleVal) {
      var filter = this.props.freetext ? visibleVal : null;

      _get(_getPrototypeOf(DropdownFilter.prototype), "selectValue", this).call(this, val, visibleVal);

      this.setState({
        filter: filter
      });
    }
    /*
     * Handles changes to the visible input field. Updates filter and displayed value.
     *
     * @method handleVisibleChange
     * @param {Object} ev event
     */

  }, {
    key: "handleVisibleChange",
    value: function handleVisibleChange(ev) {
      var state = {
        filter: ev.target.value,
        highlighted: null
      };

      if (this.writeable && ev.target.value.length <= 0) {
        state.open = false;
      } else {
        state.open = true;
      }

      this.setState(state);
      this.openingList = false;

      if (this.props.create) {
        // if create is enabled then empty the selected value so the filter persists
        this.emitOnChangeCallback('', ev.target.value);
      }
    }
    /*
     * Handles what happens on blur of the input.
     *
     * @method handleBlur
     */

  }, {
    key: "results",

    /**
     * Function that returns search results. Builds each list item with relevant handlers and classes.
     *
     * @method results
     */
    value: function results(options) {
      var items = _get(_getPrototypeOf(DropdownFilter.prototype), "results", this).call(this, options);

      if (!items.length) {
        items = _react.default.createElement("li", {
          className: "carbon-dropdown__list-item carbon-dropdown__list-item--no-results"
        }, _i18nJs.default.t('dropdownlist.no_results', {
          defaultValue: 'No results match "%{term}"',
          term: this.state.filter || ''
        }));
      }

      return items;
    }
    /**
     * Return the list item which should be highlighted by default.
     *
     * @method highlighted
     */

  }, {
    key: "showArrow",

    /**
     * Overrides Dropdown method to conditionally show arrow
     *
     * @method showArrow
     * @return {Boolean}
     */
    value: function showArrow() {
      return !this.writeable;
    }
    /**
     * Returns the list options in the correct format
     *
     * @method options
     */

  }, {
    key: "hasFreetextValue",

    /**
     * Returns whether properties indicate a freetext write-in value
     *
     * @method hasFreetextValue
     * @return {Boolean}
     */
    value: function hasFreetextValue() {
      return this.props.freetext && this.props.visibleValue && !this.props.value;
    }
  }, {
    key: "componentTags",
    value: function componentTags(props) {
      return {
        'data-component': 'dropdown-filter',
        'data-element': props['data-element'],
        'data-role': props['data-role']
      };
    }
  }, {
    key: "listHTML",

    /**
     * Getter to return HTML for list to render method.
     *
     * @method listHTML
     */
    get: function get() {
      var original = _get(_getPrototypeOf(DropdownFilter.prototype), "listHTML", this),
          html = [original];

      if (this.state.open && this.props.create) {
        var createText = _i18nJs.default.t('dropdown_filter.create_text', {
          defaultValue: 'Create'
        });

        if (this.props.createText) {
          createText = this.props.createText;
        } else if (this.state.filter) {
          createText += " \"".concat(this.state.filter, "\"");
        } else {
          createText += _i18nJs.default.t('dropdown_filter.new_text', {
            defaultValue: ' New'
          });
        }

        html.push(_react.default.createElement(_link.default, {
          icon: this.props.createIconType || 'add',
          iconAlign: "left",
          className: "carbon-dropdown__action",
          "data-element": "create",
          key: "dropdown-action",
          onClick: this.handleCreate
        }, createText));
      }

      return html;
    }
  }, {
    key: "options",
    get: function get() {
      return this.prepareList(this.props.options.toJS());
    }
    /**
     * Uses the mainClasses method provided by the decorator to add additional classes.
     *
     * @method mainClasses
     */

  }, {
    key: "mainClasses",
    get: function get() {
      return (0, _classnames.default)(_get(_getPrototypeOf(DropdownFilter.prototype), "mainClasses", this), 'carbon-dropdown-filter', {
        'carbon-dropdown-filter--writeable': this.writeable
      });
    }
    /**
     * Uses the inputClasses method provided by the decorator to add additional classes.
     *
     * @method inputClasses
     */

  }, {
    key: "inputClasses",
    get: function get() {
      var filtered = !this.props.create && !this.props.freetext && typeof this.state.filter === 'string';
      return (0, _classnames.default)(_get(_getPrototypeOf(DropdownFilter.prototype), "inputClasses", this), {
        'carbon-dropdown__input--filtered': filtered
      });
    }
    /**
     * Input props for the dropdown, extended from the base dropdown component.
     *
     * @method inputProps
     */

  }, {
    key: "inputProps",
    get: function get() {
      var props = _get(_getPrototypeOf(DropdownFilter.prototype), "inputProps", this);

      var value = props.value;

      if (typeof this.state.filter === 'string') {
        // if filter has a value, use that instead
        value = this.state.filter;
      }

      props.readOnly = this.props.readOnly || false;
      props.onChange = this.handleVisibleChange;
      props.value = value;
      return props;
    }
    /**
     * Input props for freetext hidden input.
     *
     * @method alternateHiddenInputProps
     * @return {Object}
     */

  }, {
    key: "alternateHiddenInputProps",
    get: function get() {
      var props = {
        ref: 'altHidden',
        type: 'hidden',
        readOnly: true,
        name: this.props.freetextName,
        value: this.props.visibleValue
      };
      return props;
    }
    /**
     * Getter to return HTML for alternate hidden input to render method.
     *
     * @method alternateHiddenHTML
     * @return {Object} JSX
     */

  }, {
    key: "alternateHiddenHTML",
    get: function get() {
      if (!this.props.freetext || !this.props.freetextName) {
        return null;
      }

      return _react.default.createElement("input", this.alternateHiddenInputProps);
    }
    /**
     * Find and highlights search terms in text
     *
     * @method highlightMatches
     * @param {String} optionText - the text to search
     * @param {String} value - the search term
     */

  }, {
    key: "writeable",

    /**
     * Returns whether input is writeable (for suggest or freetext modes)
     *
     * @method  writeable
     * @return  {Boolean}
     */
    get: function get() {
      return this.props.suggest || this.props.freetext;
    }
  }]);

  return DropdownFilter;
}(_dropdown.default);

_defineProperty(DropdownFilter, "propTypes", (0, _lodash.assign)({}, _dropdown.default.propTypes, {
  /**
   * The ID value for the component
   *
   * @property value
   * @type {String}
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * The visible value for the component
   * Provides a visible value in `freetext` mode when no option is selected.
   *
   * @property visibleValue
   * @type {String}
   */
  visibleValue: _propTypes.default.string,

  /**
   * The options to be displayed in the dropdown. Should be set in the store and passed from the parent component.
   *
   * @property options
   * @type {object}
   */
  options: _propTypes.default.object.isRequired,

  /**
   * Enables create functionality for dropdown.
   *
   * @property create
   * @type {Function}
   */
  create: _propTypes.default.func,

  /**
   * Customizes text for the create functionality of the dropdown.
   *
   * @property createText
   * @type {String}
   */
  createText: _propTypes.default.string,

  /**
   * Customizes the Carbon Icon type for the create functionality of the dropdown.
   *
   * @property createIconType
   * @type {String}
   */
  createIconType: _propTypes.default.string,

  /**
   * Should the dropdown act and look like a suggestable input instead.
   *
   * @property suggest
   * @type {Boolean}
   */
  suggest: _propTypes.default.bool,

  /**
   * Should the dropdown accept free text as well as suggested options?
   *
   * @property freetext
   * @type {Boolean}
   */
  freetext: _propTypes.default.bool,

  /**
   * Name for freetext value hidden input containing visibleValue in freetext mode
   *
   * @property freetextName
   * @type {String}
   */
  freetextName: _propTypes.default.string
}));

var _default = DropdownFilter;
exports.default = _default;