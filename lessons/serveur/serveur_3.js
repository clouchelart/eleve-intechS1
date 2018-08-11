"use strict";

var fs = require("fs");
var remedial = require("remedial");
var http = require("http");
var url = require("url");
var path = require("path");
var moment = require("moment");
var traiter_requete;
var serveur;

traiter_requete = function(req,res) {
	var requete;
	var ressource;
	var extension;
	var type;
	var marqueurs;
	var pathname;
	var query;

	console.log("-----------------------------------------------------------");
	console.log("Requete : " + req.url);
	requete = url.parse(req.url, true);
	pathname = requete.pathname;
	query = requete.query;
	console.log("Path : " + pathname);
	console.log("Query string : " + JSON.stringify(query));

	if(requete.pathname === "/moment") {

		ressource = fs.readFileSync("moment.html", "UTF-8");

		moment.locale('fr');

		marqueurs = {};
		marqueurs["heure"] = moment().format('H:mm:ss');
		marqueurs["date"] = moment().format('dddd Do MMMM');
		ressource = ressource.supplant(marqueurs);

		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(ressource);
		res.end();

	} else {

		extension = path.extname(pathname);

		if(extension === ".txt") {
			type = "text/plain";
		} else if(extension === ".html") {
			type = "text/html";
		} else if(extension === ".css") {
			type = "text/css";
		} else if(extension === ".jpeg") {
			type = "image/jpeg";
		} else if(extension === ".png") {
			type = "image/png";
		} else if(extension === ".mp3") {
			type = "audio/mp3";
		}

		try {
			ressource = fs.readFileSync(requete.pathname.substr(1));
			res.writeHead(200, {'Content-Type': type});
			res.write(ressource);
			res.end();
		} catch (e) {
			res.writeHead(404, {'Content-Type': 'text/plain'});
			res.write('ERREUR 404 : ressource inconnue');
			res.end();
		}

	}
};

serveur = http.createServer(traiter_requete);

serveur.listen(5000);

console.log("Le serveur est en écoute sur le port 5000");
