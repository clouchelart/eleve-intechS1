"use strict";

var http = require("http");
var url = require("url");
var mon_serveur;
var port;

// FONCTION DE TRAITEMENT D'UNE REQUETE

var traite_requete = function (req, res) {

	var requete;
	var pathname;;
	var query;

	// RECUPERATION DE L'URL (REQUETE)

	console.log("url reÃ§ue : " + req.url);

	// ANALYSE DE L'URL (SEPARATION DU PATH ET DE LA QUERY STRING)

	requete = url.parse(req.url, true);
	pathname = requete.pathname;
	query = requete.query;

	console.log("pathname : " + pathname);
	console.log("query string (compte) : " + query.compte);
	console.log("query string (mdp) : " + query.mdp);

	// ENVOI DE LA REPONSE

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write("<html>Bonjour " + query.compte + "</html>");
	res.end();

};

// CREATION ET LANCEMENT DU SERVEUR

mon_serveur = http.createServer(traite_requete);
port = 5000;
console.log("listen port " + port);
mon_serveur.listen(port);

