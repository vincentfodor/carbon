"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Column", {
  enumerable: true,
  get: function get() {
    return _column.default;
  }
});
exports.Row = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _column = _interopRequireDefault(require("./column"));

require("./row.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
 * A row widget.
 *
 * This is a standalone row widget used for layout; for table rows use the table-row widget.
 *
 * == How to use a Row in a component:
 *
 * In your file
 *
 *   import { Row, Column } from 'carbon-react/lib/components/row';
 *
 * To render the Row:
 *
 *   <Row>
 *     <Column>Column1</Column>
 *     <Column>Column2</Column>
 *   </Row>
 *
 * A Rows child must be of type Column
 *
 * @class Row
 * @constructor
 */
var Row =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Row, _React$Component);

  function Row() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Row);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Row)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "buildColumns", function () {
      return _react.default.Children.toArray(_this.props.children).map(function (child) {
        return _react.default.cloneElement(child, {
          columnClasses: _this.props.columnClasses,
          columnDivide: _this.props.columnDivide
        }, child.props.children);
      });
    });

    return _this;
  }

  _createClass(Row, [{
    key: "render",

    /**
     * Renders the component.
     *
     * @method render
     * @return {Object} JSX
     */
    value: function render() {
      return _react.default.createElement("div", {
        className: this.mainClasses
      }, this.buildColumns());
    }
  }, {
    key: "mainClasses",

    /**
     * Main Class getter
     *
     * @method mainClasses
     * @return {String} Main className
     */
    get: function get() {
      var columns = this.props.columns || _react.default.Children.toArray(this.props.children).length;

      return (0, _classnames.default)('carbon-row', "carbon-row--gutter-".concat(this.props.gutter), this.props.className, "carbon-row--columns-".concat(columns));
    }
  }]);

  return Row;
}(_react.default.Component);

exports.Row = Row;

_defineProperty(Row, "propTypes", {
  /**
   * The elements to be rendered in the row
   *
   * @property children
   * @type {Object | Array}
   */
  children: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object]),

  /**
   * Custom className
   *
   * @property className
   * @type {String}
   */
  className: _propTypes.default.string,

  /**
   * Pass a custom value for the gutter
   * (extra-small, small, medium, large or extra-large)
   *
   * @property gutter
   * @type {String}
   */
  gutter: _propTypes.default.string,

  /**
   * Show a divide between columns
   *
   * @property columnDivide
   * @type {String}
   */
  columnDivide: _propTypes.default.bool,

  /**
   * Manually define number of columns
   *
   * @property columns
   * @type {String}
   */
  columns: _propTypes.default.string,

  /**
   * class to apply to each child column
   *
   * @property columnClasses
   * @type {String}
   */
  columnClasses: _propTypes.default.string
});

_defineProperty(Row, "defaultProps", {
  gutter: 'medium'
});

var _default = Row;
exports.default = _default;