"use strict";

var i;
var taille;
var kbd;
var j;

kbd=require ("kbd");
console.log("Taille ?");
taille=kbd.getLineSync();
taille=Number(taille);

for (i=0;i<=taille;i++) {
	for (j=0;j<=1;j++) {
	process.stdout.write("a");
	}
process.stdout.write("\n");
}
