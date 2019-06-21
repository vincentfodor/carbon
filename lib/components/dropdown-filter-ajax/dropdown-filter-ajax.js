"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.iterator");

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

var _superagent = _interopRequireDefault(require("superagent"));

var _lodash = require("lodash");

var _dropdownFilter = _interopRequireDefault(require("../dropdown-filter"));

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
 * A dropdown filter widget using ajax.
 *
 * == How to use a dropdown in a component:
 *
 * In your file
 *
 *   import DropdownFilterAjax from 'carbon-react/lib/components/dropdown-filter-ajax';
 *
 * To render a DropdownFilterAjax:
 *
 *   <DropdownFilter name="foo" path="/foo" onChange={ myChangeHandler } />
 *
 * You can also use the component in 'suggest' mode, which only shows the dropdown
 * once a filter term has been entered.
 *
 * You can also define a function using the 'create' prop, this will allow you
 * to trigger events to create new items.
 *
 * You can also define the number of rows returned by the ajax request using
 * the property rowsPerRequest.
 *
 * @class DropdownFilterAjax
 * @constructor
 */
var DropdownFilterAjax =
/*#__PURE__*/
function (_DropdownFilter) {
  _inherits(DropdownFilterAjax, _DropdownFilter);

  function DropdownFilterAjax() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownFilterAjax);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownFilterAjax)).call.apply(_getPrototypeOf2, [this].concat(args)));
    /**
     * A collection of results for the list.
     *
     * @property options
     * @type {Array}
     */

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function () {
      if (!_this.blockBlur) {
        // close list and reset filter
        _this.setState(function (prevState) {
          return {
            open: false,
            filter: _this.props.create ? prevState.filter : null
          };
        });

        if (_this.dataFetchTimeout) {
          clearTimeout(_this.dataFetchTimeout);
        }

        if (_this.pendingRequest !== null) {
          _this.pendingRequest.abort();
        }

        if (_this.props.onBlur) {
          _this.props.onBlur();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function () {
      if (!_this.props.suggest && !_this.blockFocus) {
        _this.getData('', 1);
      } else {
        _this.blockFocus = false;
      }

      _this._input.setSelectionRange(0, _this._input.value.length);
    });

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function () {
      if (_this.listeningToScroll) {
        if (_this.state.page < _this.state.pages) {
          var _assertThisInitialize = _assertThisInitialized(_this),
              list = _assertThisInitialize.list;

          var scrollTriggerPosition = list.scrollHeight - list.offsetHeight - 25;

          if (list.scrollTop > scrollTriggerPosition) {
            _this.listeningToScroll = false;

            _this.getData(_this.state.visibleValue, _this.state.page + 1);
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getData", function () {
      var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      _this.setState({
        requesting: true
      });

      if (_this.pendingRequest) _this.pendingRequest.abort();
      _this.pendingRequest = _superagent.default.get(_this.props.path).query(_this.getParams(query, page)).query(_this.props.additionalRequestParams).set(_this.getHeaders());
      if (_this.props.withCredentials) _this.pendingRequest.withCredentials();

      _this.pendingRequest.end(_this.ajaxUpdateList);
    });

    _defineProperty(_assertThisInitialized(_this), "getParams", function (query, page) {
      var params = {};
      params.page = page;
      params.rows = _this.props.rowsPerRequest;
      params.value = query;

      if (_this.props.formatRequest) {
        return _this.props.formatRequest(params);
      }

      return params;
    });

    _defineProperty(_assertThisInitialized(_this), "getHeaders", function () {
      return _this.props.getCustomHeaders ? _this.props.getCustomHeaders() : {
        Accept: _this.props.acceptHeader
      };
    });

    _defineProperty(_assertThisInitialized(_this), "ajaxUpdateList", function (err, response) {
      _this.updateList(_this.props.formatResponse ? _this.props.formatResponse(response.body) : response.body.data[0]);

      _this.setState({
        requesting: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "resetScroll", function () {
      _this.listeningToScroll = false;

      if (_this.state.open && _this.list) {
        _this.list.scrollTop = 0;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateList", function (data) {
      // Default page size is 25 records
      var pages = Math.ceil(data.records / _this.props.rowsPerRequest);
      var records = data.items; // Adds next set of records as page scrolled down

      if (data.page > 1) {
        records = _this.state.options.concat(records);
      } else {
        _this.resetScroll();
      }

      _this.setState({
        open: true,
        options: records,
        page: data.page,
        pages: pages
      });

      _this.listeningToScroll = true;
    });

    _defineProperty(_assertThisInitialized(_this), "requestingState", function () {
      return _this.state.requesting ? 'requesting-list' : 'idle';
    });

    _this.state.options = [];
    /**
     * The current page number for the results.
     *
     * @property page
     * @type {Number}
     * @default 1
     */

    _this.state.page = 1;
    /**
     * The total number of pages of results.
     *
     * @property pages
     * @type {Number}
     * @default 0
     */

    _this.state.pages = 0;
    /**
     * Tracks whether the scroll listener is active on the list, useful for
     * paginated results.
     *
     * @property listeningToScroll
     * @type {Boolean}
     * @default true
     */

    _this.listeningToScroll = true;
    /**
     * Tracks the ajax request.
     *
     * @property pendingRequest
     * @default null
     */

    _this.pendingRequest = null;
    return _this;
  }

  _createClass(DropdownFilterAjax, [{
    key: "handleVisibleChange",
    value: function handleVisibleChange(ev) {
      var _this2 = this;

      _get(_getPrototypeOf(DropdownFilterAjax.prototype), "handleVisibleChange", this).call(this, ev);

      if (this.dataFetchTimeout) {
        clearTimeout(this.dataFetchTimeout);
      }

      var query = ev.target.value;
      this.dataFetchTimeout = setTimeout(function () {
        return _this2.getData(query, 1);
      }, this.props.dataRequestTimeout);
    }
    /*
     * Handles what happens on blur of the input.
     *
     * @method handleBlur
     */

  }, {
    key: "componentTags",
    value: function componentTags(props) {
      return {
        'data-component': 'dropdown-filter-ajax',
        'data-element': props['data-element'],
        'data-role': props['data-role']
      };
    }
  }, {
    key: "listProps",

    /**
     * Properties to be assigned to the list.
     *
     * @method listProps
     */
    get: function get() {
      var props = _get(_getPrototypeOf(DropdownFilterAjax.prototype), "listProps", this);

      props.onScroll = this.handleScroll;
      return props;
    }
    /**
     * Returns the list options in the correct format
     *
     * @method options
     */

  }, {
    key: "options",
    get: function get() {
      return this.prepareList((0, _lodash.cloneDeep)(this.state.options));
    }
    /**
     * Converts requesting state into a string for the automation property data-state
     */

  }, {
    key: "inputProps",

    /**
     * Input props for the dropdown, extended from the base dropdown component.
     *
     * @method inputProps
     */
    get: function get() {
      var props = _get(_getPrototypeOf(DropdownFilterAjax.prototype), "inputProps", this);

      if (typeof this.state.filter !== 'string') {
        props.value = this.props.visibleValue;
      } else {
        props.value = this.state.filter;
      }

      return props;
    }
  }]);

  return DropdownFilterAjax;
}(_dropdownFilter.default);

_defineProperty(DropdownFilterAjax, "propTypes", (0, _lodash.omit)((0, _lodash.assign)({}, _dropdownFilter.default.propTypes, {
  /**
   * The ID value for the component
   *
   * @property value
   * @type {Number}
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * The visible value for the input
   *
   * @property visibleValue
   * @type {String}
   */
  visibleValue: _propTypes.default.string,

  /**
   * custom http header for the request
   *
   * @property acceptHeader
   * @type {String}
   */
  acceptHeader: _propTypes.default.string,

  /**
   * The path to your data (e.g. "/core_accounting/ledger_accounts/suggestions")
   *
   * @property path
   * @type {String}
   */
  path: _propTypes.default.string.isRequired,

  /**
   * Additional parameters for the request (e.g. {foo: 'bar' })
   *
   * @property additionalRequestParams
   * @type {Object}
   */
  additionalRequestParams: _propTypes.default.object,

  /**
   * The number of rows to get per request
   *
   * @property rowsPerRequest
   * @type {Number}
   * @default 25
   */
  rowsPerRequest: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Enables create functionality for dropdown.
   *
   * @property create
   * @type {Function}
   */
  create: _propTypes.default.func,

  /**
   * A callback function used to format the Ajax
   * response into the format required by the table
   *
   * Expected return object format
   * {
      records - number of items returned
      items - array of items in a format { id: ..., name: ... }
      page - current page number
     }
   *
   * @property formatResponse
   * @type {Function}
   */
  formatResponse: _propTypes.default.func,

  /**
   * A callback function used to format the Ajax
   * request into the format required endpoint
   *
   * @property formatRequest
   * @type {Function}
   */
  formatRequest: _propTypes.default.func,

  /**
   * A callback function used to set the Ajax
   * headers using custom ones provided by the consumer
   *
   * Expected return object format
   * {
      'Accept': 'application/json',
      'jwt': 'secret',
      ...
     }
   *
   * @property getCustomHeaders
   * @type {Function}
   */
  getCustomHeaders: _propTypes.default.func,

  /**
   * Should the dropdown act and look like a suggestable input instead.
   *
   * @property suggest
   * @type {Boolean}
   */
  suggest: _propTypes.default.bool,

  /**
   * Integer to determine timeout for defered callback for data request. Default: 500
   *
   * @property
   * @type {Number}
   */
  dataRequestTimeout: _propTypes.default.number,

  /**
   * Enable the ability to send cookies from the origin.
   *
   * @property withCredentials
   * @type: {Boolean}
   */
  withCredentials: _propTypes.default.bool
}), 'options'));

_defineProperty(DropdownFilterAjax, "defaultProps", {
  rowsPerRequest: 25,
  acceptHeader: 'application/json',
  visibleValue: '',
  dataRequestTimeout: 500
  /*
   * Handles changes to the visible input field. Updates filter and displayed value.
   *
   * @method handleVisibleChange
   * @param {Object} ev event
   */

});

var _default = DropdownFilterAjax;
exports.default = _default;