"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _optionsHelper = _interopRequireDefault(require("utils/helpers/options-helper"));

var _ = _interopRequireDefault(require("./"));

var _definition = _interopRequireDefault(require("./../../../demo/utils/definition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('portrait', _.default, {
  description: 'Represents a person with their initials or an avatar.',
  designerNotes: "\n* Useful to represent a person, user, or organisation.\n* Use initials rather than an avatar if you prefer.\n* Works with [Gravatar](http://en.gravatar.com/) as a source of avatars.\n  ",
  relatedComponentsNotes: "\n* Combining Portrait with some text? [Try Profile](/components/profile).\n ",
  propOptions: {
    size: _optionsHelper.default.sizesFull,
    shape: _optionsHelper.default.shapesVaried
  },
  propTypes: {
    alt: 'String',
    className: 'String',
    darkBackground: 'Boolean',
    gravatar: 'String',
    initials: 'String',
    shape: 'String',
    size: 'String',
    src: 'String'
  },
  propDescriptions: {
    alt: 'Defines the alt HTML string.',
    className: 'A custom class name for the component.',
    darkBackground: 'Switch to a dark background (requires a hard re-render).',
    gravatar: 'Define an email address registered with gravatar.',
    initials: 'Define some initials to render in the Portrait.',
    shape: 'Defines the shape of the Portrait.',
    size: 'Defines the size of the Portrait.',
    src: 'Define an image source.'
  }
});
var _default = definition;
exports.default = _default;