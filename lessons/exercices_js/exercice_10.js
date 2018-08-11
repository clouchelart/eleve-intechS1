// Test de la fonction compter
// La fonction compter compte le nombre d'occurences d'un nombre dans une liste

"use strict";

var liste = [];

var compter = function(liste, n) {
	var i;
	var result = 0;

	for(i = 0; i < liste.length; i++) {
		if (liste[i] === n) {
			result = result + 1;
		}
	}
	return result;
}

liste = [-1, 2, 6, -7, 2, -8, 10, 2, 15];
console.log(compter(liste, 2));


liste = [-1, 0, 6, 7, 15, 18, 100, 101, 150];
console.log(compter(liste, 4));
