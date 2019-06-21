"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Tab", {
  enumerable: true,
  get: function get() {
    return _tab.default;
  }
});
exports.Tabs = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _immutable = _interopRequireDefault(require("immutable"));

var _lodash = require("lodash");

var _classnames = _interopRequireDefault(require("classnames"));

var _tab = _interopRequireDefault(require("./tab"));

var _events = _interopRequireDefault(require("../../utils/helpers/events"));

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

var _browser = _interopRequireDefault(require("../../utils/helpers/browser"));

require("./tabs.scss");

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
 * A Tabs widget.
 *
 * == How to use a Tabs Widget in a component:
 *
 * In your file
 *
 *   import { Tabs, Tab } from 'carbon-react/lib/components/tabs';
 *
 * To render a Tabs Widget:
 *
 *   <Tabs>
 *     <Tab title='Title 1' tabId='uniqueId1'>
 *
 *       <Textbox />
 *       <Textbox />
 *
 *     </Tab>
 *
 *     <Tab title='Title 2' tabId='uniqueId2'>
 *
 *       <Date />
 *       <Textbox />
 *
 *     </Tab>
 *   </Tabs>
 *
 * Optionally, you can pass `renderHiddenTabs` prop to the Tabs. By default this is
 * set to true and therefore all tabs will be rendered. The selected tab will have
 * a class of `selected` and all other tabs will have a class of `hidden` which sets
 * their display to `none`.
 *
 * Setting `renderHiddenTabs to false will add a small performance improvement as
 * all previously hidden tabs will not be rendered to the page.
 *
 * If you are using the tab component within a form all tabs should be rendered so that
 * form validation can work correctly.
 *
 * The tabs widget also allows you to select a tab on page load. By default this is set
 * to the first tab. To set a different tab on page load pass a tabId to the
 * selectedTabId prop as shown in the example below.
 *
 * To render a Tabs Widget with Options:
 *
 *   <Tabs renderHiddenTabs={ false } selectedTabId='uniqueId2' >
 *     <Tab title='Title 1' tabId='uniqueId1'>
 *
 *       <Textbox />
 *       <Textbox />
 *
 *     </Tab>
 *
 *     <Tab title='Title 2' tabId='uniqueId2'>
 *
 *       <Date />
 *       <Textbox />
 *
 *     </Tab>
 *   </Tabs>
 *
 * @class Tabs
 * @constructor
 */
var Tabs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tabs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      /**
       * Tracks the validity of each tab
       *
       * @property tabValidity
       * @type {Object}
       */
      tabValidity: _immutable.default.Map(),

      /**
       * Tracks the warning of each tab
       *
       * @property tabWarning
       * @type {Object}
       */
      tabWarning: _immutable.default.Map()
      /**
       * Returns tabs object to tab component.
       *
       * @method getChildContext
       */

    });

    _defineProperty(_assertThisInitialized(_this), "_window", _browser.default.getWindow());

    _defineProperty(_assertThisInitialized(_this), "changeValidity", function (id, valid) {
      _this.setState(function (prevState) {
        return {
          tabValidity: prevState.tabValidity.set(id, valid)
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeWarning", function (id, warning) {
      _this.setState(function (prevState) {
        return {
          tabWarning: prevState.tabWarning.set(id, warning)
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleTabClick", function (ev) {
      if (_events.default.isEventType(ev, 'keydown')) {
        return;
      }

      var tabid = ev.target.dataset.tabid;

      _this.updateVisibleTab(tabid);
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (index) {
      return function (event) {
        var isVertical = _this.isVertical(_this.props.position);

        var isUp = isVertical && _events.default.isUpKey(event);

        var isDown = isVertical && _events.default.isDownKey(event);

        var isLeft = !isVertical && _events.default.isLeftKey(event);

        var isRight = !isVertical && _events.default.isRightKey(event);

        if (isUp || isLeft) {
          _this.goToTab(event, index - 1);
        } else if (isDown || isRight) {
          _this.goToTab(event, index + 1);
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "tabsHeaderClasses", function () {
      return (0, _classnames.default)('carbon-tabs__headers', "carbon-tabs__headers--align-".concat(_this.props.align), 'carbon-tabs__headers');
    });

    _defineProperty(_assertThisInitialized(_this), "tabHeaderClasses", function (tab) {
      var tabHasError = _this.state.tabValidity.get(tab.props.tabId) === false,
          tabHasWarning = _this.state.tabWarning.get(tab.props.tabId) === true && !tabHasError;
      return (0, _classnames.default)('carbon-tabs__headers__header', tab.props.headerClassName, {
        'carbon-tabs__headers__header--error': tabHasError,
        'carbon-tabs__headers__header--warning': tabHasWarning,
        'carbon-tabs__headers__header--selected': _this.isTabSelected(tab.props.tabId)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isTabSelected", function (tabId) {
      return tabId === _this.state.selectedTabId;
    });

    return _this;
  }

  _createClass(Tabs, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        tabs: {
          changeValidity: this.changeValidity,
          changeWarning: this.changeWarning
        }
      };
    }
    /**
     * A lifecycle method that is called after before initial render.
     * Can set up state of component without causing a re-render
     *
     * @method componentWillMount
     */

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var selectedTabId;

      if (this.props.selectedTabId) {
        selectedTabId = this.props.selectedTabId;
      } else {
        var hash = this._window.location.hash.substring(1);

        if (Array.isArray(this.props.children)) {
          var children = (0, _lodash.compact)(this.props.children);
          var useHash = false;

          if (hash) {
            for (var index in children) {
              var child = children[index];

              if (child.props.tabId === hash) {
                useHash = true;
                break;
              }
            }
          }

          selectedTabId = useHash ? hash : children[0].props.tabId;
        } else {
          selectedTabId = this.props.children.props.tabId;
        }
      }

      this.setState({
        selectedTabId: selectedTabId
      });
    }
    /**
    * A lifecycle method that is called when props are updated.
    * Used here to change the visible tab when selectedTabId is updated.
    *
    * @method  componentWillReceiveProps
    * @param {object} nextProps
    */

  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.selectedTabId !== nextProps.selectedTabId && nextProps.selectedTabId !== this.state.selectedTabId) {
        this.updateVisibleTab(nextProps.selectedTabId);
      }
    }
    /**
     * Store the window object as property.
     *
     * @property _window
     * @type {Object}
     */

  }, {
    key: "goToTab",

    /**
     * Will trigger the tab at the given index.
     *
     * @method goToTab
     * @param {Integer}
     * @return {Void}
     */
    value: function goToTab(event, index) {
      event.preventDefault();
      var newIndex = index;

      if (index < 0) {
        newIndex = this.tabIds.length - 1;
      } else if (index === this.tabIds.length) {
        newIndex = 0;
      }

      var nextTabId = this.tabIds[newIndex];
      var nextRef = this.tabRefs[newIndex];
      this.updateVisibleTab(nextTabId);
      this.focusTab(this[nextRef]);
    }
    /**
     * Updates the currently visible tab
     *
     * @method updateVisibleTab
     * @param {Number} tabid The id of the tab
     */

  }, {
    key: "updateVisibleTab",
    value: function updateVisibleTab(tabid) {
      var url = "".concat(this._window.location.origin).concat(this._window.location.pathname, "#").concat(tabid);

      this._window.history.replaceState(null, 'change-tab', url);

      this.setState({
        selectedTabId: tabid
      });

      if (this.props.onTabChange) {
        this.props.onTabChange(tabid);
      }
    }
    /**
     * Focuses the tab for the reference specified
     *
     * @method focusTab
     * @param {Object}
     */

  }, {
    key: "focusTab",
    value: function focusTab(ref) {
      var domNode = _reactDom.default.findDOMNode(ref); // eslint-disable-line react/no-find-dom-node


      domNode.focus();
    }
    /**
     * Classes to be applied to the whole tabs component
     *
     * @method mainClasses Main Class getter
     */

  }, {
    key: "isVertical",

    /**
     * Determines if the tab titles are in a vertical format.
     *
     * @method isVertical
     * @param {String} position
     * @return {Boolean}
     */
    value: function isVertical(position) {
      return position === 'left';
    }
    /**
     * Renders the component.
     *
     * @method render
     */

  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", _extends({
        className: this.mainClasses
      }, (0, _tags.default)('tabs', this.props)), this.tabHeaders, this.tabs);
    }
  }, {
    key: "mainClasses",
    get: function get() {
      return (0, _classnames.default)('carbon-tabs', "carbon-tabs__position-".concat(this.props.position), this.props.className);
    }
    /**
     * Generates the HTML classes for the tabs header.
     *
     * @method tabHeaderClasses
     * @return {String}
     */

  }, {
    key: "children",

    /**
     * The children nodes converted into an Array
     *
     * @method children
     * @return {Array} Ordered array of children
     */
    get: function get() {
      return (0, _lodash.compact)(_react.default.Children.toArray(this.props.children));
    }
    /**
     * Array of the tabIds for the child nodes
     *
     * @method tabIds
     * @return {Array} Ordered array of tabIds for the child nodes
     */

  }, {
    key: "tabIds",
    get: function get() {
      return this.children.map(function (child) {
        return child.props.tabId;
      });
    }
    /**
     * Build the headers for the tab component
     *
     * @method tabHeaders
     * @return Unordered list of tab titles
     */

  }, {
    key: "tabHeaders",
    get: function get() {
      var _this2 = this;

      this.tabRefs = [];
      var tabTitles = this.children.map(function (child, index) {
        var _ref = "".concat(child.props.tabId, "-tab");

        _this2.tabRefs.push(_ref);

        return _react.default.createElement("li", {
          "aria-selected": _this2.isTabSelected(child.props.tabId),
          className: _this2.tabHeaderClasses(child),
          "data-element": "select-tab",
          "data-tabid": child.props.tabId,
          id: _ref,
          key: child.props.tabId,
          onClick: _this2.handleTabClick,
          onKeyDown: _this2.handleKeyDown(index),
          ref: function ref(node) {
            _this2[_ref] = node;
          },
          role: "tab",
          tabIndex: _this2.isTabSelected(child.props.tabId) ? '0' : '-1'
        }, child.props.title);
      });
      return _react.default.createElement("ul", {
        className: this.tabsHeaderClasses(),
        role: "tablist"
      }, tabTitles);
    }
    /**
     * Builds the single currently selected tab
     *
     * @method visibleTab
     * @return {JSX} visible tab
     */

  }, {
    key: "visibleTab",
    get: function get() {
      var _this3 = this;

      var visibleTab;
      this.children.forEach(function (child) {
        if (_this3.isTabSelected(child.props.tabId)) {
          visibleTab = child;
        }
      });
      return _react.default.cloneElement(visibleTab, {
        className: 'carbon-tab--selected'
      });
    }
    /**
     * Builds all tabs where non selected tabs have class of hidden
     *
     * @method tabs
     * @return {JSX} all tabs
     */

  }, {
    key: "tabs",
    get: function get() {
      var _this4 = this;

      if (!this.props.renderHiddenTabs) {
        return this.visibleTab;
      }

      var tabs = this.children.map(function (child, index) {
        var klass = 'hidden';

        if (_this4.isTabSelected(child.props.tabId)) {
          klass = 'carbon-tab--selected';
        }

        var props = {
          'aria-labelledby': _this4.tabRefs[index],
          className: klass,
          role: 'tabPanel'
        };
        return _react.default.cloneElement(child, props);
      });
      return tabs;
    }
  }]);

  return Tabs;
}(_react.default.Component);

exports.Tabs = Tabs;

_defineProperty(Tabs, "propTypes", {
  /**
   * Custom className
   *
   * @property className
   * @type {String}
   */
  className: _propTypes.default.string,

  /**
   * Should the unfocussed tabs be rendered to the page
   *
   * @property renderHiddenTabs
   * @type {Boolean}
   * @default true
   */
  renderHiddenTabs: _propTypes.default.bool,

  /**
   * The tab to be displayed updating this prop will change the visible tab.
   * Defaults to the first tab upon initial load.
   *
   * @property selectedTabId
   * @type {String}
   * @default firstTab
   */
  selectedTabId: _propTypes.default.string,

  /**
   * Individual tabs
   *
   * @property children
   * @type {Object | Array}
   */
  children: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object]).isRequired,

  /**
   * Aligns the tab headers
   *
   * @property align
   * @type {String}
   */
  align: _propTypes.default.string,

  /**
   * Emitted when the visible tab is changed
   *
   * @property onTabChange
   * @type {Func}
   */
  onTabChange: _propTypes.default.func,

  /**
   * The position of tabs with respect to the content (top (default) or left)
   *
   * @property position
   * @type {String}
   */
  position: _propTypes.default.string
});

_defineProperty(Tabs, "defaultProps", {
  renderHiddenTabs: true,
  align: 'left',
  position: 'top'
});

_defineProperty(Tabs, "childContextTypes", {
  /**
   * Defines a context object for tab of the tabs component.
   * https://facebook.github.io/react/docs/context.html
   *
   * @property tab
   * @type {Object}
   */
  tabs: _propTypes.default.object
});