"use strict";

var fs = require("fs");
var remedial = require("remedial");
var trait = function(res, query) {

	var ressource;
	var marqueurs;
	var contenu_fichier;
	var liste_profil = [];

	var new_profil = {}
	new_profil.nom = query.nom;
	new_profil.prenom = query.prenom;
	new_profil.sexe = query.sexe;

	liste_profil[liste_profil.length] = new_profil;
	
	contenu_fichier = JSON.stringify(liste_profil);

	fs.writeFileSync("profils.json", contenu_fichier, 'utf-8');

	ressource = fs.readFileSync('page_confirmation_creation.html', 'utf-8');
	
	res.writeHead(200, {'Content-type': 'text/html'});
	res.write(ressource);
	res.end();
}

module.exports = trait;
