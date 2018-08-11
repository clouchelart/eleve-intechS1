"use strict";

var fs = require("fs");
var http = require("http");
var url = require("url");
var serveur;
var traiter_requete;

traiter_requete = function(req,res){
//res.writeHead(200, {'Content-type': 'text/plain'});

console.log(req.url.substr(1));

res.writeHead(200, {'Content-type': 'text/html; charset=UTF-8'});
res.write("Votre page est bien executé");
res.end();
}


serveur = http.createServer(traiter_requete);

serveur.listen(5000);
console.log("Le serveur à démarré sur le port 5000");
