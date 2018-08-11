"use strict";

var kbd = require ("kbd");

var nb;
var croix = "X";
var point = ".";
var inc = 0;
var i = 1;
var j = 1;

do {
	console.log("taille ? ");

	nb = kbd.getLineSync();
	nb = Number(nb);
}
while(((nb % 2) === 0));

inc = (nb - 1)/2;

while (j <= nb) {

	i = 1;

	while(i <= nb) {

		if(i === inc+1 || j === inc+1) {
			process.stdout.write(croix);
		}else {
			process.stdout.write(point);
		}

		i = i+1;
	}
	console.log();
	j = j+1;
}
