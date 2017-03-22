import Store from 'carbon/lib/utils/flux/store';
import ImmutableHelper from 'carbon/lib/utils/helpers/immutable';
import AppDispatcher from './../dispatcher';

// Work out extending a class
/* class AppStore extends Store{} */
/* let appStore = new AppStore('appStore', data, AppDispatcher); */
let data = ImmutableHelper.parseJSON({foo: 'bar'});
let store = new Store('appStore', data, AppDispatcher);

export default store;

