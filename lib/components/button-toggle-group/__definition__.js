'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ = require('./');

var _2 = _interopRequireDefault(_);

var _definition = require('./../../../demo/utils/definition');

var _definition2 = _interopRequireDefault(_definition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition2.default('button-toggle-group', _2.default, {
  description: 'Adds support for validation, warning and info messages on a group of Button Toggles.',
  type: 'form',
  propValues: {
    children: '<ButtonToggle name={ \'grouped\' } id={ \'foo\' } value={ \'foo\' }>\n    Foo\n  </ButtonToggle>\n  <ButtonToggle name={ \'grouped\' } id={ \'bar\' } value={ \'bar\' }>\n    Bar\n  </ButtonToggle>\n  <ButtonToggle name={ \'grouped\' } id={ \'baz\' } value={ \'baz\' }>\n    Baz\n  </ButtonToggle>',
    value: ''
  },
  propTypes: {
    children: 'Node',
    className: 'String',
    value: 'String'
  },
  requiredProps: ['children'],
  propDescriptions: {
    value: 'The value associated with the button toggle group.',
    children: 'The children to render for the button toggle group.'
  },
  hiddenProps: ['children', 'value']
});

definition.isAnInput();

exports.default = definition;