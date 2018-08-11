// Test de la fonction croissant
// La fonction croissant teste qu'une liste de nombres est croissante 

"use strict";

var liste = [];

var croissant = function(liste) {
var result = true;
var i;

	for(i = 0; i <= liste.length;i++) {
		if (liste[i] > liste[i+1]) {
			result = false;
		}
	}
	return result;

}

liste = [-1, 2, 6, -7, -5, -8, 10, -10, 15]
console.log(croissant(liste));


liste = [-1, 2, 6, 7, 15, 18, 100, 101, 150]
console.log(croissant(liste));

