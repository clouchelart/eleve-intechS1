"use strict";

var kbd = require ("kbd");
var nb;
var croix = "X";
var point = ".";
var inc = 0;
var i = 1;
var j = 1;
console.log("taille ? ");

nb = Number(kbd.getLineSync());

while(j <= nb) {
	
	inc = j-1;
	i = 1;

	while(i <= nb) {
	
		if (i === j || i === nb-inc) {
			process.stdout.write(croix);
		}else {
			process.stdout.write(point);
		}

		i = i+1;
	}
	console.log();
	j=j+1;
}
