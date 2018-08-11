"use strict";

var fs = require('fs');
var http = require('http');
var url = require("url");
var serveur;
var traiter_requete;

traiter_requete = function (req, res) {
	var requete;
	var ressource;

	console.log("Requete : " + req.url);
	requete = url.parse(req.url, true);
	console.log("Path : " + requete.pathname);

	try {

		ressource = fs.readFileSync(requete.pathname.substr(1));

		res.writeHead(200, {'Content-Type': 'image/png'});
		res.write(ressource);
		res.end();
	}catch(erreur){
		res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
		res.write("ERROR 404");       
		res.end();     
	}
};

serveur = http.createServer(traiter_requete);

serveur.listen(5000);

console.log('Serveur en écoute sur le port 5000');

