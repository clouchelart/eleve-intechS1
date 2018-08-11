//=============================================================================
//Traitement de req_fermer
//Auteur : C.Louchelart
//Version : 30/01/2018
//=============================================================================

"use strict";

var fs = require('fs');
require('remedial');

var trait = function (req, res, query) {

	var marqueurs = {};
	var page;
	var contenu;
	var cadenas;
	var secret;
	var actuel;
	var etat;

	//FERMETURE DU CADENAS

	page = fs.readFileSync('modele_cadenas.html', 'utf-8');
	contenu = fs.readFileSync("cadenas.json", "UTF-8");
	cadenas = JSON.parse(contenu);
	if (cadenas.etat === "o"){
		cadenas.etat = "f";
		cadenas.secret[0] = cadenas.actuel[0];
		cadenas.secret[1] = cadenas.actuel[1];
		cadenas.secret[2] = cadenas.actuel[2];
		cadenas.secret[3] = cadenas.actuel[3];
		
		marqueurs.etat = "cadenas_ferme.jpg";
	}
	else {marqueurs.etat = "cadenas_ferme.jpg";
	}

	contenu = JSON.stringify(cadenas);
	fs.writeFileSync("cadenas.json", contenu, "utf-8");

	marqueurs["nb0"] = cadenas.actuel[0]
	marqueurs["nb1"] = cadenas.actuel[1]
	marqueurs["nb2"] = cadenas.actuel[2]
	marqueurs["nb3"] = cadenas.actuel[3]

	page = page.supplant(marqueurs);

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};


//------------
module.exports = trait;
