'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapEnzyme = undefined;

var _reducerRegistry = require('./reducer-registry');

var _reducerRegistry2 = _interopRequireDefault(_reducerRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapEnzyme = exports.wrapEnzyme = function wrapEnzyme(Enzyme) {
  var originalShallow = Enzyme.shallow;
  var originalMount = Enzyme.mount;

  Enzyme.shallow = function (comp, opts) {
    if (comp.type._requiresReduxStore) {
      var wrapper = originalShallow(comp, { context: { store: _reducerRegistry2.default.store } });

      if (comp.type._legacyConnect) {
        return wrapper.dive();
      } else {
        return wrapper;
      }
    } else {
      return originalShallow(comp, opts);
    }
  };

  Enzyme.mount = function (comp, opts) {
    if (comp.type._requiresReduxStore) {
      var wrapper = originalShallow(comp, { context: { store: _reducerRegistry2.default.store } });

      if (comp.type._legacyConnect) {
        return originalMount(wrapper.dive());
      } else {
        return originalMount(wrapper);
      }
    } else {
      return originalMount(comp, opts);
    }
  };
};