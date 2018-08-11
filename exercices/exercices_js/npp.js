// Mon premier programme de jeu - version 2

"use strict";
var kbd = require ("kbd"); // objet clavier
var nbSecret; // nb secret à découvrir
var nbJoueur; // nb proposé par le joueur
var compteur;
var Partie;
var PartieMax;

Partie = 0;
process.stdout.write("combien de partie(s) voulez vous jouer ?");
PartieMax = kbd.getLineSync();
PartieMax = Number(PartieMax);
do {
	Partie++;
	compteur = 0;
	nbSecret = Math.floor(Math.random() * 10) + 1;

	do {

		if (compteur === 0) {
			console.log("IL FAUT TROUVER UN NOMBRE ENTRE 1 ET 10");
		}

		console.log("Partie"+Partie+" / "+PartieMax);
		process.stdout.write("Quel nombre proposez vous ? ");
		nbJoueur = kbd.getLineSync();
		nbJoueur = Number(nbJoueur);
		compteur++

			if (nbJoueur > 10 || nbJoueur < 1) {
				console.log("T'es pas du tout entre un et dix la !!!");
			} else if (nbJoueur === nbSecret) {
				console.log("T'es un champion Bro !!!");
				if (compteur ===1) {
					console.log
						("Tu l'as fait en" +compteur+ "seul fois mon pote BRAVO !!");
				} else if (compteur === 2) {
					console.log
						("Tu l'as fait en" +compteur+ "fois, sa passe mais peut mieux faire !!");
				} else if (compteur ===3) {
					console.log("Tu l'as fait en" +compteur+ "fois, pff médiocre tout cela !!");
				} 
			} else if (nbJoueur < nbSecret) {
				console.log("Plus grand !!");
			} else if (nbJoueur > nbSecret) {
				console.log("Plus petit !!");
			} else {
				console.log("INCORRECT !!!");
			}
	} while (nbJoueur !== nbSecret);
} while (Partie < PartieMax);
