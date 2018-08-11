"use strict";

var kbd;            // objet clavier
var nbSecret;       // nb secret à découvrir
var nbJoueur;       // nb proposé par le joueur
var compteur;       // compteur du nombre d'essais du joueur
var i;
var meilleur_score;
var nbPartie;
var listeCompteur = [];

kbd = require ("kbd");
process.stdout.write("Combien de parties souhaitez vous jouer ? ");
nbPartie = kbd.getLineSync();
console.log("Il faut trouver un nombre entre 1 et 10");

nbSecret = Math.floor(Math.random() * 10) + 1;

nbPartie = Number(nbPartie);

for(i = 0; i < nbPartie; i++) {

compteur = 0;

do{
	process.stdout.write("Quel nombre proposez-vous ? ");
	nbJoueur = kbd.getLineSync();
	nbJoueur = Number(nbJoueur);
	compteur = compteur + 1;

	if(nbJoueur === nbSecret) {
		console.log("Gagné !");
	} else if (nbJoueur < nbSecret) {
		console.log("Le nombre secret et plus grand !");
	} else if (nbJoueur > nbSecret) {
		console.log("Le nombre secret est plus petit !");
	} else {
		console.log("Erreur : vous devez entrer un nombre entre 1 et 10 !");
	}
} while (nbJoueur !== nbSecret);

listeCompteur[i] = compteur;


console.log("Vous avez trouvé en " + compteur + " coup(s)!");
}
meilleur_score = function() {
	var petit = listeCompteur[0];
	for(i = 1;i<listeCompteur.length;i++){
		if(petit>listeCompteur[i]){
			petit = listeCompteur[i];
		}
	}
	console.log("Votre meilleur score est "+ petit);
}

meilleur_score();
