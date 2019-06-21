"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.get");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TableRow", {
  enumerable: true,
  get: function get() {
    return _table.TableRow;
  }
});
Object.defineProperty(exports, "TableCell", {
  enumerable: true,
  get: function get() {
    return _table.TableCell;
  }
});
Object.defineProperty(exports, "TableHeader", {
  enumerable: true,
  get: function get() {
    return _table.TableHeader;
  }
});
Object.defineProperty(exports, "TableSubheader", {
  enumerable: true,
  get: function get() {
    return _table.TableSubheader;
  }
});
exports.TableAjax = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _superagent = _interopRequireDefault(require("superagent"));

var _serialize = _interopRequireDefault(require("../../utils/helpers/serialize"));

var _table = require("../table");

var _logger = _interopRequireDefault(require("../../utils/logger"));

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
 * A Table Ajax Widget
 *
 * == How to use a Table Ajax in a component
 *
 * In your file
 *
 *   import Table from 'carbon-react/lib/components/table-ajax';
 *   import { TableRow, TableCell, TableHeader } from 'carbon-react/lib/components/table';
 *
 * To render a Table please see the Table Component
 *
 * TableAjax requires a path to be provided
 *
 * <TableAjax
 *    path='./path'
 * >
 *
 */
var TableAjax =
/*#__PURE__*/
function (_Table) {
  _inherits(TableAjax, _Table);

  function TableAjax() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TableAjax);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TableAjax)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "timeout", null);

    _defineProperty(_assertThisInitialized(_this), "_request", null);

    _defineProperty(_assertThisInitialized(_this), "state", {
      /**
       * Pagination
       * Current Visible Page
       *
       * @property currentPage
       * @type {String}
       */
      currentPage: _this.props.currentPage || '1',

      /**
       * The current value of the data-state property
       *
       * @property dataState
       * @type {String}
       */
      dataState: 'idle',

      /**
       * Pagination
       * Page Size of grid (number of visible records)
       *
       * @property pageSize
       * @type {String}
       */
      pageSize: _this.defaultPageSize,

      /**
       * Pagination
       * Total number of records in the grid
       *
       * @property totalRecords
       * @type {String}
       */
      totalRecords: _this.props.totalRecords || '0',

      /**
       * Sorting
       * either 'asc' or 'desc' order
       *
       * @property sortOrder
       * @type {String}
       */
      sortOrder: _this.props.sortOrder || '',

      /**
       * Sorting
       * column name to sort
       *
       * @property sortedColumn
       * @type {String}
       */
      sortedColumn: _this.props.sortedColumn || ''
    });

    _defineProperty(_assertThisInitialized(_this), "getChildContext", function () {
      return {
        attachActionToolbar: _this.attachActionToolbar,
        detachActionToolbar: _this.detachActionToolbar,
        attachToTable: _this.attachToTable,
        detachFromTable: _this.detachFromTable,
        checkSelection: _this.checkSelection,
        onSort: _this.onSort,
        selectable: _this.props.selectable,
        highlightable: _this.props.highlightable,
        selectAll: _this.selectAll,
        selectRow: _this.selectRow,
        highlightRow: _this.highlightRow,
        sortedColumn: _this.sortedColumn,
        sortOrder: _this.sortOrder
      };
    });

    _defineProperty(_assertThisInitialized(_this), "emitOnChangeCallback", function (element, options) {
      var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 250;

      if (_this.selectAllComponent) {
        // reset the select all component
        _this.selectAllComponent.setState({
          selected: false
        });

        _this.selectAllComponent = null;
      }

      var resetHeight = Number(options.pageSize) < Number(_this.pageSize),
          currentPage = element === 'filter' ? '1' : options.currentPage;

      _this.setState({
        currentPage: currentPage,
        pageSize: options.pageSize,
        sortOrder: options.sortOrder,
        sortedColumn: options.sortedColumn
      });

      _this.stopTimeout();

      _this.timeout = setTimeout(function () {
        // track the request incase we need to abort it
        _this.setState({
          dataState: 'requested',
          ariaBusy: true
        });

        if (_this.props.postAction) {
          _this._request = _superagent.default.post(_this.props.path).set(_this.getHeaders()).send(_this.queryParams(element, options));
        } else {
          _this._request = _superagent.default.get(_this.props.path).set(_this.getHeaders()).query(_this.queryParams(element, options));
        }

        if (_this.props.withCredentials) _this._request.withCredentials();

        _this._request.end(function (err, response) {
          _this._hasRetreivedData = true;

          _this.handleResponse(err, response);

          if (resetHeight) {
            _this.resetTableHeight();
          }
        });
      }, timeout);
    });

    _defineProperty(_assertThisInitialized(_this), "stopTimeout", function () {
      if (_this.timeout) {
        clearTimeout(_this.timeout);
      }

      if (_this._request) {
        _this._request.abort();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleResponse", function (err, response) {
      if (!err) {
        var data = _this.props.formatResponse ? _this.props.formatResponse(response.body) : response.body;

        _this.props.onChange(data);

        _this.setState({
          totalRecords: String(data.records),
          dataState: 'loaded',
          ariaBusy: false
        });
      } else if (_this.props.onAjaxError) {
        _this.setComponentTagsErrored();

        _this.props.onAjaxError(err, response);
      } else {
        _this.setComponentTagsErrored();

        _logger.default.warn("".concat(err.status, " - ").concat(response));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "queryParams", function (element, options) {
      var query = options.filter || {};
      query.page = element === 'filter' ? '1' : options.currentPage;
      query.rows = options.pageSize;

      if (options.sortOrder) {
        query.sord = options.sortOrder;
      }

      if (options.sortedColumn) {
        query.sidx = options.sortedColumn;
      }

      if (_this.props.postAction) {
        return query;
      }

      if (_this.props.formatRequest) {
        return (0, _serialize.default)(_this.props.formatRequest(query));
      }

      return (0, _serialize.default)(query);
    });

    _defineProperty(_assertThisInitialized(_this), "getHeaders", function () {
      return _this.props.getCustomHeaders ? _this.props.getCustomHeaders() : {
        Accept: 'application/json'
      };
    });

    _defineProperty(_assertThisInitialized(_this), "emitOptions", function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props;
      return {
        currentPage: _this.state.currentPage,
        filter: props.filter ? props.filter.toJS() : {},
        pageSize: _this.state.pageSize,
        sortedColumn: _this.state.sortedColumn,
        sortOrder: _this.state.sortOrder
      };
    });

    _defineProperty(_assertThisInitialized(_this), "dataState", function () {
      return _this.state.dataState;
    });

    return _this;
  }

  _createClass(TableAjax, [{
    key: "componentDidMount",

    /**
     * Request initial data on mount
     * @override
     *
     * @method componentDidMount
     * @return {Void}
     */
    value: function componentDidMount() {
      _get(_getPrototypeOf(TableAjax.prototype), "componentDidMount", this).call(this);

      this.emitOnChangeCallback('data', this.emitOptions(), 0);
    }
    /**
     * Lifecycle for after a update has happened
     * Retrieve the data when page size chagnes
     * Resize the grid to fit new content
     *
     * @method componentDidUpdate
     * @param {Object} preProps The previos props passed down to the component
     * @param {Object} prevState The previous of the component
     * @return {Void}
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.pageSize !== prevState.pageSize) {
        this.emitOnChangeCallback('data', this.emitOptions());
      }

      this.resizeTable();
    }
    /**
     * Lifecycle before a mounted component receives new props
     * Set pageSize state if component pass a new pageSize props
     *
     * @method componentWillReceiveProps
     * @param {Object} nextProps The new props passed down to the component
     * @return {Void}
     */

  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      _get(_getPrototypeOf(TableAjax.prototype), "componentWillReceiveProps", this).call(this, nextProps);

      if (this.props.pageSize !== nextProps.pageSize) {
        this.setState({
          pageSize: nextProps.pageSize
        });
      }
    }
    /**
     * Lifecycle for when a component unmounts
     * Clears any deferred tasks
     *
     * @method componentWillUnmount
     * @return {Void}
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopTimeout();
    }
  }, {
    key: "setComponentTagsErrored",
    value: function setComponentTagsErrored() {
      this.setState({
        dataState: 'errored',
        ariaBusy: false
      });
    }
    /**
     * Formatted params for server request
     *
     * @method queryParams
     * @param {String} element changed element
     * @param {Object} options base and updated options
     * @return {Object} params for query
     */

  }, {
    key: "pageSize",

    /**
     * Get pageSize for table
     * @override
     *
     * @method pageSize
     * @return {String} table page size
     */
    get: function get() {
      return this.state.pageSize;
    }
    /**
     * Returns the currently sorted column.
     *
     * @method sortedColumn
     * @return {String}
     */

  }, {
    key: "sortedColumn",
    get: function get() {
      return this.state.sortedColumn;
    }
    /**
     * Returns the current sort order.
     *
     * @method sortOrder
     * @return {String}
     */

  }, {
    key: "sortOrder",
    get: function get() {
      return this.state.sortOrder;
    }
    /**
     * Emit onChange event row data
     * @override
     *
     * @method emitOnChangeCallback
     * @param {String} element changed element
     * @param {Object} options base and updated options
     * @return {Void}
     */

  }, {
    key: "pagerProps",

    /**
     * Props to pass to pager component
     * @override
     *
     * @method pagerProps
     * @return {Object} props
     */
    get: function get() {
      return {
        currentPage: this.state.currentPage,
        pageSize: this.state.pageSize,
        totalRecords: this.state.totalRecords,
        onPagination: this.onPagination,
        pageSizeSelectionOptions: this.props.pageSizeSelectionOptions,
        showPageSizeSelection: this.props.showPageSizeSelection
      };
    }
    /**
     * Returns the data-state string used in componentTags
     */

  }, {
    key: "dataComponent",

    /**
     * The name used for the data-component attribute
     */
    get: function get() {
      return 'table-ajax';
    }
  }]);

  return TableAjax;
}(_table.Table);

exports.TableAjax = TableAjax;

_defineProperty(TableAjax, "propTypes", {
  /**
   * Data used to filter the data
   *
   * @property filter
   * @type {Object}
   */
  filter: _propTypes.default.object,

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
   * A callback function used to format the Ajax
   * response into the format required by the table
   *
   * @property formatResponse
   * @type {Function}
   */
  formatResponse: _propTypes.default.func,

  /**
   * Setting to true turns on pagination for the table
   *
   * @property paginate
   * @type {Boolean}
   */
  paginate: _propTypes.default.bool,

  /**
   * Pagination
   * Page Size of grid (number of visible records)
   *
   * @property pageSize
   * @type {String}
   */
  pageSize: _propTypes.default.string,

  /**
   * Endpoint to fetch the data for table
   *
   * @property path
   * @type {String}
   */
  path: _propTypes.default.string.isRequired,

  /**
   * Callback function for XHR request errors
   *
   * @property onAjaxError
   * @type {Function}
   */
  onAjaxError: _propTypes.default.func,

  /**
   * A prop to allow the override of the default get request and perform a post.
   * @property postAction
   * @type {Boolean}
    */
  postAction: _propTypes.default.bool,

  /**
   * Enable the ability to send cookies from the origin.
   *
   * @property withCredentials
   * @type: {Boolean}
   */
  withCredentials: _propTypes.default.bool
});

_defineProperty(TableAjax, "defaultProps", {
  paginate: true
});

_defineProperty(TableAjax, "childContextTypes", {
  /**
   * Defines a context object for child components of the table-ajax component.
   * https://facebook.github.io/react/docs/context.html
   *
   * @property childContextTypes
   * @type {Object}
   */
  attachActionToolbar: _propTypes.default.func,
  // tracks the action toolbar component
  detachActionToolbar: _propTypes.default.func,
  // tracks the action toolbar component
  attachToTable: _propTypes.default.func,
  // attach the row to the table
  checkSelection: _propTypes.default.func,
  // a function to check if the row is currently selected
  detachFromTable: _propTypes.default.func,
  // detach the row from the table
  highlightable: _propTypes.default.bool,
  // table can enable all rows to be highlightable
  onSort: _propTypes.default.func,
  // a callback function for when a sort order is updated
  selectAll: _propTypes.default.func,
  // a callback function for when all visible rows are selected
  selectRow: _propTypes.default.func,
  // a callback function for when a row is selected
  highlightRow: _propTypes.default.func,
  // a callback function for when a row is highlighted
  selectable: _propTypes.default.bool,
  // table can enable all rows to be selectable
  sortOrder: _propTypes.default.string,
  // the current sort order applied
  sortedColumn: _propTypes.default.string // the currently sorted column

  /**
   * Returns table object to child components.
   *
   * @method getChildContext
   * @return {void}
   */

});