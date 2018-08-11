// Dessin d'un X avec des boucles for 

"use strict";

var kbd = require('kbd');

var taille;
var colonne;
var ligne;

process.stdout.write("Taille ? ");
taille = kbd.getLineSync();

for(ligne = 0; ligne < taille; ligne++) {
	for(colonne = 0; colonne < taille; colonne++) {
		if(colonne === ligne) {
			process.stdout.write("x ");
		} else if(taille - 1 === colonne + ligne) {
			process.stdout.write("x ");
		} else {
			process.stdout.write(". ");
		}
	}
	process.stdout.write("\n");
}
