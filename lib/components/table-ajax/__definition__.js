"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = require("./");

var _definition = _interopRequireDefault(require("./../../../demo/utils/definition"));

var _component = _interopRequireDefault(require("./../../../demo/actions/component"));

var _definition__ = _interopRequireDefault(require("./../table/table-row/__definition__"));

var _definition__2 = _interopRequireDefault(require("./../table/table-cell/__definition__"));

var _definition__3 = _interopRequireDefault(require("./../table/table-header/__definition__"));

var _definition__4 = _interopRequireDefault(require("./../table/table-subheader/__definition__"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('table-ajax', _.TableAjax, {
  description: 'Ajax control: A table of relational data to view or interact with.',
  designerNotes: "\n* This control is the same as [Table](/components/table), but uses Ajax.\n* Ajax loads data from a specified source as needed, rather than data in the page markup.\n ",
  associatedDefinitions: [_definition__.default, _definition__2.default, _definition__3.default, _definition__4.default],
  dataVariable: 'tableAjaxData',
  propValues: {
    onChange: _component.default.updateTableAjax
  },
  propTypes: {
    formatResponse: 'Function',
    formatRequest: 'Function',
    onAjaxError: 'Function',
    path: 'String'
  },
  propDescriptions: {
    formatResponse: 'Callback function for formatting the data received via Ajax requests into the format required by the table',
    formatRequest: 'Callback function for formatting the query data to be sent via Ajax to the defined path',
    onAjaxError: 'Callback function to handle XHR request errors',
    path: 'The path to make XHR requests to.'
  },
  requiredProps: ['path'],
  hiddenProps: ['formatResponse', 'formatRequest', 'onAjaxError', 'path']
});
definition.isATable();
var _default = definition;
exports.default = _default;