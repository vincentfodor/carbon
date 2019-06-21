"use strict";

require("core-js/modules/es.array.find");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rootTagTest = exports.elementsTagTest = void 0;

var elementsTagTest = function elementsTagTest(wrapper, elements) {
  elements.forEach(function (element) {
    it("include 'data-element=\"".concat(element, "\"'"), function () {
      expect(wrapper.find({
        'data-element': element
      }).length).toEqual(1);
    });
  });
};

exports.elementsTagTest = elementsTagTest;

var rootTagTest = function rootTagTest(rootNode, comp, elem, role) {
  expect(rootNode.prop('data-component')).toEqual(comp);
  expect(rootNode.prop('data-element')).toEqual(elem);
  expect(rootNode.prop('data-role')).toEqual(role);
};

exports.rootTagTest = rootTagTest;