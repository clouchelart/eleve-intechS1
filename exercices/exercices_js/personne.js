// Programme demonstration objet

"use strict";

var kbd = require("kbd");
var reponse;

var personne = {};                              // creation de l'objet personne

var calculerAge = function() {
	var moment = require("moment");
	var maintenant;
	var naissance;
	var age;

	maintenant = moment();
	naissance = moment([this.dateNaissance.annee,
			this.dateNaissance.mois,
			this.dateNaissance.jour]);
	age = maintenant.diff(naissance, 'years')
		return age;
}

process.stdout.write("Quel est votre nom ? ");
personne.nom = kbd.getLineSync();               // ajout propriete nom

process.stdout.write("Quel est votre prenom ? ");
personne.prenom = kbd.getLineSync();            // ajout propriete prenom

personne.dateNaissance = {};                    // ajout propriete dateNaissance

process.stdout.write("Quel jour êtes-vous né ? ");
reponse = kbd.getLineSync();
personne.dateNaissance.jour = Number(reponse);  // ajout propriete jour

process.stdout.write("Quel mois êtes-vous né ? ");
reponse = kbd.getLineSync();
personne.dateNaissance.mois = Number(reponse);  // ajout propriete mois

process.stdout.write("Quelle annee êtes-vous né ? ");
reponse = kbd.getLineSync();
personne.dateNaissance.annee = Number(reponse); // ajout propriete annee

personne.age = calculerAge;                     // ajout méthode age

console.log("Bonjour " + personne.nom + " " + personne.prenom);
console.log("Vous avez " + personne.age() + " ans");
