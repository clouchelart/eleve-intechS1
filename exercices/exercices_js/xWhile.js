// Afficher un X avec des boucles while

"use strict";

var kbd = require('kbd');

var taille;
var ligne;
var colonne;

process.stdout.write("Taille ? ");
taille = kbd.getLineSync();

ligne = 0;
while(ligne < taille) {
	colonne = 0;
	while(colonne < taille) {
		if(ligne === colonne) {
			process.stdout.write("x ");
		} else if(taille - 1 === ligne + colonne) {
			process.stdout.write("x ");
		} else {
			process.stdout.write(". ");
		}
		colonne++;
	}
	process.stdout.write("\n");
	ligne++;
}
