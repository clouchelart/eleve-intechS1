"use strict";

var kbd = require ("kbd");
var nb;
var croix = "X";
var point = ".";
var inc = 0;
var i;
var j;
console.log("taille ? ");

nb = Number(kbd.getLineSync());

for(j = 1; j <= nb; j++) {

inc = j-1;

for(i = 1; i<= nb; i++) {

	if (i === j || i === nb-inc) {
		process.stdout.write(croix);
	}else {
		process.stdout.write(point);
	}
}
console.log();
}
