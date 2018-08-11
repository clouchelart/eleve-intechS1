//=============================================================================
//Traitement de req_changer"
//Auteur : C.Louchelart
//Version : 30/01/2018
//=============================================================================

"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

	var marqueurs = {};
	var page;
	var contenu;
	var cadenas;
	var secret;
	var actuel;
	var etat;
	var moins;
	var plus;
	
	
	//CHANGEMENT DU CODE DU CADENAS
	
	page = fs.readFileSync('modele_cadenas.html', 'UTF-8');
	contenu = fs.readFileSync("cadenas.json", "UTF-8");
	cadenas = JSON.parse(contenu);
	if (query.signe === "moins"){
		cadenas.actuel[query.caze]-=1;
		if (cadenas.actuel[query.caze] === -1){
			cadenas.actuel[query.caze] = 9
		}
	}
	if (query.signe === "plus"){
		cadenas.actuel[query.caze]+=1;
		if (cadenas.actuel[query.caze] === 10){
			cadenas.actuel[query.caze] = 0
		}
	}
	if (cadenas.etat === "o"){
		marqueurs.etat = "cadenas_ouvert.jpg";
	}	
		else {marqueurs.etat = "cadenas_ferme.jpg";
	}		
	if (cadenas.etat === "f"){
		cadenas.secret[0] === cadenas.actuel[0];
		cadenas.secret[1] === cadenas.actuel[1];
		cadenas.secret[2] === cadenas.actuel[2];
		cadenas.secret[3] === cadenas.actuel[3];
		
		marqueurs.etat = "cadenas_ouvert.jpg";
	}

	marqueurs["nb0"] = cadenas.actuel[0]
	marqueurs["nb1"] = cadenas.actuel[1]
	marqueurs["nb2"] = cadenas.actuel[2]
	marqueurs["nb3"] = cadenas.actuel[3]
	
	contenu = JSON.stringify(cadenas)
	fs.writeFileSync("cadenas.json", contenu, 'UTF-8')
	
	marqueurs.erreur = "";
	page = page.supplant(marqueurs);

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};


//------------
module.exports = trait;

