"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.find");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.click = exports.listFrom = exports.assertHoverTraversal = exports.assertKeyboardTraversal = exports.keyboard = exports.renderListItems = exports.childrenFrom = exports.selectedItemOf = exports.hoverList = void 0;

var _react = _interopRequireDefault(require("react"));

var _scrollableListItem = _interopRequireDefault(require("./scrollable-list-item.component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var makeArray = function makeArray(n) {
  return _toConsumableArray(Array(n).keys());
};

var listItemReducer = function listItemReducer(_ref) {
  var _ref$nonSelectables = _ref.nonSelectables,
      nonSelectables = _ref$nonSelectables === void 0 ? [] : _ref$nonSelectables,
      _ref$customSelectable = _ref.customSelectables,
      customSelectables = _ref$customSelectable === void 0 ? [] : _ref$customSelectable;
  // generate jsx for selectable list items, based on indexes in config
  return function (acc, item, index) {
    if (nonSelectables.includes(item)) return [].concat(_toConsumableArray(acc), [_react.default.createElement("div", null)]);
    if (customSelectables.includes(item)) return [].concat(_toConsumableArray(acc), [_react.default.createElement("div", {
      isSelectable: true
    })]);
    return [].concat(_toConsumableArray(acc), [_react.default.createElement(_scrollableListItem.default, {
      id: index
    })]);
  };
};

var renderListItems = function renderListItems(opts) {
  return makeArray(opts.num).reduce(listItemReducer(opts), []);
};

exports.renderListItems = renderListItems;

var keyPress = function keyPress(code) {
  var ev = new KeyboardEvent('keydown', {
    which: code
  });
  document.dispatchEvent(ev);
};

var keyMap = {
  UpArrow: '38',
  DownArrow: '40',
  RightArrow: '39',
  LeftArrow: '37',
  Enter: '13',
  Tab: '9'
};

var repeat = function repeat(action) {
  return function () {
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return makeArray(n).forEach(function () {
      return action();
    });
  };
};

var keyboard = Object.keys(keyMap).reduce(function (acc, key) {
  acc["press".concat(key)] = function () {
    return repeat(keyPress(keyMap[key]));
  };

  return acc;
}, {});
exports.keyboard = keyboard;

var listFrom = function listFrom(wrapper) {
  return wrapper.find('ul');
};

exports.listFrom = listFrom;

var childrenFrom = function childrenFrom(node) {
  return node.children();
};

exports.childrenFrom = childrenFrom;

var hoverList = function hoverList(wrapper) {
  return function (item) {
    childrenFrom(listFrom(wrapper)).at(item).simulate('mouseover');
  };
};

exports.hoverList = hoverList;

var simulateEvent = function simulateEvent(eventName) {
  return function (wrapper) {
    return wrapper.simulate(eventName);
  };
};

var click = simulateEvent('click');
exports.click = click;

var selectedItemOf = function selectedItemOf(wrapper) {
  return wrapper.state().selectedItem;
};

exports.selectedItemOf = selectedItemOf;

var isUnique = function isUnique(val, index, self) {
  return self.indexOf(val) === index;
};

var isSelectableGiven = function isSelectableGiven(nonSelectables) {
  return function (i) {
    return !nonSelectables.includes(i);
  };
};

var selectedItemReducer = function selectedItemReducer(method) {
  return function (wrapper) {
    return function (acc, i) {
      method(wrapper)(i);
      return [].concat(_toConsumableArray(acc), [selectedItemOf(wrapper)]);
    };
  };
};

var arraysEqual = function arraysEqual(arr1, arr2) {
  return arr1.sort().join(',') === arr2.sort().join(',');
};

var assertCorrectTraversal = function assertCorrectTraversal(method) {
  return function (expect) {
    return function (_ref2) {
      var num = _ref2.num,
          _ref2$nonSelectables = _ref2.nonSelectables,
          nonSelectables = _ref2$nonSelectables === void 0 ? [] : _ref2$nonSelectables;
      return function (wrapper) {
        var array = makeArray(num);
        var validIndexes = array.filter(isSelectableGiven(nonSelectables));
        var indexesThatWereSelected = array.reduce(selectedItemReducer(method)(wrapper), []).filter(isUnique);
        expect(arraysEqual(validIndexes, indexesThatWereSelected)).toBeTruthy();
      };
    };
  };
};

var assertKeyboardTraversal = assertCorrectTraversal(function () {
  return keyboard.pressDownArrow;
})(expect);
exports.assertKeyboardTraversal = assertKeyboardTraversal;
var assertHoverTraversal = assertCorrectTraversal(function (wrapper) {
  return hoverList(wrapper);
})(expect);
exports.assertHoverTraversal = assertHoverTraversal;