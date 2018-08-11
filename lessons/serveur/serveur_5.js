"use strict";

var http = require('http');
var url = require('url');
var serveur;
var traiter_requete;

var req_afficher_formulaire = require("./req_afficher_formulaire.js");
var req_statique = require("./req_statique_3.js");
var req_creer_profil = require("./req_creer_profil.js");

traiter_requete = function (req, res) {
	var requete;
	var pathname;
	var query;

	requete = url.parse(req.url, true);
	pathname = requete.pathname;
	query = requete.query;

	console.log("---------------------------------------");
	console.log("Requete : " + req.url);
	console.log("Path : " + pathname);
	console.log("Query string : " + JSON.stringify(query));
	
	if(pathname === "/afficher_formulaire") {
		req_afficher_formulaire(req, res, query);
	} else if(pathname === "/creer_profil") {
		req_creer_profil(res, query);
	}else {
		req_statique(req, res, pathname);
	}
};
serveur = http.createServer(traiter_requete);

serveur.listen(5000);

console.log("Le serveur est en écoute sur le port 5000");
