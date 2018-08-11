"use strict";

var ob1
var ob2
var ob3
var tmp;

ob1 = 10;
ob2 = 20;
ob3 = 30;

tmp = ob1;
ob1 = ob2;
ob2 = ob3;
ob3 = tmp;

console.log("ob1 contient " + ob1);
console.log("ob2 contient " + ob2);
console.log("ob3 contient " + ob3);
