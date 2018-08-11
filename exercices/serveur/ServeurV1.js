//mon premier serveur.

"use strict";

var http = require("http");
var mon_serveur;
var port;

// FONCTION DE TRAITEMENT D'UNE REQUETE

var traiter_requete = function (req, res) {

	console.log("url reçue : " + req.url);

	// ANALYSER ICI LA REQUETE RECUE PUIS CONSTRUIRE ET RENVOYER LA REPONSE
};

// CREATION ET LANCEMENT DU SERVEUR

mon_serveur = http.createServer(traiter_requete);
port = 5000;
console.log("Seveur écoute sur port " + port);
mon_serveur.listen(port);

