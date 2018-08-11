"use strict";

var etudiant1 = {};
var etudiant2 = {};

etudiant1.nom = "Brel";
etudiant1.prenom = "Jacques";

etudiant2 = etudiant1;

console.log("etudiant2 = " + etudiant2.nom + " " + etudiant2.prenom);

etudiant1.nom = "Michel";
etudiant1.prenom = "Jean";

console.log("etudiant2 = " + etudiant2.nom + " " + etudiant2.prenom);
