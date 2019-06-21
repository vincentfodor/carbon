"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: white;\n  border: 1px solid rgb(20, 20, 20, 0.5);\n  box-sizing: border-box;\n  box-shadow: 0 5px 5px 0 rgba(0,20,29,0.2), 0 10px 10px 0 rgba(0,20,29,0.1);\n  list-style-type: none;\n  max-height: ", ";\n  margin: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  padding: 0;\n  width: 100%;\n\n  &::-webkit-scrollbar {\n    -webkit-appearance: none;\n    background-color: #EEE;\n    width: 8px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: #777777;\n    border-radius:4px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ScrollableListContainer = _styledComponents.default.ul(_templateObject(), function (props) {
  return "".concat(props.maxHeight);
});

ScrollableListContainer.defaultProps = {
  maxHeight: '180px'
};
var _default = ScrollableListContainer;
exports.default = _default;