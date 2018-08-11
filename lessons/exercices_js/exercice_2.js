"use strict";

var kbd = require("kbd");
var n;
var i;

console.log("n ?");
n = kbd.getLineSync();
n = Number(n);

for (i = 1; i < 10; i++) {
console.log(i +" x " + n + " = " + i*n);
};
