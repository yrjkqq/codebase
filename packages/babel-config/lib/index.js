"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _symbol = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/symbol"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise"));

var _getIterator2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/get-iterator"));

var sym = (0, _symbol.default)();

var promise = _promise.default.resolve();

var arr = ["1", "2"];
var check = arr.includes("yeah!");
console.log("check: ", check);
console.log((0, _getIterator2.default)(arr));

const fn = () => 1;