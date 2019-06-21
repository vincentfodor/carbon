"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.search");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("regenerator-runtime/runtime");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _axios = _interopRequireDefault(require("axios"));

var _select = _interopRequireDefault(require("../select/select.component"));

var _option = _interopRequireDefault(require("../select/option.component"));

var _responseError = _interopRequireDefault(require("./response-error.message"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
 * SelectAsync renders a regular Select, but wraps it in additional functionality
 * to allow it to fetch it's options from an API endpoint.
 *
 * # The Request
 *
 * By default the component will execute a request with the following options:
 *
 *   {
 *     params: {
 *       page: 1
 *       items_per_page: 20,
 *       search: 'any filter text'
 *     }
 *   }
 *
 * This can be customised using the formatRequest prop, for example to enable withCredentials:
 *
 *   <SelectAsync formatRequest={ opts => ({ ...opts, withCredentials: true }) } />
 *
 * The opts object is used with axios, please see this URL for more options:
 * https://github.com/axios/axios#request-config
 *
 * # The Response
 *
 * By default the response is expected in the following format:
 *
 *   {
 *     $items: [Array] - required, the items to render
 *     $page: [Integer] - optional, for paginated responses
 *     $total: [Integer] - optional, for paginated responses
 *   }
 *
 * If your response does not match this format you can modify it using the formatResponse prop:
 *
 *   <SelectAsync formatResponse={ response => ({ ...response, data: { $items: response.myItems } }) } />
 *
 * This follows the axios response schema: https://github.com/axios/axios#response-schema
 *
 * # Rendering Options
 *
 * By default options will be rendered under the assumption they have the following format:
 *
 *   {
 *     id [Integer] - the unique identifier
 *     displayed_as [String] - the human readable value
 *   }
 *
 * If your items do not match this format, or you want to have custom control over how they
 * are rendered, you can provide a function as a child:
 *
 *   <SelectAsync>
 *     {
 *       items => items.map(item => <Option>{ item.text }</Option>)
 *     }
 *   </SelectAsync>
 */
var SelectAsync =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SelectAsync, _React$Component);

  function SelectAsync() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SelectAsync);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SelectAsync)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      fetching: false,
      items: [],
      page: 0,
      total: 0
    });

    _defineProperty(_assertThisInitialized(_this), "select", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "deferredFetch", undefined);

    _defineProperty(_assertThisInitialized(_this), "onOpen", function () {
      return _this.fetchData({
        page: 1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "deferredFetchData", function (search) {
      clearTimeout(_this.deferredFetch);
      _this.deferredFetch = setTimeout(function () {
        _this.fetchData({
          page: 1,
          search: search
        });
      }, 200);
    });

    _defineProperty(_assertThisInitialized(_this), "fetchData",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(_ref) {
        var page, _ref$search, search, response;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                page = _ref.page, _ref$search = _ref.search, search = _ref$search === void 0 ? _this.filterValue() : _ref$search;

                _this.setState({
                  fetching: true
                });

                _context.next = 4;
                return _axios.default.get(_this.props.endpoint, _this.fetchOptions(page, search));

              case 4:
                response = _context.sent;

                _this.handleResponse(response);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "fetchNextPage", function () {
      var _this$state = _this.state,
          fetching = _this$state.fetching,
          items = _this$state.items,
          total = _this$state.total,
          page = _this$state.page;
      if (fetching) return;
      if (items.length === total) return;

      _this.fetchData({
        page: page + 1
      });
    });

    return _this;
  }

  _createClass(SelectAsync, [{
    key: "filterValue",
    value: function filterValue() {
      return this.select.current.state.filter;
    }
  }, {
    key: "fetchOptions",
    value: function fetchOptions(page, search) {
      var _this$props = this.props,
          itemsPerPage = _this$props.itemsPerPage,
          formatRequest = _this$props.formatRequest;
      var opts = {
        params: {
          page: page,
          items_per_page: itemsPerPage,
          search: search
        },
        headers: {
          Accept: 'application/json'
        }
      };
      if (formatRequest) opts = formatRequest(opts);
      return opts;
    }
  }, {
    key: "handleResponse",
    value: function handleResponse(originalResponse) {
      var formatResponse = this.props.formatResponse;
      var response = formatResponse ? formatResponse(originalResponse) : originalResponse;
      var data = response.data;

      if (!Object.prototype.hasOwnProperty.call(data, '$items')) {
        throw Error(_responseError.default);
      }

      this.setState({
        items: this.buildOptions(data.$page, data.$items),
        page: data.$page || 1,
        total: data.$total || data.$items.length,
        fetching: false
      });
    }
  }, {
    key: "buildOptions",
    value: function buildOptions(page, items) {
      return page > 1 ? this.state.items.concat(items) : items;
    }
  }, {
    key: "renderOptions",
    value: function renderOptions() {
      var items = this.state.items;
      if (this.props.children) return this.props.children(items);
      if (!items.length) return null;
      return items.map(function (item) {
        return _react.default.createElement(_option.default, {
          key: item.id,
          value: String(item.id),
          text: item.displayed_as
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_select.default, _extends({}, this.props, {
        ref: this.select,
        onOpen: this.onOpen,
        onFilter: this.deferredFetchData,
        onLazyLoad: this.fetchNextPage
      }), this.renderOptions());
    }
  }]);

  return SelectAsync;
}(_react.default.Component);

_defineProperty(SelectAsync, "propTypes", {
  children: _propTypes.default.func,
  endpoint: _propTypes.default.string.isRequired,
  formatRequest: _propTypes.default.func,
  formatResponse: _propTypes.default.func,
  itemsPerPage: _propTypes.default.number
});

_defineProperty(SelectAsync, "defaultProps", {
  itemsPerPage: 20
});

var _default = SelectAsync;
exports.default = _default;