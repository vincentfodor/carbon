"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = "The server response does not contain an $items attribute.\n\nThe SelectAsync component expects the data to be in the format of:\n\n  $items: [Array] - required, the items to render\n  $page: [Integer] - optional, for paginated responses\n  $total: [Integer] - optional, for paginated responses\n\nIf your API response does not match this, you can modify it using the 'formatResponse' prop:\n\n<SelectAsync formatResponse={ response => ({ ...response, data: { $items: response.myItems } }) } />\n\nThis follows the axios response schema: https://github.com/axios/axios#response-schema";
exports.default = _default;