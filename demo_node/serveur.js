//============================================================================
// SERVEUR VERSION 3
// Patrice Thiré
// 3/10/2015
//============================================================================

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

    console.log("url reçue : " + req.url);

    // ANALYSE DE L'URL (SEPARATION DU PATH ET DE LA QUERY STRING)

    requete = url.parse(req.url, true);
    pathname = requete.pathname;
    query = requete.query;

    console.log("pathname : " + pathname);
    process.stdout.write("query string : ");
    console.log(query);

    // ENVOI DE LA REPONSE

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<html>Re&ccedil;u " + req.url + "</html>");
    res.end();

};

// CREATION ET LANCEMENT DU SERVEUR

mon_serveur = http.createServer(traite_requete);
port = 5000;
console.log("listen port " + port);
mon_serveur.listen(port);
