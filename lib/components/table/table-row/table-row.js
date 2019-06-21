"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

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

var _tableCell = _interopRequireDefault(require("../table-cell"));

var _tableHeader = _interopRequireDefault(require("../table-header"));

var _checkbox = _interopRequireDefault(require("../../checkbox"));

var _guid = _interopRequireDefault(require("../../../utils/helpers/guid"));

var _withDrop = _interopRequireDefault(require("../../drag-and-drop/with-drop"));

var _draggableTableCell = _interopRequireDefault(require("../draggable-table-cell"));

var _ether = require("../../../utils/ether");

var _tags = _interopRequireDefault(require("../../../utils/helpers/tags"));

require("./table-row.scss");

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
 * A TableRow widget.
 *
 * == How to use a TableRow in a component:
 *
 * See documentation for Table component.
 *
 * If you add an onClick event to a Table Row, will display the cursor as a pointer
 * when hovering over the row.
 *
 * @class TableRow
 * @constructor
 */
var TableRow =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TableRow, _React$Component);

  function TableRow() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TableRow);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TableRow)).call.apply(_getPrototypeOf2, [this].concat(_args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      /**
       * Internal state to track if the row is currently highlighted.
       *
       * @property highlighted
       * @type {Boolean}
       * @default false
       */
      highlighted: false,

      /**
       * Internal state to track if the row is currently selected.
       *
       * @property selected
       * @type {Boolean}
       * @default false
       */
      selected: false
      /**
       * @method componentWillMount
       * @return {Void}
       */

    });

    _defineProperty(_assertThisInitialized(_this), "onSelectAll", function () {
      _this.context.selectAll(_assertThisInitialized(_this));
    });

    _defineProperty(_assertThisInitialized(_this), "onRowClick", function () {
      if (_this.props.onHighlight) {
        // trigger onHighlight callback if defined
        _this.props.onHighlight(_this.props.uniqueID, !_this.state.highlighted, _assertThisInitialized(_this));
      } else {
        // trigger highlightRow method on the table
        _this.context.highlightRow(_this.props.uniqueID, _assertThisInitialized(_this));
      } // trigger any custom onClick event the developer may have set


      if (_this.props.onClick) {
        var _this$props;

        (_this$props = _this.props).onClick.apply(_this$props, arguments);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSelect", function (ev) {
      if (_this.props.onSelect) {
        // trigger onSelect callback if defined
        _this.props.onSelect(_this.props.uniqueID, ev.target.value, _assertThisInitialized(_this));
      } else {
        // trigger selectRow method on the table
        _this.context.selectRow(_this.props.uniqueID, _assertThisInitialized(_this), !_this.state.selected);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "draggingIsOccurring", function () {
      return typeof _this.context.dragAndDropActiveIndex === 'number';
    });

    _defineProperty(_assertThisInitialized(_this), "renderDraggableCell", function () {
      if (!_this.context.dragDropManager || _this.isHeader) {
        return null;
      }

      return _react.default.createElement(_draggableTableCell.default, {
        identifier: _this.props.dragAndDropIdentifier,
        draggableNode: function draggableNode() {
          return _this._row;
        },
        canDrag: !_this.props.hideDrag
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderDraggableRow", function (row) {
      if (!_this.context.dragDropManager || _this.isHeader) {
        return row;
      }

      return _react.default.createElement(_withDrop.default, {
        identifier: _this.props.dragAndDropIdentifier,
        index: _this.props.index,
        canDrop: function canDrop() {
          return !_this.props.hideDrag;
        }
      }, row);
    });

    return _this;
  }

  _createClass(TableRow, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (this.context.dragDropManager) {
        if (this.props.as !== 'header' && this.props.index === undefined) {
          throw new Error('You need to provide an index for rows that are draggable');
        }
      }

      if (this.requiresUniqueID && !this.props.uniqueID) {
        throw new Error('A TableRow which is selectable or highlightable should provide a uniqueID.');
      }

      if (this.context.attachToTable && this.props.uniqueID && !this.props.selectAll && !this.isHeader) {
        // generate row id
        this.rowID = (0, _guid.default)(); // only attach to the table if we have a unique id

        this.context.attachToTable(this.rowID, this); // also check if row is already selected/highlighted

        this.context.checkSelection(this.props.uniqueID, this);
      }

      if (this.props.selected) {
        // if developer is controlling selected state - set it
        this.setState({
          selected: true
        });
      }

      if (this.props.highlighted) {
        // if developer is controlling highlighted state - set it
        this.setState({
          highlighted: true
        });
      }
    }
    /**
     * @method componentWillReceiveProps
     * @return {Void}
     */

  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.uniqueID !== nextProps.uniqueID) {
        // if unique id has changed, check if the table has the new id as selected or not
        this.context.checkSelection(nextProps.uniqueID, this);
      }

      if (this.props.selected !== nextProps.selected) {
        // if developer is controlling selected state - set it
        this.setState({
          selected: nextProps.selected
        });
      }

      if (this.props.highlighted !== nextProps.highlighted) {
        // if developer is controlling highlighted state - set it
        this.setState({
          highlighted: nextProps.highlighted
        });
      }
    }
    /**
     * @method componentWillUnmount
     * @return {Void}
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.context.detachFromTable) {
        this.context.detachFromTable(this.rowID);
      }
    }
    /**
     * Call the selectAll callback.
     *
     * @method onSelectAll
     * @return {Void}
     */

  }, {
    key: "render",

    /**
     * Renders the component
     *
     * @method render
     */
    value: function render() {
      var _this2 = this;

      var content = [this.props.children];

      if (this.shouldHaveMultiSelectColumn) {
        content.unshift(this.multiSelectCell);
      }

      return this.renderDraggableRow(_react.default.createElement("tr", _extends({}, this.rowProps, (0, _tags.default)('table-row', this.props), {
        ref: function ref(node) {
          _this2._row = node;
        }
      }), this.renderDraggableCell(), content));
    }
  }, {
    key: "mainClasses",

    /**
     * Classes to be applied to the table row component
     *
     * @method mainClasses Main Class getter
     */
    get: function get() {
      var isDragIndexMatch = this.context.dragAndDropActiveIndex === this.props.index;
      return (0, _classnames.default)('carbon-table-row', this.props.className, {
        'carbon-table-row--clickable': this.props.onClick || this.props.highlightable || this.context.highlightable,
        'carbon-table-row--selected': this.state.selected,
        'carbon-table-row--highlighted': this.state.highlighted && !this.state.selected,
        'carbon-table-row--dragged': this.draggingIsOccurring() && isDragIndexMatch,
        'carbon-table-row--dragging': this.draggingIsOccurring()
      });
    }
    /**
     * Sets additional props to the row.
     *
     * @method rowProps
     * @return {Object}
     */

  }, {
    key: "rowProps",
    get: function get() {
      var _validProps = (0, _ether.validProps)(this),
          props = Object.assign({}, _validProps);

      props.className = this.mainClasses;

      if (this.context.highlightable || this.props.highlightable) {
        props.onClick = this.onRowClick;
      }

      return props;
    }
    /**
     * Determines if the developer has flagged this row as a header.
     *
     * @method isHeader
     * @return {Boolean}
     */

  }, {
    key: "isHeader",
    get: function get() {
      return this.props.as === 'header';
    }
    /**
     * Determines what kind of cell to render for the checkbox.
     *
     * @method multiSelectCell
     * @return {Object} JSX
     */

  }, {
    key: "multiSelectCell",
    get: function get() {
      // renders a TableHeader if row is flagged as a header.
      var cell = this.isHeader ? _tableHeader.default : _tableCell.default;
      return _react.default.createElement(cell, {
        key: 'select',
        className: 'carbon-table-cell--select'
      }, this.multiSelect);
    }
    /**
     * Returns the checkbox for the select action.
     *
     * @method multiSelect
     * @return {Object} JSX
     */

  }, {
    key: "multiSelect",
    get: function get() {
      if (this.props.hideMultiSelect) {
        return null;
      } // determines which action to use (multi-select or select-all)


      var action = this.props.selectAll || this.isHeader ? this.onSelectAll : this.onSelect;
      return _react.default.createElement(_checkbox.default, {
        onClick: function onClick(ev) {
          return ev.stopPropagation();
        },
        onChange: action,
        checked: this.state.selected
      });
    }
    /**
     * Determines if the row should have a multi select column.
     *
     * @method shouldHaveMultiSelectColumn
     * @return {Boolean}
     */

  }, {
    key: "shouldHaveMultiSelectColumn",
    get: function get() {
      // if component specifically disables selectable, don't put the cell in
      if (this.props.selectable !== false) {
        // if multi-seletable, add the checkbox cell
        if (this.props.selectAll || this.context.selectable || this.props.selectable) {
          return true;
        }
      }

      return false;
    }
    /**
     * Determines if the row requires a unique ID.
     *
     * @method requiresUniqueID
     * @return {Boolean}
     */

  }, {
    key: "requiresUniqueID",
    get: function get() {
      var highlightable = this.props.highlightable !== false && (this.props.highlightable || this.context.highlightable),
          selectable = this.props.selectable !== false && (this.props.selectable || this.context.selectable);
      return highlightable || selectable;
    }
    /**
     * Determines if dragging is occurring within the current draggable context.
     *
     * @method draggingIsOccurring
     * @return {Boolean}
     */

  }]);

  return TableRow;
}(_react.default.Component);

_defineProperty(TableRow, "propTypes", {
  /**
   * Children elements
   *
   * @property children
   * @type {Node}
   */
  children: _propTypes.default.node,

  /**
   * A custom class name for the component.
   *
   * @property className
   * @type {String}
   */
  className: _propTypes.default.string,

  /**
   * Allows developers to specify a callback after the row is clicked.
   *
   * @property onClick
   * @type {Function}
   */
  onClick: _propTypes.default.func,

  /**
   * Enables multi-selectable table rows.
   *
   * @property selectable
   * @type {Boolean}
   */
  selectable: _propTypes.default.bool,

  /**
   * Enables highlightable table rows.
   *
   * @property highlightable
   * @type {Boolean}
   */
  highlightable: _propTypes.default.bool,

  /**
   * Allows developers to manually control selected state for the row.
   *
   * @property selected
   * @type {Boolean}
   */
  selected: _propTypes.default.bool,

  /**
   * Allows developers to manually control highlighted state for the row.
   *
   * @property highlighted
   * @type {Boolean}
   */
  highlighted: _propTypes.default.bool,

  /**
   * Define a unique ID so the table can track the row (useful for highlightable or selectable rows).
   *
   * @property uniqueID
   * @type {String}
   */
  uniqueID: _propTypes.default.string,

  /**
   * What the row should be displayed as, set to 'header' to display as header
   *
   * @property as
   * @type {String}
   */
  as: _propTypes.default.string,

  /**
   * Whether to hide the multiSelect
   *
   * @property hideMultiSelect
   * @type {Boolean}
   */
  hideMultiSelect: _propTypes.default.bool,

  /**
   * Whether to select all
   *
   * @property selectAll
   * @type {Boolean}
   */
  selectAll: _propTypes.default.bool,

  /**
   * Callback for when a row is highlighted
   * @property onHighlight
   * @type {Function}
   */
  onHighlight: _propTypes.default.func,

  /**
   * Callback for when a row is selected
   * @property onSelect
   * @type {Function}
   */
  onSelect: _propTypes.default.func,

  /**
   * Used if this row is within a draggable context
   *
   * @property index
   * @type {Number}
   */
  index: _propTypes.default.number,

  /**
   * Optional to associate the drag and drag context.
   *
   * @property dragAndDropIdentifier
   * @type {String}
   */
  dragAndDropIdentifier: _propTypes.default.string,

  /**
   * Used to determine if line is empty or not
   *
   * @property hideDrag
   * @type {Boolean}
   */
  hideDrag: _propTypes.default.bool
});

_defineProperty(TableRow, "safeProps", ['onClick']);

_defineProperty(TableRow, "contextTypes", {
  attachToTable: _propTypes.default.func,
  // attach the row to the table
  detachFromTable: _propTypes.default.func,
  // detach the row from the table
  checkSelection: _propTypes.default.func,
  // a function to check if the row is currently selected
  highlightRow: _propTypes.default.func,
  // highlights the row
  selectAll: _propTypes.default.func,
  // a callback function for when all visible rows are selected
  highlightable: _propTypes.default.bool,
  // table can enable all rows to be highlightable
  selectable: _propTypes.default.bool,
  // table can enable all rows to be multi-selectable
  selectRow: _propTypes.default.func,
  // a callback function for when a row is selected
  dragDropManager: _propTypes.default.object,
  // the React DND DragDropManager
  dragAndDropActiveIndex: _propTypes.default.number // tracks the currently active index

});

var _default = TableRow;
exports.default = _default;