"use strict";

var kbd = require ("kbd");

var nb;
var croix = "X";
var point = ".";
var inc = 0;
var i;
var j;

do {
console.log("taille ? ");

nb = kbd.getLineSync();
nb = Number(nb);
}
while(((nb % 2) === 0));

for(j = 1; j <= nb; j++) {

    inc = (nb - 1)/2;

	for(i = 1; i <= nb; i++) {

		if(i === inc+1 || j === inc+1) {
			process.stdout.write(croix);
		}else {
			process.stdout.write(point);
			}

		}

	console.log();
}

