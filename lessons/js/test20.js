"use strict";

var fs = require("fs");
var etudiant = {};
var etudiantJSON;
var etudiantPARSE = {};
etudiant.nom = "louchart";
etudiant.prenom = "éric";
etudiant.age = 25;

etudiantJSON = JSON.stringify(etudiant);

fs.writeFileSync("test20_1",etudiantJSON,"utf-8");

etudiantJSON = fs.readFileSync("test20_1","utf-8");

etudiantPARSE = JSON.parse(etudiantJSON);

console.log(etudiantPARSE);
console.log(etudiantPARSE.nom);
