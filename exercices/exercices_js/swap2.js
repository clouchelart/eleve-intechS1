"use strict";

var info1;
var info2;
var tmp;

info1 = 10;
info2 = 20;

tmp = info1;
info1 = info2;
info2 = tmp;

console.log("info1 contient " + info1);
console.log("info2 contient " + info2);
