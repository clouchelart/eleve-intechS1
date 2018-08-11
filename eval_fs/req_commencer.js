//=============================================================================
//Traitement de "req_commencer"
//Auteur : C.Louchelart
//Version : 30/01/2018
//=============================================================================

"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

	var marqueurs;
	var page;
	var contenu;
	var cadenas;
	var secret;
	var actuel;
	var etat;

// Initialisation du fichier "cadenas.json"
	
	cadenas = {
			"secret" : [ 0, 0, 0, 0],
			"actuel" : [ 0, 0, 0, 0],
			"etat" : "o"
};

	contenu = JSON.stringify(cadenas);

	fs.writeFileSync("./"+"cadenas.json", contenu, "utf-8");

	//AFFICHAGE DE LA PAGE D'INITIALISATION DU CADENAS

	page = fs.readFileSync('modele_cadenas.html', 'utf-8');
	marqueurs = {};
	marqueurs["nb0"] = cadenas.actuel[0]
	marqueurs["nb1"] = cadenas.actuel[1]
	marqueurs["nb2"] = cadenas.actuel[2]
	marqueurs["nb3"] = cadenas.actuel[3]
	marqueurs.etat = "cadenas_ouvert.jpg"
	
	
	marqueurs.erreur = "";
	page = page.supplant(marqueurs);

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};

//------------
module.exports = trait;
