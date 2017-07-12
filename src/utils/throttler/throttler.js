import Browser from './../helpers/browser';

const _window = Browser.getWindow();

class Throttler {
  run = (callback) => {
    if (this._requestedFrame) {
      // if there is an animation frame in progress then cancel it
      cancelFrame(this._requestedFrame);
    }

    this._requestedFrame = requestFrame(callback);
  }
}

/**
 * Returns a supported requestAnimationFrame for the current browser.
 */
const requestFrame = (() => {
  const request = _window.requestAnimationFrame ||
                  _window.mozRequestAnimationFrame ||
                  _window.webkitRequestAnimationFrame ||
                  ((callback) => _window.setTimeout(callback, 20));

  return (callback) => { return request(callback); };
})();

/**
 * Returns a supported cancelAnimationFrame for the current browser.
 */
const cancelFrame = (() => {
  const cancel = _window.cancelAnimationFrame ||
                 _window.mozCancelAnimationFrame ||
                 _window.webkitCancelAnimationFrame ||
                 _window.clearTimeout;

  return (id) => { return cancel(id); };
})();

export default Throttler;
