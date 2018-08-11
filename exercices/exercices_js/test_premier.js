"use strict";

var kbd = require("kbd");
var nbSearch; // nombre dont on cherche si il est premier ou non
var nbNumber; // diviseur
var Fin; // fin du programme
var nbDiviseur; // plus grand diviseur
var Premier; // fonction

nbSearch = Number (nbSearch);
nbNumber = Number (nbNumber);
process.stdout.write ("Quel est le nombre à tester ?");
nbSearch = kbd.getLineSync();
nbNumber = nbSearch;

Premier = function () {

	do {
		nbNumber--;
		if (nbSearch % nbNumber === 0 ) {
			Fin = false;
			nbDiviseur = nbNumber;
		} else {
			Fin = true;
		}
	} while (nbNumber > 2 && nbSearch % nbNumber !== 0);

	return Fin;
}

Fin = Premier();
console.log();
if (Fin === true) {
	console.log("Ce nombre est premier.");
} else if (Fin === false) {
	console.log("Ce nombre n'est pas premier, il est divisible par " + nbDiviseur + " . ");
} else {
	console.log("Erreur !");
}
console.log();
