"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.constructor");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.search");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "MenuListItem", {
  enumerable: true,
  get: function get() {
    return _menuListItem.default;
  }
});
exports.MenuList = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _escapeStringRegexp = _interopRequireDefault(require("escape-string-regexp"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _link = _interopRequireDefault(require("../link"));

var _textbox = _interopRequireDefault(require("../textbox"));

var _menuListItem = _interopRequireDefault(require("./menu-list-item"));

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

require("./menu-list.scss");

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

 *
 * == How to use a MenuList in a component:
 *
 * In your file:
 *
 *   import { MenuList, MenuListItem } from 'carbon-react/lib/components/menu-list';
 *
 * To render the Link:
 *
 *  <MenuList href='foo'>
 *    <MenuListItem>foo</MenuListItem>
 *    <MenuListItem>bar</MenuListItem>
 *    <MenuListItem>
 *      <MenuList>
 *        I'm nestable
 *      </MenuList>
 *    </MenuListItem>
 *  </MenuList>
 *
 * For additional properties specific to this component, see propTypes.
 *
 * @class MenuList
 * @constructor
 */
var MenuList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MenuList, _React$Component);

  function MenuList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MenuList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MenuList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      filter: null,
      open: _this.props.initiallyOpen || false
      /** Actions * */

    });

    _this.filterHTML = _this.filterHTML.bind(_assertThisInitialized(_this));
    _this.mainClasses = _this.mainClasses.bind(_assertThisInitialized(_this));
    _this.menuItems = _this.menuItems.bind(_assertThisInitialized(_this));
    _this.menuTitle = _this.menuTitle.bind(_assertThisInitialized(_this));
    _this.onSearch = _this.onSearch.bind(_assertThisInitialized(_this));
    _this.showMenuItems = _this.showMenuItems.bind(_assertThisInitialized(_this));
    _this.toggleChildren = _this.toggleChildren.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MenuList, [{
    key: "onSearch",
    value: function onSearch(ev) {
      this.setState({
        filter: ev.target.value,
        open: true
      });
    }
  }, {
    key: "toggleChildren",
    value: function toggleChildren() {
      this.setState(function (prevState) {
        return {
          open: !prevState.open
        };
      });
    }
    /** Helpers * */

  }, {
    key: "showMenuItems",
    value: function showMenuItems() {
      return !this.props.title || !this.props.collapsible || this.state.open;
    }
    /** Markup * */

  }, {
    key: "filterHTML",
    value: function filterHTML() {
      if (!this.props.filter) {
        return null;
      }

      return _react.default.createElement(_menuListItem.default, {
        key: "filter"
      }, _react.default.createElement(_textbox.default, {
        onChange: this.onSearch,
        value: this.state.filter || '',
        autoFocus: true,
        icon: "search",
        placeholder: this.props.filterPlaceholder
      }));
    }
  }, {
    key: "mainClasses",
    value: function mainClasses() {
      return (0, _classnames.default)('carbon-menu-list', this.props.className);
    }
  }, {
    key: "menuItems",
    value: function menuItems() {
      if (this.showMenuItems()) {
        var items = this.props.children;

        if (this.props.filter && this.state.filter) {
          var regex = new RegExp((0, _escapeStringRegexp.default)(this.state.filter), 'i');
          items = items.filter(function (child) {
            return child.props.name.search(regex) > -1;
          });
        }

        return [this.filterHTML(), items];
      }

      return null;
    }
  }, {
    key: "menuTitle",
    value: function menuTitle() {
      if (!this.props.title) {
        return null;
      }

      return _react.default.createElement(_link.default, {
        className: "carbon-menu-list__title",
        "data-element": "title",
        onClick: this.toggleChildren
      }, this.props.title);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", _extends({
        className: this.mainClasses()
      }, (0, _tags.default)('menu-list', this.props)), this.menuTitle(), _react.default.createElement("ul", {
        className: "carbon-menu-list__list"
      }, this.menuItems()));
    }
  }]);

  return MenuList;
}(_react.default.Component);

exports.MenuList = MenuList;

_defineProperty(MenuList, "propTypes", {
  /**
   * Children elements
   *
   * @property children
   * @type {Node}
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Custom className
   *
   * @property className
   * @type {String}
   */
  className: _propTypes.default.string,

  /**
   * Allow the menu to be collapsed
   *
   * @property collapsible
   * @type {Boolean}
   */
  collapsible: _propTypes.default.bool,

  /**
   * Allow the menu to be filtered
   *
   * @property filter
   * @type {Boolean}
   */
  filter: _propTypes.default.bool,

  /**
   * Placeholder text for the filter
   *
   * @property filterPlaceholder
   * @type {String}
   */
  filterPlaceholder: _propTypes.default.string,

  /**
   * Set the menu open on mount
   *
   * @property initiallyOpen
   * @type {Boolean}
   */
  initiallyOpen: _propTypes.default.bool,

  /**
   * The menu title
   *
   * @property title
   * @type {String}
   */
  title: _propTypes.default.string
});

_defineProperty(MenuList, "defaultProps", {
  filter: false,
  collapsible: true
});