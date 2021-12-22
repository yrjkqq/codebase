"use strict";

require("core-js/modules/es6.symbol.js");

require("core-js/modules/web.dom.iterable.js");

var sym = Symbol();
var promise = Promise.resolve();
var arr = ["1", "2"];
var check = arr.includes("yeah!");
console.log("check: ", check);
console.log(arr[Symbol.iterator]());

const fn = () => 1;