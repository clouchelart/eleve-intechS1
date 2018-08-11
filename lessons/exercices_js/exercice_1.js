"use strict";

var kbd = require("kbd");
var i;
var n;
var sommes;

console.log("n ?");
n = kbd.getLineSync();

sommes = 0;

for (i = 1;i <= n;i++){
	sommes = sommes + i;
}

console.log("La somme des nombres de 1 à " + n + "vaut " + sommes );
