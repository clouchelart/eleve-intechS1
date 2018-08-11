"use strict";

var etudiant = {};
var calculerAge;
var resultat;
var dateNaissance;

//var test;

calculerAge = function() {
	var maintenant;
	var age;
	var dateNaissance;
	var moment;

	moment = require("moment");
	maintenant = moment();
	maintenant = moment([this.dateNaissance.annee,this.dateNaissance.mois,this.dateNaissance.jour]);
	age = maintenant.diff(dateNaissance, 'years');
	return age;
};

/*test = function() {
console.log(this);
};
*/

etudiant.nom = "Louchelart";
etudiant.prenom = "Cédric";
etudiant.dateNaissance = {};
//etudiant.test1 = test;
etudiant.dateNaissance.jour = 19;
etudiant.dateNaissance.mois = 6;
etudiant.dateNaissance.annee = 1998;
etudiant.sexe = "M";
etudiant.age = calculerAge;
//delete etudiant.nom;
resultat = etudiant.age(dateNaissance);
resultat = Number(resultat);

console.log(etudiant.nom,etudiant.prenom,resultat,etudiant.sexe,etudiant.dateNaissance);

//console.log(etudiant.test1());
