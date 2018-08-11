"use strict";

var calculerPerimetreCarré;
var calculerPerimetreRectangle;
var definirFigure;
var valeur1;
var valeur2;
var kbd;
var resultat;

kbd = require("kbd");

console.log("Donnez la valeur 1");
valeur1 = kbd.getLineSync();
valeur1 = Number(valeur1);

console.log("Donnez la valeur 2");
valeur2 = kbd.getLineSync();
valeur2 = Number(valeur2);

calculerPerimetreCarré = function(a,b) {
	resultat = (a*4);
}

calculerPerimetreRectangle = function(a1,b1) {
	var c;
	c = a1 +b1;
	resultat = c * 2;
}


definirFigure = function (a2,b2) {
	if (a2 === b2) {
		console.log("La figure est un carré.");
		calculerPerimetreCarré(a2,b2);
		console.log("Le périmètre du carré est "+ resultat);
	}
	else {
		console.log("La figure est un rectangle.");
		calculerPerimetreRectangle(a2,b2);
		console.log("Le périmètre du rectangle est "+ resultat);
	}
}

definirFigure(valeur1,valeur2);
