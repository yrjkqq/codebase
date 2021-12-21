"use strict";

require("core-js/modules/es6.symbol.js");

require("core-js/modules/es6.object.to-string.js");

require("core-js/modules/es6.promise.js");

require("core-js/modules/es6.string.includes.js");

require("core-js/modules/es7.array.includes.js");

require("core-js/modules/es6.string.iterator.js");

require("core-js/modules/es6.array.iterator.js");

require("core-js/modules/web.dom.iterable.js");

var sym = Symbol();
var promise = Promise.resolve();
var check = arr.includes("yeah!");
console.log(arr[Symbol.iterator]());