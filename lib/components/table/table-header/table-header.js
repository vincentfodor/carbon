"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.function.name");

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

var _icon = _interopRequireDefault(require("../../icon"));

var _ether = require("../../../utils/ether");

require("./table-header.scss");

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
 * A TableHeader widget.
 *
 * == How to use a TableHeader in a component:
 *
 * See documentation for Table component.
 *
 * You can set a property of 'align' which should be a string. This will
 * align the content to either "left", "center" or "right".
 *
 * == Sortable Columns:
 *
 * To make a column sortable, pass a prop of 'sortable={ true }' to the corresponding
 * TableHeader.
 * Sortable columns also require a 'name' prop which must correspond to the database key.
 *
 * You can also provide a custom sortOrder - 'asc' (ascending) or 'desc' (descending).
 * By Default columns are sorted in ascending order.
 *
 * See the Table documentation for more information on hooking up a change handler
 * to setup sort functionality in your app.
 *
 * @class TableHeader
 * @constructor
 */
var TableHeader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TableHeader, _React$Component);

  function TableHeader() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TableHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TableHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "emitSortEvent", function () {
      var sortOrder = _this.context.sortOrder || 'desc'; // If this is the current sorted column. flip order

      if (_this.sorted) {
        sortOrder = _this.context.sortOrder === 'asc' ? 'desc' : 'asc';
      }

      _this.context.onSort(_this.props.name, sortOrder);
    });

    return _this;
  }

  _createClass(TableHeader, [{
    key: "onSortableColumnClick",
    value: function onSortableColumnClick(event) {
      event.preventDefault();
    }
    /**
     * Returns props to be used on the TH element.
     *
     * @method tableHeaderProps
     * @return {Object}
     */

  }, {
    key: "tableHeaderClasses",

    /**
     * Returns classes to be used on the TH element.
     *
     * @method tableHeaderClasses
     * @return {String}
     */
    value: function tableHeaderClasses() {
      var _classNames;

      return (0, _classnames.default)('carbon-table-header', this.props.className, (_classNames = {}, _defineProperty(_classNames, "carbon-table-header--align-".concat(this.props.align), this.props.align), _defineProperty(_classNames, 'carbon-table-header--sortable', this.props.sortable), _classNames));
    }
  }, {
    key: "ariaAttributes",
    value: function ariaAttributes() {
      var aria = {};

      if (this.context.sortOrder && this.isCurrentSortedColumn) {
        aria['aria-sort'] = this.context.sortOrder === 'asc' ? 'ascending' : 'descending';
      }

      return aria;
    }
    /**
     * Emits sort event to parent context - table.
     *
     * @method emitSortEvent
     */

  }, {
    key: "componentTags",
    value: function componentTags(props) {
      return {
        'data-component': 'table-header',
        'data-element': props['data-element'],
        'data-role': props['data-role']
      };
    }
    /**
     * Renders the component.
     *
     * @method render
     */

  }, {
    key: "render",
    value: function render() {
      var contents = null;

      if (this.props.sortable) {
        var sortOrder = this.context.sortOrder === 'asc' ? 'desc' : 'asc';
        contents = _react.default.createElement("a", {
          href: "#sort-".concat(sortOrder),
          className: "carbon-table-header--sort",
          "aria-label": this.sortDescription,
          onClick: this.onSortableColumnClick
        }, this.sortIconHTML, this.props.children);
      } else {
        contents = this.props.children;
      }

      return _react.default.createElement("th", _extends({}, this.tableHeaderProps, this.componentTags(this.props), this.ariaAttributes()), contents);
    }
  }, {
    key: "tableHeaderProps",
    get: function get() {
      var _validProps = (0, _ether.validProps)(this),
          props = Object.assign({}, _validProps);

      delete props.children;
      props.className = this.tableHeaderClasses();
      if (this.props.sortable) props.onClick = this.emitSortEvent;
      return props;
    }
  }, {
    key: "isCurrentSortedColumn",
    get: function get() {
      return this.props.sortable && this.props.name === this.context.sortedColumn;
    }
    /**
     * Returns classes to apply to the sort icon
     *
     * @method sortIconClasses
     * @return {JSX} Icon JSX
     */

  }, {
    key: "sortIconClasses",
    get: function get() {
      return (0, _classnames.default)('carbon-table-header__icon', _defineProperty({}, "carbon-table-header__icon--align-".concat(this.props.align), this.props.align));
    }
    /**
     * Returns sort icon HTML if column is sortable and has been sorted.
     *
     * @method sortIconHTML
     * @return {JSX} Icon JSX
     */

  }, {
    key: "sortIconHTML",
    get: function get() {
      if (this.sorted) {
        var type = this.context.sortOrder === 'desc' ? 'sort-down' : 'sort-up';
        return _react.default.createElement(_icon.default, {
          type: type,
          className: this.sortIconClasses
        });
      }

      return null;
    }
    /**
     * Determines if this column is currently sorted.
     *
     * @method sorted
     * @return {Boolean}
     */

  }, {
    key: "sorted",
    get: function get() {
      return this.props.sortable && this.context.sortedColumn === this.props.name;
    }
    /**
     * Returns descriptive text to describe the sortable column, and about
     * what will happen when they next attempt to sort the column i.e. which
     * direction it will sort in.
     *
     * NB If the current sortOrder is undefined, assume the next sort order
     * will be descending.
     *
     * @method sortDescription
     * @return {string}
     */

  }, {
    key: "sortDescription",
    get: function get() {
      if (!this.props.sortable) {
        return null;
      }

      var currentSortOrder = this.context.sortOrder;
      var nextSortOrder = null;
      var currentSortDescription = null;

      if (currentSortOrder) {
        nextSortOrder = currentSortOrder === 'asc' ? 'descending' : 'ascending';
        currentSortDescription = "sorted ".concat(currentSortOrder === 'desc' ? 'descending' : 'ascending', ", ");
      } else {
        nextSortOrder = 'descending';
        currentSortDescription = '';
      }

      return "Sortable column, ".concat(currentSortDescription, "activate to sort column ").concat(nextSortOrder);
    }
  }]);

  return TableHeader;
}(_react.default.Component);

_defineProperty(TableHeader, "propTypes", {
  /**
   * Aligns the content of the cell (can be "left", "center" or "right").
   *
   * @property align
   * @type {String}
   */
  align: _propTypes.default.string,

  /**
   * The body of the content component.
   *
   * @property children
   * @type {Object}
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
   * Name of the column to sort. Should correspond to name in database.
   *
   * @property name
   * @type {String}
   */
  name: function name(props, propName) {
    if (props.sortable) {
      if (!props[propName]) {
        throw new Error('Sortable columns require a prop of name of type String');
      }

      if (typeof props[propName] !== 'string') {
        throw new Error('name must be a string');
      }
    }
  },

  /**
   * Whether column is sortable.
   *
   * @property sortable
   * @type {Boolean}
   */
  sortable: _propTypes.default.bool
});

_defineProperty(TableHeader, "defaultProps", {
  align: '',
  children: null,
  className: '',
  name: '',
  sortable: false
  /**
   * Sort handler passed from table context
   *
   * @property onSort
   * @type {Function}
   */

});

_defineProperty(TableHeader, "contextTypes", {
  onSort: _propTypes.default.func,
  sortedColumn: _propTypes.default.string,
  sortOrder: _propTypes.default.string
  /**
   * Event handler for clicks on the <a> tag used for activating
   * column sorting.
   *
   * Used to prevent the default action of the <a> tag.
   *
   * @method onSortableColumnClick
   * @return {Void}
   */

});

var _default = TableHeader;
exports.default = _default;