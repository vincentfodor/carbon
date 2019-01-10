"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.function.name");

var _ = require("./");

var _definition = _interopRequireDefault(require("./../../../demo/utils/definition"));

var _definition__ = _interopRequireDefault(require("./page/__definition__"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.goToPage = function (ev) {
  window.Dispatcher.dispatch({
    actionType: window.ComponentConstants.UPDATE_DEFINITION,
    name: 'pages',
    prop: 'slideIndex',
    value: ev.target.name || '0'
  });
};

var definition = new _definition.default('pages', _.Pages, {
  description: 'Allows to slide to different pages in a full screen dialog.',
  designerNotes: '',
  associatedDefinitions: [_definition__.default],
  propTypes: {
    children: 'Node',
    className: 'String',
    slideIndex: 'Number'
  },
  propDescriptions: {
    children: 'This component supports children.',
    className: 'Classes to apply to the component.',
    slideIndex: 'Set this prop to change slide'
  },
  wrap: 'DialogFullScreen',
  wrapProps: ['open', 'onCancel'],
  props: ['slideIndex'],
  propValues: {
    children: "<Page title={ <Heading title='My First Page' /> }>\n    <Button onClick={ window.goToPage } name=\"1\">\n      Go to next page.\n    </Button>\n  </Page>\n\n  <Page title={ <Heading title='My Second Page' backLink={ window.goToPage } /> }>\n    <Button onClick={ window.goToPage } name=\"0\">\n      Go to previous page.\n    </Button>\n  </Page>",
    slideIndex: 0
  },
  openPreview: true
});
definition.stubAction('onCancel', 'open', false);
var _default = definition;
exports.default = _default;