"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.find");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.number.is-nan");

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

var _i18nJs = _interopRequireDefault(require("i18n-js"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _immutable = _interopRequireDefault(require("immutable"));

var _css = _interopRequireDefault(require("../../utils/css"));

var _icon = _interopRequireDefault(require("../icon"));

var _number = _interopRequireDefault(require("../number"));

var _dropdown = _interopRequireDefault(require("../dropdown"));

var _events = _interopRequireDefault(require("../../utils/helpers/events"));

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

require("./pager.scss");

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

/**
 * A Pager widget.
 *
 * == How to use a Pager in a component:
 *
 * In your file
 *
 *   import Pager from 'carbon-react/lib/components/pager';
 *
 * To render a Pager:
 *
 *   <Pager currentPage='1' totalRecords='100' onPagination={ function(){} } />
 *
 * @class Pager
 */
var Pager =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Pager, _React$Component);

  function Pager() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Pager);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Pager)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      /**
       * Current page is held in state so the
       * user can use the input field
       *
       * New props always overide the currentPage
       *
       * @property currentPage
       * @type {String}
       */
      currentPage: _this.props.currentPage
      /**
       * Ensure the currentPage is defined by props
       *
       * @method componentWillReceiveProps
       * @param {Object} new props for component
       * @return {Void}
       */

    });

    _defineProperty(_assertThisInitialized(_this), "handleCurrentPageInputChange", function (ev) {
      _this.setState({
        currentPage: ev.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCurrentPageKeyUp", function (ev) {
      if (_events.default.isEnterKey(ev)) {
        _this.emitChangeCallback('input', ev);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "emitChangeCallback", function (element, ev) {
      var newPage, newPageSize;

      switch (element) {
        case 'next':
          newPage = String(Number(_this.props.currentPage) + 1);

          _this.props.onPagination(newPage, _this.props.pageSize, element);

          break;

        case 'input':
          newPage = Math.abs(Number(ev.target.value));

          if (Number.isNaN(newPage)) {
            newPage = '1';
          }

          if (!newPage) {
            _this.setState({
              currentPage: _this.props.currentPage
            });

            break;
          }

          if (newPage > _this.maxPage) {
            newPage = String(_this.maxPage);
          }

          _this.props.onPagination(String(newPage), _this.props.pageSize, element);

          break;

        case 'previous':
          newPage = String(Number(_this.props.currentPage) - 1);

          _this.props.onPagination(newPage, _this.props.pageSize, element);

          break;

        case 'size':
          newPageSize = ev.target.value;

          if (!_this.props.pageSizeSelectionOptions.find(function (x) {
            return x.get('id') === newPageSize;
          })) {
            break;
          } // TODO: Clever current page correction


          _this.props.onPagination('1', newPageSize, element);

          break;

        default:
          break;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "emitCallbackSelector", function (element) {
      return function (ev) {
        _this.emitChangeCallback(element, ev);
      };
    });

    return _this;
  }

  _createClass(Pager, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.currentPage !== this.state.currentPage) {
        this.setState({
          currentPage: nextProps.currentPage
        });
      }
    }
    /**
     * Handle current page input internally until blur event
     *
     * @method handleCurrentPageInputChange
     * @return {Void}
     */

  }, {
    key: "render",

    /**
     * Render method for page
     *
     * @method render
     * @return {JSX}
     */
    value: function render() {
      return _react.default.createElement("div", _extends({
        className: "carbon-pager"
      }, (0, _tags.default)('pager', this.props)), _react.default.createElement("div", {
        className: "carbon-pager__size"
      }, this.sizeSelectionDropdown), _react.default.createElement("div", {
        className: "carbon-pager__navigation"
      }, this.previousArrow, _react.default.createElement("span", {
        className: _css.default.unselectable
      }, pageX()), this.currentPageInput, _react.default.createElement("span", {
        className: _css.default.unselectable
      }, ofY(), this.maxPage), this.nextArrow), _react.default.createElement("div", {
        className: "carbon-pager__summary"
      }, this.props.totalRecords, recordsText(this.props.totalRecords)));
    }
  }, {
    key: "maxPage",

    /**
     * Calculate the maximum page
     *
     * @method maxPage
     * @return {Integer}
     */
    get: function get() {
      if (this.props.pageSize && this.props.pageSize !== '0') {
        return Math.ceil(this.props.totalRecords / this.props.pageSize) || 1;
      }

      return 1;
    }
    /**
     * Should the previous arrow be disabled
     *
     * @method disablePrevious
     * @return {Boolean}
     */

  }, {
    key: "disablePrevious",
    get: function get() {
      return this.props.currentPage === '1';
    }
    /**
     * Should the next arrow be disabled
     *
     * @method disableNext
     * @return {Boolean}
     */

  }, {
    key: "disableNext",
    get: function get() {
      return this.props.currentPage * this.props.pageSize >= Number(this.props.totalRecords);
    }
    /**
     * Get previous arrow icon
     *
     * @method previousArrow
     * @return {JSX}
     */

  }, {
    key: "previousArrow",
    get: function get() {
      var props = {
        type: 'dropdown',
        className: 'carbon-pager__previous',
        'data-element': 'previous-page'
      };

      if (this.disablePrevious) {
        props.className += ' carbon-pager__previous--disabled';
      } else {
        props.onClick = this.emitCallbackSelector('previous');
      }

      return _react.default.createElement(_icon.default, props);
    }
    /**
     * Get current page number input
     *
     * @method currentPageInput
     * @return {JSX}
     */

  }, {
    key: "currentPageInput",
    get: function get() {
      var props = {
        value: this.state.currentPage,
        className: 'carbon-pager__current-page',
        'data-element': 'current-page',
        onChange: this.handleCurrentPageInputChange,
        onBlur: this.emitCallbackSelector('input'),
        onKeyUp: this.handleCurrentPageKeyUp
      };
      return _react.default.createElement(_number.default, props);
    }
    /**
     * Get next arrow icon
     *
     * @method nextArrow
     * @return {JSX}
     */

  }, {
    key: "nextArrow",
    get: function get() {
      var props = {
        className: 'carbon-pager__next',
        'data-element': 'next-page',
        type: 'dropdown'
      };

      if (this.disableNext) {
        props.className += ' carbon-pager__next--disabled';
      } else {
        props.onClick = this.emitCallbackSelector('next');
      }

      return _react.default.createElement(_icon.default, props);
    }
    /**
     * Page Size Selection Dropdown
     *
     * @method sizeSelectionDropdown
     * @return {JSX}
     */

  }, {
    key: "sizeSelectionDropdown",
    get: function get() {
      if (this.props.showPageSizeSelection) {
        return _react.default.createElement("div", null, _react.default.createElement("span", {
          className: _css.default.unselectable
        }, showSizeText()), _react.default.createElement(_dropdown.default, {
          options: this.props.pageSizeSelectionOptions,
          value: this.props.pageSize,
          onChange: this.emitCallbackSelector('size'),
          "data-element": "page-select"
        }), _react.default.createElement("span", {
          className: _css.default.unselectable
        }, recordsText(this.props.pageSize)));
      }

      return null;
    }
  }]);

  return Pager;
}(_react.default.Component);

_defineProperty(Pager, "propTypes", {
  /**
   * Current visible page
   *
   * @property currentPage
   * @type {String}
   */
  currentPage: _propTypes.default.string.isRequired,

  /**
   * Total number of records
   *
   * @property totalRecords
   * @type {String}
   */
  totalRecords: _propTypes.default.string.isRequired,

  /**
   * Function called when any pager changes take place
   * PageSize, Current Page
   *
   * @property onPagination
   * @type {Function}
   */
  onPagination: _propTypes.default.func.isRequired,

  /**
   * Pagination page size
   *
   * @property pageSize
   * @type {String}
   */
  pageSize: _propTypes.default.string,

  /**
   * Should the page size selection dropdown be shown
   *
   * @property showPageSizeSelection
   * @type {Boolean}
   */
  showPageSizeSelection: _propTypes.default.bool,

  /**
   * Set of page size options
   *
   * @property pageSizeSelectionOptions
   * @type {Object}
   */
  pageSizeSelectionOptions: _propTypes.default.object
});

_defineProperty(Pager, "defaultProps", {
  pageSize: '10',
  showPageSizeSelection: false,
  pageSizeSelectionOptions: _immutable.default.fromJS([{
    id: '10',
    name: 10
  }, {
    id: '25',
    name: 25
  }, {
    id: '50',
    name: 50
  }])
});

function showSizeText() {
  return _i18nJs.default.t('pager.size', {
    defaultValue: 'Show '
  });
}

function recordsText(numberOfRecords) {
  return _i18nJs.default.t('pager.records', {
    count: Number(numberOfRecords),
    defaultValue: ' records'
  });
}

function pageX() {
  return _i18nJs.default.t('pager.page_x', {
    defaultValue: 'Page '
  });
}

function ofY() {
  return _i18nJs.default.t('pager.of_y', {
    defaultValue: ' of '
  });
}

var _default = Pager;
exports.default = _default;