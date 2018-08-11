"use strict";

var kbd;            // objet clavier
var nbSecret;       // nb secret à découvrir
var nbJoueur;       // nb proposé par le joueur
var compteur;       // compteur du nombre d'essais du joueur
var reponse;

kbd = require ("kbd");

console.log("Il faut trouver un nombre entre 1 et 10");

nbSecret = Math.floor(Math.random() * 10) + 1;

compteur = 0;

do {
	do {
		process.stdout.write("Quel nombre proposez-vous ? ");
		nbJoueur = kbd.getLineSync();
		nbJoueur = Number(nbJoueur);
		compteur = compteur + 1;

		if (nbJoueur === nbSecret) {
			console.log("Gagné !");
		} else if (nbJoueur < nbSecret) {
			console.log("Le nombre secret et plus grand !");
		} else if (nbJoueur > nbSecret) {
			console.log("Le nombre secret est plus petit !");
		} else {
			console.log("Erreur : vous devez entrer un nombre entre 1 et 10 !");
		}
	} while (nbJoueur !== nbSecret);

console.log("Vous avez trouvé en " + compteur + " coup(s)!");

process.stdout.write("Voulez vous rejouer ? (oui / non) ");
reponse = kbd.getLineSync();

} while (reponse === "oui");
