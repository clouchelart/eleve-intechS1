//=============================================================================
//Affichage d'une page d'erreur
//Auteur : C.Louchelart
//Version : 30/01/2018
//=============================================================================

"use strict";

var fs = require("fs");
var path = require("path");


var show_erreur = function ( req, res, query) {
	res.writeHead(200, {'Content-Type': 'text/plain'});

	res.write('ERREUR SERVEUR');

	res.end();
};

//------------

module.exports = show_erreur;
